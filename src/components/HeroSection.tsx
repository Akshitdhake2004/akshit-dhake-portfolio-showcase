
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-primary">Hello, I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight">
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
              <Button asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Akshitdhake2004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:akshit.dhake@mitaoe.ac.in"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-4xl font-bold text-white">
                  AD
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg">
                <p className="font-medium">
                  Backend Developer & Cloud Enthusiast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
