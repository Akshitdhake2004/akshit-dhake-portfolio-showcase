
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Users, Code, Calendar } from "lucide-react";

const projects = [
  {
    id: "home-automation",
    title: "Home Automation",
    description: "A smart IoT system for controlling fan speed and lights via web or physical interface",
    detailDescription: "This comprehensive IoT home automation system allows users to control various home appliances through a web interface or physical controls. The system utilizes ESP32 as the main controller, communicating with Arduino UNO for peripheral device management. Blynk platform provides the cloud infrastructure for remote access and control.",
    image: "/images/home-automation.jpg",
    tech: ["ESP32", "Arduino UNO", "Blynk", "IoT"],
    teamSize: 4,
    year: "2023",
    link: "#"
  },
  {
    id: "expense-analyzer",
    title: "Expense Analyzer",
    description: "A Java Swing desktop app that lets users track and visualize daily expenses with graph reports",
    detailDescription: "Expense Analyzer is a comprehensive desktop application built with Java Swing that enables users to efficiently track and analyze their daily expenses. The application features an intuitive interface for expense entry, categorization, and visualization through dynamic graphs and reports. Data is persistently stored in an SQL database.",
    image: "/images/expense-analyzer.jpg",
    tech: ["Java", "Swing", "SQL"],
    teamSize: 1,
    year: "2022",
    link: "#"
  },
  {
    id: "dryme",
    title: "Dryme",
    description: "A laundry service management platform with location-based booking, OTP authentication, and order tracking",
    detailDescription: "Dryme is a comprehensive laundry service management platform that streamlines the process of connecting customers with laundry service providers. The application features location-based service discovery, secure OTP authentication for user verification, real-time order tracking, and a robust admin dashboard for service providers to manage orders efficiently.",
    image: "/images/dryme.jpg",
    tech: ["React", "Node.js", "Express.js", "SQL"],
    teamSize: 6,
    year: "2023",
    link: "#"
  },
];

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

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

  return (
    <div className="min-h-screen pt-20">
      <div className="section-container animate-fade-in">
        <Link to="/#projects" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group animated-border">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl font-heading font-bold gradient-text">{project.title}</h1>
            
            <div className="bg-muted/30 h-80 rounded-lg overflow-hidden shine-effect">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-blue-500/20 flex items-center justify-center">
                <p className="text-3xl font-heading text-white/70 animation-float">{project.title}</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">{project.detailDescription}</p>
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md gradient-card">
              <h3 className="font-heading text-xl mb-4 gradient-text">Project Details</h3>
              
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
              
              <Button className="w-full mt-6 animated-gradient-bg hover-lift" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6 shadow-inner">
              <h3 className="font-heading text-lg mb-3">Related Projects</h3>
              <div className="space-y-2">
                {projects
                  .filter(p => p.id !== project.id)
                  .map(p => (
                    <Link 
                      key={p.id} 
                      to={`/project/${p.id}`}
                      className="block p-3 rounded-md hover:bg-background transition-colors animated-border"
                    >
                      {p.title}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
