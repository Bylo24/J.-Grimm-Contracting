import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OriginStory from "@/components/OriginStory";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24 sm:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <OriginStory />
      <Blog />
      <Testimonials />
      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default Index;
