import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              👋 Welcome to my Portfolio
            </div>

            <div>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
                Hi! I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-gradient">Vengatesh K</span>
              </h1>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Full Stack Developer <span className="text-primary">(MERN)</span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Accomplished Full Stack Developer with over <span className="text-primary font-medium">3 years of experience</span> building and maintaining robust web and mobile applications. 
              Proficient in both <span className="text-primary font-medium">front-end and back-end technologies</span>, consistently delivering high-quality software solutions. 
              Known for effective teamwork and technical leadership.
            </p>

            {/* Contact Details */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>vengateshkv123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+919003638125" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span>📞</span>
                  <span>+91 9003638125</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Cuddalore, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/vengateshk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift hover-glow"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vengateshkv123@gmail.com"
                className="w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover-lift hover-glow"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/Vengatesh_K_Resume.pdf" download>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground hover-lift hover-glow">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="hover-lift hover-glow">
                  Let's Talk
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative">
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-card shadow-lg rounded-2xl p-4 z-10 animate-float">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>

              {/* Profile Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-background">
                    <img
                      src={profileImage}
                      alt="Vengatesh K - Full Stack Developer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float-slow" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card shadow-lg rounded-full px-6 py-3 flex items-center gap-2 z-10">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Cuddalore, TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
