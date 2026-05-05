import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Check for recovery token in URL hash
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setReady(true);
    } else {
      // Try to get session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          setReady(true);
        } else {
          navigate("/login");
        }
      });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      toast({ title: "Password updated", description: "You can now sign in with your new password." });
      navigate("/login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <div className="w-full max-w-sm">
        <a href="/" className="block text-center text-foreground font-sans text-sm tracking-[0.2em] uppercase font-semibold mb-10">
          Functional Changes
        </a>

        <h1 className="font-display text-2xl text-foreground text-center mb-8">Set new password</h1>

        {error && (
          <div className="mb-6 border border-signal/20 bg-signal/5 px-4 py-3 text-sm text-signal rounded-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
              New Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
