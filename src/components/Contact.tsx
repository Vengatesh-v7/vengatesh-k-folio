import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vengateshkv123@gmail.com",
      href: "mailto:vengateshkv123@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9003638125",
      href: "tel:+919003638125",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cuddalore, Tamil Nadu",
      href: "#",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // User needs to get this from web3forms.com
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully! ✅",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h4 className="text-2xl font-bold mb-4">Contact Information</h4>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl hover-lift hover-glow transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">{info.title}</h5>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-md animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 hover-lift hover-glow"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Get your free Web3Forms access key at{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  web3forms.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;