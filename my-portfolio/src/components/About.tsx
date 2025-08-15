import { motion } from "framer-motion";
import { Code, Heart, Lightbulb, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code that scales."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering high-quality products that exceed expectations."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Building experiences that users love and that solve real-world problems."
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UI/UX Designer | MERN Stack Developer | Fullstack Development | Building Real-World Projects | Passionate About Crafting Smart, User-Centric Experiences | Open to Full-Time Roles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My passion for technology began during my Computer Science engineering journey, 
                where I discovered how code can transform ideas into real-world solutions. 
                Over the years, I have evolved from a curious learner into a versatile full-stack developer,
                 gaining hands-on experience in React, Node.js, MongoDB, SQL, and cloud platforms.

                </p>
              <p className="text-muted-foreground leading-relaxed">
               I specialize in building responsive, user-friendly interfaces and designing secure, 
               scalable backend architectures. My project experience ranges from financial empowerment 
               applications with AI-driven analytics, to role-based management systems, 
               and high-impact internship solutions deployed for real-world use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I thrive in collaborative, problem-solving environments, 
                and enjoy taking ownership of challenging projects—from planning and 
                design to deployment and optimization. Beyond development, I actively explore 
                emerging tech trends, contribute to open-source initiatives, and share my learnings through 
                technical writing and peer mentoring.
               For me, technology is not just a profession—it’s a way to create meaningful, 
               impactful solutions that make a difference.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Years Hands-on-Experience</div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Real-world Projects</div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Paper Publication</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">What Drives Me</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift glass-effect h-full">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;