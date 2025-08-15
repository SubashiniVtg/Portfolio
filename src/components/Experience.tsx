import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Newrta Solution Pvt.Lmt (Chella Softwares) ",
      location: "Madurai, TamilNadu",
      period: "Oct 2024- May 2025",
      type: "Full-time",
      description: [
        "Developed and deployed the Raise-My-Voice platform using Python Flask + MongoDB to enable working women to file workplace harassment complaints securely.",
        "Implemented multi-role access for victims, committees, and admins, allowing multiple committees to log in, register, and manage cases.",
        "Integrated complaint tracking with status updates, escalation options, and evidence submission for transparent resolution workflows.",
        "Designed an admin dashboard to monitor total, pending, and resolved complaints, enabling timely action and analytics-based decision-making."
      ],
      technologies: ["Python", "HTML", "CSS", "Bootstrap", "Javascript", "MongoDB"]
    },
    {
      title: "Pragati - Path to Future Cohort-2",
      company: "Infosys Springboard",
      location: "Virtual",
      period: "July 2024 - Nov 2024",
      type: "Online",
      description: [
        "Successfully completed the Pragati Path to Future Cohort-2 Internship Program by Infosys Springboard, a six-month online learning initiative.",
        "Gained knowledge of IT technologies, fundamentals of AI, and basic programming skills in Java and Python.",
        "Developed competencies in Software Engineering principles and Agile Development methodologies.",
        "Appreciated the program’s focus on women’s empowerment in technology, enhancing both technical and professional skills."
      ],
      technologies: ["Artificial Intelligence"]
    },
    {
      title: "Web Developer",
      company: "Exposys Data labs",
      location: "Bangalore(virtual)",
      period: " Dec 2023 - Jan 2024",
      type: "Internship",
      description: [
        "Developed a multi-page responsive website ensuring seamless compatibility across desktops, tablets, and smartphones.",
        "Designed and implemented an intuitive navigation system for enhanced user accessibility and smooth browsing.",
        "Applied performance optimization techniques to achieve fast loading speeds and responsive interactions.",
        "Strengthened skills in web development and design, gaining hands-on experience in creating user-centric digital solutions."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3","Bootstrap"]
    },
    {
      title: "UI/UX Designer",
      company: "Extion Info tech",
      location: "Coimbatore, India",
      period: "Dec 2023- Jan 2024",
      type: "Internship",
      description: [
        "Recreated a plant shop website in Figma, focusing on enhancing user experience and visual appeal.",
        "Designed simplified navigation to make plant browsing and purchasing more intuitive and enjoyable.",
        "Applied visual hierarchy principles to highlight product images and essential details effectively.",
        "Created a responsive layout optimized for both desktop and mobile, strengthening UI/UX design skills."
      ],
      technologies: ["UI/UX designing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, learning, and delivering impactful solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md hidden md:block" />

                <Card className="ml-0 md:ml-20 hover-lift glass-effect">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="skill-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;