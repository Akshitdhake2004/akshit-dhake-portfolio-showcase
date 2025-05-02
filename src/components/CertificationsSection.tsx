
import { Award, Check, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2023",
    description: "Learned network fundamentals, how devices communicate on networks, and basic network configuration concepts."
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "2023",
    score: "83/100",
    description: "Comprehensive understanding of cloud computing concepts, architectures, and applications."
  },
];

const activities = [
  {
    title: "Web Crafters",
    role: "Event Organizer",
    date: "2023",
    description: "Conducted 'Web Crafters' web development event for aspiring developers."
  },
  {
    title: "C Language Teaching",
    role: "Student Mentor",
    date: "2022",
    description: "Taught C Language fundamentals to First Year students."
  },
  {
    title: "Knowledge Network Club",
    role: "Event Planner",
    date: "2022-2023",
    description: "Organized multiple technical and soft skills workshops for students."
  },
];

export default function CertificationsSection() {
  const [activeTimelineItem, setActiveTimelineItem] = useState<string | null>(null);
  
  return (
    <section id="certifications" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none"></div>
      
      <div className="section-container">
        <h2 className="section-title">
          <span className="gradient-text text-glow">Certifications & Activities</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8 animate-slide-in relative">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Star className="h-5 w-5 text-primary animate-spin-slow" />
              Certifications
            </h3>
            
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-blue-500/40 to-transparent"></div>
              
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border bg-card/80 backdrop-blur-sm transform transition-all duration-300",
                    activeTimelineItem === `cert-${index}` ? "translate-x-4 shadow-lg" : ""
                  )}
                  onMouseEnter={() => setActiveTimelineItem(`cert-${index}`)}
                  onMouseLeave={() => setActiveTimelineItem(null)}
                >
                  <div className="p-2 bg-primary/10 rounded-full text-primary relative z-10">
                    <Award className={cn(
                      "h-6 w-6 transition-all duration-300",
                      activeTimelineItem === `cert-${index}` ? "animate-pulse-fast" : ""
                    )} />
                    <span className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-primary"></span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.score && (
                      <p className="text-sm font-medium mt-1 text-primary">
                        Score: {cert.score}
                      </p>
                    )}
                    {activeTimelineItem === `cert-${index}` && (
                      <p className="text-sm mt-2 animate-fade-in">{cert.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in relative" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Star className="h-5 w-5 text-primary animate-spin-slow" />
              Extra-Curricular Activities
            </h3>
            
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-blue-500/40 to-transparent"></div>
              
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-lg border bg-card/80 backdrop-blur-sm transform transition-all duration-300",
                    activeTimelineItem === `act-${index}` ? "translate-x-4 shadow-lg" : ""
                  )}
                  onMouseEnter={() => setActiveTimelineItem(`act-${index}`)}
                  onMouseLeave={() => setActiveTimelineItem(null)}
                >
                  <div className="p-2 bg-primary/10 rounded-full text-primary relative">
                    <Check className={cn(
                      "h-6 w-6 transition-all duration-300",
                      activeTimelineItem === `act-${index}` ? "animate-pulse-fast" : ""
                    )} />
                    <span className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-primary"></span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">{activity.title}</h4>
                    <p className="text-sm text-primary font-medium">{activity.role}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                    {activeTimelineItem === `act-${index}` && (
                      <p className="text-sm mt-2 animate-fade-in">{activity.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
