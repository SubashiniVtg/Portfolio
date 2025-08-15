import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Settings,
  Server,
  Monitor
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Monitor,
      skills: [
        "Java", "C",  "Python","HTML5","CSS3","PHP"
      ],
      color: "text-blue-500"
    },
    {
      title: "Frameworks",
      icon: Server,
      skills: [
        "Bootstrap5", "MERN Stack"
      ],
      color: "text-green-500"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        "Oracle Sql", "MongoDB", "MySQL", "GraphQL"
      ],
      color: "text-purple-500"
    },
    {
      title: "Developer Tools",
      icon: Cloud,
      skills: [
        "Visual Studio","Netbeans Apache","Colab","Posit","Jupyter Notebook","Anaconda","Turbo C"
      ],
      color: "text-orange-500"
    },
    // {
    //   title: "Mobile Development",
    //   icon: Smartphone,
    //   skills: [
    //     "React Native", "Flutter", "iOS", "Android",
    //     "Mobile UI/UX", "App Store Optimization"
    //   ],
    //   color: "text-pink-500"
    // },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: [
        "Figma", "Canva", "UI/UX Design", "Prototyping",
        "User Research", "Design Systems", "Accessibility"
      ],
      color: "text-indigo-500"
    }
  ];

  const certifications = [
    {
      name: "Foundation of User Experience(UX) Design",
      issuer: "Google - Coursera",
      year: "2024",
      icon: "🏆"
    },
    {
      name: "The Complete Oracle Bootcamp",
      issuer: "Udemy",
      year: "2024",
      icon: "🎖️"
    },
    {
      name: "TCS iON Career Edge - Young Professional",
      issuer: "Tata Consultancy Services",
      year: "2024",
      icon: "🏅"
    },
    {
      name: "Privacy and Security in Social Media",
      issuer: "NPTEL",
      year: "2025",
      icon: "📜"
    }
  ];

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift glass-effect h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                      <category.icon className="h-5 w-5" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift glass-effect text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm leading-tight mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {cert.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="glass-effect overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Beyond Technical Skills
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl">🎯</div>
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-muted-foreground">
                    Analytical thinking and creative solutions
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">👥</div>
                  <h4 className="font-semibold">Team Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Mentoring and cross-functional collaboration
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl">🚀</div>
                  <h4 className="font-semibold">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Staying ahead of technology trends
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;