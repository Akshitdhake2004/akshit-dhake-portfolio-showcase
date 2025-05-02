
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-20 overflow-hidden relative perspective-1000">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
      </div>

      <div 
        className="section-container relative z-10"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-primary animation-float">Hello, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight gradient-text text-glow">
                Akshit Jayesh Dhake
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Computer Engineering Student
              </p>
            </div>

            <p className="text-lg leading-relaxed max-w-2xl">
              I'm a third-year student at MIT Academy of Engineering, Pune, passionate about
              backend development, full-stack applications, and cloud systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="animated-gradient-bg hover-lift group">
                <a href="#projects">
                  View My Work 
                  <div className="ml-2 overflow-hidden">
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-10 transition-transform duration-300" />
                    <ArrowRight className="h-4 w-4 -translate-x-6 group-hover:translate-x-0 transition-transform duration-300" />
                  </div>
                </a>
              </Button>
              <Button asChild variant="outline" className="hover-lift border-gradient-animated">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Akshitdhake2004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors animated-border p-2 social-icon-hover"
                aria-label="Github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:akshit.dhake@mitaoe.ac.in"
                className="hover:text-primary transition-colors animated-border p-2 social-icon-hover"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors animated-border p-2 social-icon-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative animation-float-slow">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20 shine-effect avatar-glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/60 to-blue-500/40 flex items-center justify-center text-4xl font-bold text-white">
                  AD
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background/70 backdrop-blur-md rounded-lg p-4 shadow-lg gradient-card animation-pulse transform hover:scale-110 transition-transform duration-300">
                <p className="font-medium relative z-10">
                  Backend Developer & Cloud Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full border border-primary/30 h-12 w-12" 
            onClick={scrollToNextSection}
          >
            <ArrowDown className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
}
