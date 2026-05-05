import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(email, password);
      navigate("/admin");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      setResetSent(true);
      toast({ title: "Reset link sent", description: "Check your email for the password reset link." });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-5">
      <div className="w-full max-w-sm">
        <a href="/" className="block text-center text-foreground font-sans text-sm tracking-[0.2em] uppercase font-semibold mb-10">
          Functional Changes
        </a>

        {error && (
          <div className="mb-6 border border-signal/20 bg-signal/5 px-4 py-3 text-sm text-signal rounded-sm">
            {error}
          </div>
        )}

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-0 border-b border-border bg-transparent px-0 py-3 pr-10 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <button
              type="button"
              onClick={() => { setMode("forgot"); setError(""); }}
              className="block w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Forgot password?
            </button>
          </form>
        ) : (
          <div>
            {resetSent ? (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">Check your email for the reset link.</p>
                <button
                  onClick={() => { setMode("login"); setResetSent(false); }}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Back to sign in
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <p className="text-sm text-muted-foreground">Enter your email and we'll send you a reset link.</p>
                <div>
                  <label htmlFor="reset-email" className="block text-xs font-medium text-foreground mb-2 font-sans tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3 text-sm font-medium font-sans rounded-sm transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send reset link"}
                </button>
                <button
                  type="button"
                  onClick={() => { setMode("login"); setError(""); }}
                  className="block w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Back to sign in
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
