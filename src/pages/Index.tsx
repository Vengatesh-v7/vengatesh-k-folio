import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import OtherProjects from "@/components/OtherProjects";
import Certifications from "@/components/Certifications";
import Quotes from "@/components/Quotes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Experience />
          <Projects />
          <OtherProjects />
          <Certifications />
          <Quotes />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
