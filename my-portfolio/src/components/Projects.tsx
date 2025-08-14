import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built for scalability with microservices architecture.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Payment gateway integration",
        "Admin analytics dashboard",
        "Mobile-responsive design"
      ],
      github: "https://github.com/subashinivtg/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      status: "Production",
      users: "10K+",
      year: "2023"
    },
    {
      title: "Task Management SaaS",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Supports multiple workspaces and integrations.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Socket.io", "Docker"],
      features: [
        "Real-time collaboration",
        "Advanced reporting",
        "Multiple workspace support",
        "Third-party integrations"
      ],
      github: "https://github.com/subashinivtg/task-manager",
      live: "https://taskflow-app.vercel.app",
      status: "Active Development",
      users: "5K+",
      year: "2023"
    },
    {
      title: "AI Chat Assistant",
      description: "An intelligent chatbot application with natural language processing, context awareness, and learning capabilities. Integrates with multiple AI providers for enhanced responses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL", "WebSockets"],
      features: [
        "Natural language processing",
        "Context-aware responses",
        "Multi-provider AI integration",
        "Real-time messaging"
      ],
      github: "https://github.com/subashinivtg/ai-chat-assistant",
      live: "https://ai-assistant-demo.vercel.app",
      status: "Beta",
      users: "2K+",
      year: "2024"
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate marketplace with property listings, virtual tours, mortgage calculator, and agent management system. Features advanced search and filtering.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Cloudinary", "Vercel"],
      features: [
        "Interactive property maps",
        "Virtual tour integration",
        "Mortgage calculator",
        "Agent portal"
      ],
      github: "https://github.com/subashinivtg/real-estate-platform",
      live: "https://realestate-platform.vercel.app",
      status: "Production",
      users: "8K+",
      year: "2022"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media management with sentiment analysis, engagement tracking, and automated reporting for multiple platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "Django", "Chart.js", "Redis", "Celery"],
      features: [
        "Multi-platform analytics",
        "Sentiment analysis",
        "Automated reporting",
        "Real-time monitoring"
      ],
      github: "https://github.com/subashinivtg/social-analytics",
      live: "https://social-analytics-demo.vercel.app",
      status: "Production",
      users: "15K+",
      year: "2022"
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first fitness application with workout planning, progress tracking, nutrition logging, and social features. Includes wearable device integration.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Health Kit"],
      features: [
        "Workout planning",
        "Progress tracking",
        "Nutrition logging",
        "Wearable integration"
      ],
      github: "https://github.com/subashinivtg/fitness-tracker",
      live: "https://fitness-app-demo.vercel.app",
      status: "Production",
      users: "25K+",
      year: "2021"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Beta": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Active Development": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift glass-effect h-full overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.users}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {project.year}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-glow"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover-glow"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      className="flex-1 hover-lift"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 hover-lift"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="hover-lift"
            onClick={() => window.open('https://github.com/subashinivtg', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;