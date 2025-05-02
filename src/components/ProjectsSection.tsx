
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Code, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "home-automation",
    title: "Home Automation",
    description: "A smart IoT system for controlling fan speed and lights via web or physical interface",
    image: "/images/home-automation.jpg",
    tech: ["ESP32", "Arduino UNO", "Blynk", "IoT"],
    teamSize: 4,
  },
  {
    id: "expense-analyzer",
    title: "Expense Analyzer",
    description: "A Java Swing desktop app that lets users track and visualize daily expenses with graph reports",
    image: "/images/expense-analyzer.jpg",
    tech: ["Java", "Swing", "SQL"],
    teamSize: 1,
  },
  {
    id: "dryme",
    title: "Dryme",
    description: "A laundry service management platform with location-based booking, OTP authentication, and order tracking",
    image: "/images/dryme.jpg",
    tech: ["React", "Node.js", "Express.js", "SQL"],
    teamSize: 6,
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };
  
  return (
    <section id="projects" className="bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "bg-card rounded-lg overflow-hidden shadow-md hover-lift shine-effect animate-fade-in cursor-pointer transform transition-all duration-500",
                hoveredProject === project.id ? "scale-[1.02]" : ""
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="h-48 bg-muted overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-blue-500/30 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <p className={cn(
                    "font-heading font-bold text-2xl text-white animation-float",
                    hoveredProject === project.id ? "text-white/90" : "text-white/70"
                  )}>
                    {project.title}
                  </p>
                </div>
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center opacity-0 bg-primary/20 backdrop-blur-sm transition-all duration-500",
                  hoveredProject === project.id ? "opacity-100" : ""
                )}>
                  <Button variant="secondary" className="group">
                    View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text group-hover:scale-105 transition-transform">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={cn(
                        "text-xs animation-pulse relative overflow-hidden",
                        hoveredProject === project.id ? "bg-primary/10" : ""
                      )}
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                      {hoveredProject === project.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-pulse"></span>
                      )}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Team: {project.teamSize === 1 ? 'Solo Project' : `${project.teamSize} members`}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                      "text-primary animated-border group",
                      hoveredProject === project.id ? "bg-secondary/80" : ""
                    )}
                  >
                    <span>Details</span>
                    <ExternalLink className="ml-1 h-4 w-4 animation-float-horizontal" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
