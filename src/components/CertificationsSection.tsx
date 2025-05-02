
import { Award } from "lucide-react";

const certifications = [
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2023",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "2023",
    score: "83/100",
  },
];

const activities = [
  "Conducted 'Web Crafters' web development event",
  "Taught C Language to First Year students",
  "Event planner at Knowledge Network Club",
];

export default function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="section-container">
        <h2 className="section-title">Certifications & Activities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-xl font-semibold">Certifications</h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                >
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                    {cert.score && (
                      <p className="text-sm font-medium mt-1 text-primary">
                        Score: {cert.score}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold">Extra-Curricular Activities</h3>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border bg-card flex items-center gap-3"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                    {index + 1}
                  </div>
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
