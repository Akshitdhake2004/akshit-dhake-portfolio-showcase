
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
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, projectId: string) => {
    if (hoveredProject === projectId) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      // Divide by smaller values for more dramatic effect
      const rotateX = -((y - rect.height / 2) / 15);
      const rotateY = (x - rect.width / 2) / 15;
      
      setCardRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
  };
  
  return (
    <section id="projects" className="bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="absolute w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">
          <span className="gradient-text text-glow">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "bg-card/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover-lift shine-effect animate-fade-in perspective-card",
                hoveredProject === project.id ? "z-20" : "z-10"
              )}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: hoveredProject === project.id ? 
                  `perspective(1000px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)` : 
                  'perspective(1000px) rotateX(0) rotateY(0)',
                transition: 'transform 0.2s ease-out'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => {
                setHoveredProject(null);
                handleMouseLeave();
              }}
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
                  <Button variant="secondary" className="group animate-bounce-small">
                    View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2 gradient-text text-glow group-hover:scale-105 transition-transform">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className={cn(
                        "text-xs animation-pulse animate-pulse-tech relative overflow-hidden",
                        hoveredProject === project.id ? "bg-primary/10" : ""
                      )}
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      <span className={`mr-1 ${hoveredProject === project.id ? 'text-primary' : ''}`}>•</span>
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
                      "text-primary animated-border group relative overflow-hidden",
                      hoveredProject === project.id ? "bg-secondary/80" : ""
                    )}
                  >
                    <span className="relative z-10">Details</span>
                    <ExternalLink className="ml-1 h-4 w-4 animation-float-horizontal relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transform transition-transform duration-300 ${hoveredProject === project.id ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
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
