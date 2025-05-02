
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Home Automation",
    description: "A smart IoT system for controlling fan speed and lights via web or physical interface",
    image: "/images/home-automation.jpg",
    tech: ["ESP32", "Arduino UNO", "Blynk", "IoT"],
    teamSize: 4,
  },
  {
    title: "Expense Analyzer",
    description: "A Java Swing desktop app that lets users track and visualize daily expenses with graph reports",
    image: "/images/expense-analyzer.jpg",
    tech: ["Java", "Swing", "SQL"],
    teamSize: 1,
  },
  {
    title: "Dryme",
    description: "A laundry service management platform with location-based booking, OTP authentication, and order tracking",
    image: "/images/dryme.jpg",
    tech: ["React", "Node.js", "Express.js", "SQL"],
    teamSize: 6,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card rounded-lg overflow-hidden shadow-md card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-48 bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <p className="font-heading font-bold text-2xl text-foreground/70">{project.title}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Team: {project.teamSize === 1 ? 'Solo Project' : `${project.teamSize} members`}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="text-primary">
                    <span>Details</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
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
