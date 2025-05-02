
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6 animate-slide-in">
            <p className="text-lg leading-relaxed">
              I'm a third-year Computer Engineering student at MIT Academy of Engineering, Pune, 
              passionate about backend development, full-stack applications, and cloud systems.
            </p>
            
            <p className="text-lg leading-relaxed">
              I specialize in building real-world solutions using modern tools like Node.js, React, and AWS. 
              My academic background has provided me with a strong foundation in computer science principles, 
              while my project work has given me practical experience in developing robust applications.
            </p>
            
            <p className="text-lg leading-relaxed">
              I enjoy bringing structure and innovation to every project I work on, 
              whether it's creating efficient backend systems or developing intuitive user interfaces. 
              I'm constantly learning and exploring new technologies to expand my skillset.
            </p>
          </div>
          
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-lg p-6 shadow-md space-y-4">
              <h3 className="text-xl font-semibold">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p>08 Sep, 2004</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+91-9307360924</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>akshit.dhake@mitaoe.ac.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-4">
                <p className="font-medium">MIT Academy of Engineering, Pune</p>
                <p className="text-muted-foreground">B.Tech in Computer Engineering</p>
                <p className="text-sm text-muted-foreground mt-1">2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
