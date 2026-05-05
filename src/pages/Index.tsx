import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OriginStory from "@/components/OriginStory";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <OriginStory />
      <Blog />
      <Contact variant="quote" />
      <Contact variant="contact" />
      <Footer />
    </div>
  );
};

export default Index;
