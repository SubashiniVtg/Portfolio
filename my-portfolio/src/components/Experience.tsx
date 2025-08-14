import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Corp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented React/Node.js solutions that improved performance by 40%",
        "Mentored team of 5 junior developers and established code review processes",
        "Collaborated with product teams to deliver features ahead of schedule"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Built responsive web applications using React and Express.js",
        "Designed and implemented RESTful APIs with comprehensive testing",
        "Optimized database queries resulting in 60% performance improvement",
        "Participated in agile development with cross-functional teams"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Jest", "Git", "Jenkins"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub Technologies",
      location: "Seattle, WA",
      period: "2019 - 2020",
      type: "Full-time",
      description: [
        "Developed user-friendly interfaces for B2B SaaS applications",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Integrated third-party APIs and payment processing systems",
        "Maintained high code quality with 95%+ test coverage"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Vue.js", "Sass", "Webpack"]
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Studio",
      location: "Portland, OR",
      period: "2018 - 2019",
      type: "Full-time",
      description: [
        "Created responsive websites for small to medium businesses",
        "Learned modern development practices and industry standards",
        "Participated in client meetings and requirement gathering",
        "Contributed to open-source projects and team knowledge sharing"
      ],
      technologies: ["JavaScript", "React", "CSS3", "WordPress", "PHP", "MySQL"]
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