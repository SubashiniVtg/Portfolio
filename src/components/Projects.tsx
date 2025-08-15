import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "🚀 Online Food Delivery Platform for Hostels 🍽️",
      description: "An online food delivery system tailored for hostel environments, inspired by the e-commerce experience of platforms like Flipkart and Amazon. Built as a 4th-semester Database Management System project, it offers a seamless multi-role interface for customers, restaurant managers, and delivery personnel.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      features: [
    "User-friendly responsive interface",
    "Customer login and ordering system",
    "Restaurant manager panel to add/delete food items",
    "Delivery boy login for in-house and external staff",
    "Mobile-first design for hostel use cases"
  ],
      github: "https://github.com/SubashiniVtg/Online-Food-Delivery-Website",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7241470404056248321/",
      status: "Production",
      // users: "10K+",
      year: "2024"
    },
    {
  title: "🚀 Reimagining Instagram: A Purpose-Driven Redesign 🎯",
  description: "A passion project where I reimagined Instagram—not to clone it, but to elevate the platform with smarter, more human-centered features that merge entertainment with productivity. As both a UI/UX designer and developer, I focused on solving real user pain points with empathy and functionality.",
  image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600&h=400&fit=crop",
  technologies: ["Figma"],
  features: [
    "🎵 Integrated music & movie streaming within the app",
    "⏱️ In-app timer and daily planner for mindful screen time",
    "📰 Real-time news broadcast page for awareness",
    "🌅 Daily inspirational quote feature",
    "🌗 One-click dark/light mode toggle (visible & intuitive)",
    "🔔 Separate notification icons (Likes, DMs, Shares)",
    "✨ Smooth transitions and consistent experience across themes"
  ],
  highlights: [
    "Focused on empathy-driven design for real-world behavior",
    "Balanced aesthetics with usability for modern users",
    "Merged development and design thinking for cohesive execution"
  ],
      github: "https://github.com/SubashiniVtg/Online-Food-Delivery-Website",
      live: "https://www.figma.com/files/team/1328346394090731502/recents-and-sharing/recently-viewed?fuid=1328346391621575973",
      status: "Design",
      // users: "10K+",
      year: "2024"
},

    // {
    //   title: "Task Management SaaS",
    //   description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Supports multiple workspaces and integrations.",
    //   image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    //   technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Socket.io", "Docker"],
    //   features: [
    //     "Real-time collaboration",
    //     "Advanced reporting",
    //     "Multiple workspace support",
    //     "Third-party integrations"
    //   ],
    //   github: "https://github.com/subashinivtg/task-manager",
    //   live: "https://taskflow-app.vercel.app",
    //   status: "Active Development",
    //   users: "5K+",
    //   year: "2023"
    // },
    {
     title: "🚀 Internship Project: Real-Time Deployment of Workplace Harassment Reporting System",
     description: "Originally brought on as a UI/UX intern, I pivoted to full-stack development during my internship to build and deploy a real-time complaint management system titled 'Sexual Harassment at Workplace'. Despite unexpected challenges and tech limitations, our team delivered a secure and scalable web app using Python Flask and MongoDB.",
     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
     technologies: ["HTML", "CSS", "Bootstrap", "Python Flask", "MongoDB"],
  features: [
    "🧾 Complaint filing & real-time case tracking",
    "🔐 CAPTCHA and OTP-based user authentication",
    "📊 Admin dashboard with analytics on complaint status",
    "👮‍♂️ Nodal officer system for complaint handling",
    "🔁 Escalation mechanism for unresolved cases",
    "📱 Clean, responsive UI for users and admins"
  ],
      github: "https://github.com/akilarani21/RMV",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7302712699841392641/",
      status: "Deployed",
      // users: "2K+",
      year: "2025"
    },
    {
      title: "🌟 Zoho Cliqtrix 2025 – Learning Hub Chatbot",
     description: "Built an interactive chatbot as part of Zoho Cliqtrix 2025 that streamlined course enrollment, progress tracking, collaboration, and user engagement. While I wasn’t selected for the internship, the experience greatly sharpened my skills in web development, chatbot design, and API integration.",
     image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&h=400&fit=crop",
     technologies: ["HTML", "CSS", "JavaScript", "Zoho Cliqtrix", "Zoho Meeting API"],
     features: [
    "📚 Course Registration with instant email confirmations",
    "📈 Progress Tracking via external resources (GFG, W3Schools)",
    "🤝 Google Classroom + GitHub integration for project collaboration",
    "⭐ Feedback Collection with rating-based course suggestions",
    "🎮 Gamification with Sudoku and word puzzle mini-games",
    "📅 Schedule Meetings using Zoho Meeting API",
    "💻 Fully responsive design for desktop and mobile"
  ],
      github: "https://github.com/SubashiniVtg/Learn-Hub-Assistance",
      live: "http://linkedin.com/feed/update/urn:li:activity:7317606003435360259/",
      status: "Production",  
      year: "2024"
    },
    {
      title: "Caffeine  Dreams☕",
      description: "My first hands-on React project: a dynamic, component-driven menu card for a coffee website. This beginner-level project helped me understand the core concepts of React such as components, props, and state management while creating an engaging and responsive user interface.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop", // Optional: Replace with your project screenshot or a relevant image
       technologies: ["MERN Stack"],
     features: [
    "📦 Modular React components for menu sections",
    "🔄 State and props for dynamic rendering",
    "☕ Menu Categories: Coffee, Ice Cream, Soft Drinks, Tea, Chocolates",
    "📱 Responsive layout for mobile and desktop",
    "🎨 Clean, beginner-friendly UI"
  ],
      github: "https://github.com/SubashiniVtg/Caffeine-Dreams",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7250171774267486209/",
      status: "Production",
      year: "2024"
    },
    {
      title: "🚀 Empowering Women Through Tech – Infosys iAccelerate Hackathon 2025",
  description: "Participated in the Infosys Springboard iAccelerate Women's Hackathon 2025, where I designed and developed a financial empowerment app specifically tailored to help women build financial literacy, manage expenses, and make informed investment decisions.",
  image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
  technologies: ["React", "JavaScript", "REST APIs", "AI/ML (conceptual)", "Figma (UI design)"],
  features: [
    "📚 Educational content on budgeting, saving, and investing",
    "💰 Expense tracking and financial planning tools",
    "📈 SIP and EMI calculators",
    "📊 Investment portfolio tracking",
    "🤖 AI-powered investment suggestions",
    "📉 Predictive analytics for financial trend forecasting",
    "🎮 Gamified learning for interactive financial education"
  ],
      github: "https://github.com/SubashiniVtg/Finance-Tracker-App",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7324358800046522368/",
      status: "Production",
      // users: "25K+",
      year: "2025"
    },

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
                        {/* {project.users} */}
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