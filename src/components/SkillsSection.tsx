
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { 
  Code, 
  Database, 
  Globe, 
  Cloud, 
  Monitor, 
  Cpu 
} from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    items: [
      { name: "Java", level: 85 },
      { name: "SQL", level: 75 }
    ],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "React", level: 70 },
      { name: "Vue.js", level: 65 },
      { name: "Vuex", level: 60 }
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      { name: "AWS (S3, EC2, IAM)", level: 70 },
      { name: "CPanel", level: 65 }
    ],
  },
  {
    category: "Desktop GUI",
    icon: <Monitor className="h-6 w-6" />,
    items: [
      { name: "Java Swing", level: 80 }
    ],
  },
  {
    category: "IoT",
    icon: <Cpu className="h-6 w-6" />,
    items: [
      { name: "ESP32", level: 75 },
      { name: "Arduino UNO", level: 80 },
      { name: "Blynk", level: 65 }
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: [
      { name: "SQL", level: 85 },
      { name: "NoSQL", level: 70 }
    ],
  },
];

export default function SkillsSection() {
  const [skillsProgress, setSkillsProgress] = useState<Record<string, number>>({});
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const allSkills: Record<string, number> = {};
      
      // Initialize all skills to 0
      skills.forEach(category => {
        category.items.forEach(skill => {
          allSkills[skill.name] = 0;
        });
      });
      
      setSkillsProgress(allSkills);
      
      // Animate skills progressively
      const timeout = setTimeout(() => {
        skills.forEach(category => {
          category.items.forEach((skill, index) => {
            setTimeout(() => {
              setSkillsProgress(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
        });
      }, 400);
      
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-secondary/30 to-transparent pointer-events-none"></div>
      
      <div className="section-container" ref={ref}>
        <h2 className="section-title">
          <span className="gradient-text text-glow">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="bg-card/80 backdrop-blur-sm rounded-lg p-6 shadow-xl transition-all hover:shadow-2xl gradient-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary gradient-primary animate-pulse-slow">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <div className="space-y-4 mt-6">
                {skill.items.map((item, itemIndex) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{skillsProgress[item.name]}%</p>
                    </div>
                    <Progress 
                      value={skillsProgress[item.name]} 
                      className="h-2 bg-secondary/50"
                      style={{ 
                        transition: 'all 1s cubic-bezier(0.65, 0, 0.35, 1)',
                      }}
                      indicatorClassName="bg-gradient-to-r from-primary/80 to-blue-500/80"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
