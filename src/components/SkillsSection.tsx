
import { Badge } from "@/components/ui/badge";
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
    items: ["Java", "SQL"],
  },
  {
    category: "Web Technologies",
    icon: <Globe className="h-6 w-6" />,
    items: ["Node.js", "Express.js", "React", "Vue.js", "Vuex"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: ["AWS (S3, EC2, IAM)", "CPanel"],
  },
  {
    category: "Desktop GUI",
    icon: <Monitor className="h-6 w-6" />,
    items: ["Java Swing"],
  },
  {
    category: "IoT",
    icon: <Cpu className="h-6 w-6" />,
    items: ["ESP32", "Arduino UNO", "Blynk"],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["SQL", "NoSQL"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="bg-card rounded-lg p-6 shadow-md transition-all hover:shadow-lg card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-sm py-1.5">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
