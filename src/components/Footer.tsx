
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-xl font-heading font-bold">
              Akshit<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              &copy; {currentYear} Akshit Dhake. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Akshitdhake2004"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:akshit.dhake@mitaoe.ac.in"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
