
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      // Find the last section that is currently in view (replacing findLast)
      let currentSection = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, activeSection]);

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeNavItem = navRef.current.querySelector(`a[href="#${activeSection}"]`);
        if (activeNavItem) {
          const rect = activeNavItem.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();
          
          setIndicatorStyle({
            left: rect.left - navRect.left,
            width: rect.width,
            transform: 'translateX(0)',
            transition: 'all 0.3s ease'
          });
        }
      }
    };
    
    updateIndicator();
    // Add resize event listener to update indicator on window resize
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled 
        ? "bg-background/80 backdrop-blur-md shadow-sm py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-heading font-bold text-foreground shine-effect">
              Akshit<span className="text-primary">.</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-4 relative">
            {/* Nav Indicator - Animated underline */}
            <span 
              className="absolute bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300"
              style={indicatorStyle}
            ></span>
            
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors relative",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                )}
              </a>
            ))}
            <ThemeToggle />
          </nav>
          
          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="animation-pulse"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 transition-all duration-300 transform",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md shadow-lg gradient-card">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-all",
                activeSection === item.href.substring(1)
                  ? "text-primary bg-secondary/50 translate-x-2"
                  : "text-foreground hover:bg-secondary hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
