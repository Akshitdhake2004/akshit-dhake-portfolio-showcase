
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Users, Code, Calendar, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "home-automation",
    title: "Home Automation",
    description: "A smart IoT system for controlling fan speed and lights via web or physical interface",
    detailDescription: "This comprehensive IoT home automation system allows users to control various home appliances through a web interface or physical controls. The system utilizes ESP32 as the main controller, communicating with Arduino UNO for peripheral device management. Blynk platform provides the cloud infrastructure for remote access and control.",
    images: ["/images/home-automation.jpg", "/images/placeholder.svg", "/images/placeholder.svg"],
    tech: ["ESP32", "Arduino UNO", "Blynk", "IoT"],
    features: [
      "Remote control of home appliances",
      "Physical switches integration",
      "Mobile app interface",
      "Power consumption monitoring",
      "Scheduled operations"
    ],
    challenges: "Integrating physical switches with digital controls and ensuring reliable connectivity were the main challenges.",
    teamSize: 4,
    year: "2023",
    link: "#",
    github: "https://github.com/username/home-automation"
  },
  {
    id: "expense-analyzer",
    title: "Expense Analyzer",
    description: "A Java Swing desktop app that lets users track and visualize daily expenses with graph reports",
    detailDescription: "Expense Analyzer is a comprehensive desktop application built with Java Swing that enables users to efficiently track and analyze their daily expenses. The application features an intuitive interface for expense entry, categorization, and visualization through dynamic graphs and reports. Data is persistently stored in an SQL database.",
    images: ["/images/expense-analyzer.jpg", "/images/placeholder.svg", "/images/placeholder.svg"],
    tech: ["Java", "Swing", "SQL"],
    features: [
      "Expense tracking by categories",
      "Visual reports and graphs",
      "Budget planning",
      "Data export functionality",
      "Multi-user support"
    ],
    challenges: "Designing an intuitive UI and implementing efficient database queries for large datasets were key challenges.",
    teamSize: 1,
    year: "2022",
    link: "#",
    github: "https://github.com/username/expense-analyzer"
  },
  {
    id: "dryme",
    title: "Dryme",
    description: "A laundry service management platform with location-based booking, OTP authentication, and order tracking",
    detailDescription: "Dryme is a comprehensive laundry service management platform that streamlines the process of connecting customers with laundry service providers. The application features location-based service discovery, secure OTP authentication for user verification, real-time order tracking, and a robust admin dashboard for service providers to manage orders efficiently.",
    images: ["/images/dryme.jpg", "/images/placeholder.svg", "/images/placeholder.svg"],
    tech: ["React", "Node.js", "Express.js", "SQL"],
    features: [
      "Location-based service discovery",
      "OTP authentication",
      "Real-time order tracking",
      "Service provider dashboard",
      "Payment integration"
    ],
    challenges: "Implementing real-time tracking and ensuring secure payment processing were significant challenges during development.",
    teamSize: 6,
    year: "2023",
    link: "#",
    github: "https://github.com/username/dryme"
  },
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'tech'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Project Not Found</h1>
          <Button asChild>
            <Link to="/#projects">Return to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const tabContent = {
    overview: (
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed">{project.detailDescription}</p>
        
        <h3 className="text-xl font-semibold mt-6">Challenges</h3>
        <p>{project.challenges}</p>
        
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="animated-gradient-bg hover-lift">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Live Demo <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="hover-lift">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View Source <Code className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    ),
    features: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feature, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg border bg-card/60 backdrop-blur-sm flex items-start gap-3 hover:shadow-md transition-shadow hover:border-primary/30"
            >
              <div className="mt-1 text-primary">
                <Star className="h-5 w-5 animation-pulse" />
              </div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    tech: (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Technology Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map(tech => (
            <Badge 
              key={tech} 
              className="px-4 py-2 text-base border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors animation-pulse-tech"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Development Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border bg-card/60 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">Team Size</p>
              <p className="text-lg font-medium flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {project.teamSize === 1 ? 'Solo Project' : `${project.teamSize} developers`}
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card/60 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">Year</p>
              <p className="text-lg font-medium flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen pt-20 pb-20 relative bg-gradient-radial from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <AnimatePresence>
        {isLoaded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="section-container relative z-10"
          >
            <Link to="/#projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group animated-border">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-6">
                <motion.h1 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-heading font-bold gradient-text text-glow"
                >
                  {project.title}
                </motion.h1>
                
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="bg-muted/30 h-80 rounded-lg overflow-hidden shine-effect relative">
                    <div className="relative h-full w-full">
                      {project.images.map((image, index) => (
                        <div 
                          key={index}
                          className={cn(
                            "absolute inset-0 transition-opacity duration-500",
                            currentImageIndex === index ? "opacity-100" : "opacity-0"
                          )}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-blue-500/20 flex items-center justify-center">
                            <p className="text-3xl font-heading text-white/70 animation-float">{project.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={prevImage} 
                        className="h-10 w-10 rounded-full bg-background/30 backdrop-blur-md hover:bg-background/50"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={nextImage}
                        className="h-10 w-10 rounded-full bg-background/30 backdrop-blur-md hover:bg-background/50"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button 
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            currentImageIndex === index 
                              ? "bg-primary w-6" 
                              : "bg-white/60 hover:bg-white/80"
                          )}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex border-b mb-6">
                    <button
                      className={cn(
                        "px-4 py-2 font-medium relative",
                        activeTab === 'overview' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveTab('overview')}
                    >
                      Overview
                      {activeTab === 'overview' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                      )}
                    </button>
                    <button
                      className={cn(
                        "px-4 py-2 font-medium relative",
                        activeTab === 'features' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveTab('features')}
                    >
                      Features
                      {activeTab === 'features' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                      )}
                    </button>
                    <button
                      className={cn(
                        "px-4 py-2 font-medium relative",
                        activeTab === 'tech' ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => setActiveTab('tech')}
                    >
                      Technology
                      {activeTab === 'tech' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                      )}
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tabContent[activeTab]}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="lg:col-span-4 space-y-6"
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-xl gradient-card hover-lift transition-all">
                  <h3 className="font-heading text-xl mb-4 gradient-text text-glow">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-3" />
                      <span>Team: {project.teamSize === 1 ? 'Solo Project' : `${project.teamSize} members`}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary mr-3" />
                      <span>Year: {project.year}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <Code className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <p className="mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
                            <Badge key={tech} variant="secondary" className="animation-pulse">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 animated-gradient-bg hover-lift group relative overflow-hidden" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">Visit Project</span> 
                      <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
                      <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    </a>
                  </Button>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 shadow-inner backdrop-blur-sm">
                  <h3 className="font-heading text-lg mb-3">Related Projects</h3>
                  <div className="space-y-2">
                    {projects
                      .filter(p => p.id !== project.id)
                      .map(p => (
                        <Link 
                          key={p.id} 
                          to={`/project/${p.id}`}
                          className="block p-3 rounded-md hover:bg-background/60 transition-colors animated-border relative group overflow-hidden"
                        >
                          <span className="relative z-10">{p.title}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
