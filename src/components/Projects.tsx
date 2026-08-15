import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Clock, GraduationCap, Rocket, Briefcase, Palette, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Category = "academic" | "Competitive" | "Industry" |"ieee"|"uiux";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Category>("Industry");

  const projects = [

    // ---------------- Competitive PROJECTS ----------------
    {
      category: "Competitive" as Category,
      title: "Zoho Cliqtrix 2026 – Cliq Socio Productivity Extension",
      description:
        "Designed and developed a productivity-focused Zoho Cliq extension for Cliqtrix 2026. The project featured bot-driven workflows, event organization tools, and a database-backed system for posts, tasks, weekly summaries, and open stories. Although I wasn't selected for further rounds, this project strengthened my expertise in Deluge, Zoho Databases, and extension development.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: [
        "Deluge",
        "Zoho Cliq",
        "Zoho Databases",
        "Zoho Creator",
        "Zoho Task Integrations",
        "Widget Development",
      ],
      features: [
        "Create posts, tasks, open stories, and weekly summaries using simple bot commands (/post, /task, /openstory, /weekly, /help)",
        "Conversational workflow engine for fast work updates",
        "Centralized event and process organization for companies",
        "Data storage and retrieval using Zoho Databases",
        "Timestamp-based ID mapping to handle user-linking limitations",
        "Automatically broadcast updates to all members",
        "In-progress widget dashboard for unified task & post management",
        "Built within 2 days after resolving login and environment setup issues",
      ],
      github: "https://cliq.zoho.com/installapp.do?id=8004",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7403468246026399744/",
      status: "Development",
      year: "2025",
    },
    {
      category: "Competitive" as Category,
      title: "Zoho Cliqtrix 2025 – Learning Hub Chatbot",
      description:
        "Built an interactive chatbot as part of Zoho Cliqtrix 2025 that streamlined course enrollment, progress tracking, collaboration, and user engagement. While I wasn't selected for the internship, the experience greatly sharpened my skills in web development, chatbot design, and API integration.",
      image:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&h=400&fit=crop",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Zoho Cliqtrix",
        "Zoho Meeting API",
      ],
      features: [
        "Course Registration with instant email confirmations",
        "Progress Tracking via external resources (GFG, W3Schools)",
        "Google Classroom + GitHub integration for project collaboration",
        "Feedback Collection with rating-based course suggestions",
        "Gamification with Sudoku and word puzzle mini-games",
        "Schedule Meetings using Zoho Meeting API",
        "Fully responsive design for desktop and mobile",
      ],
      github: "https://github.com/SubashiniVtg/Learn-Hub-Assistance",
      live: "http://linkedin.com/feed/update/urn:li:activity:7317606003435360259/",
      status: "Production",
      year: "2024",
    },
    {
      category: "Competitive" as Category,
      title: "Empowering Women Through Tech – Infosys iAccelerate Hackathon 2025",
      description:
        "Participated in the Infosys Springboard iAccelerate Women's Hackathon 2025, where I designed and developed a financial empowerment app specifically tailored to help women build financial literacy, manage expenses, and make informed investment decisions.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "JavaScript",
        "REST APIs",
        "AI/ML (conceptual)",
        "Figma (UI design)",
      ],
      features: [
        "Educational content on budgeting, saving, and investing",
        "Expense tracking and financial planning tools",
        "SIP and EMI calculators",
        "Investment portfolio tracking",
        "AI-powered investment suggestions",
        "Predictive analytics for financial trend forecasting",
        "Gamified learning for interactive financial education",
      ],
      github: "https://github.com/SubashiniVtg/Finance-Tracker-App",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7324358800046522368/",
      status: "Production",
      year: "2025",
    },
    // ---------------- Industry PROJECTS (Industry products, resume order) ----------------
    {
      category: "Industry" as Category,
      title: "Bharat Financial Inclusion Limited (BFIL) — iBPS BPM",
      description:
        "Working on the Newgen iBPS platform for Bharat Financial Inclusion Limited (BFIL), focusing on Customer Requests (CRs) related to RLOS. Involved in workflow configuration, process modifications, requirement analysis, and implementation of client-specific business requirements.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["iBPS","CCM","Document Management","Arcon","Postman"],
      features: [
        "iBPS workflow configuration",
        "RLOS Customer Request (CR) implementation",
        "Business process modification",
        "Requirement analysis",
        "Workflow troubleshooting",
        "UAT & production support",
        "Issue analysis and resolution",
        "Collaboration with QA and development teams"
      ],
      status: "In Progress",
      year: "2026",
    },
    {
      category: "Industry" as Category,
      title: "Bangalore International Airport Limited (BIAL) — Implementation",
      description:
        "Working on the Newgen implementation project for Bangalore International Airport Limited (BIAL), contributing to the implementation and configuration of enterprise business processes. Involved in BAM reporting, process modifications, business-rule configuration, database activities using PostgreSQL, and troubleshooting product-level issues. Also collaborate with the Genesis team by analyzing defects and raising technical tickets for product-related issues.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["NewgenOne", "Postgress", "Remote Connection"],
      features: [
        "BAM report configuration & modification",
        "Business process modification",
        "Rule Designer configuration",
        "Business-rule implementation",
        "PostgreSQL database activities",
        "Product bug debugging",
        "Root-cause analysis",
        "Technical ticket creation & tracking",
        "UAT & production support"
      ],
      status: "In Progress",
      year: "2026",
    },
    {
      category: "Industry" as Category,
      title: "Industrial Development Bank Of India (IDBI)— Oracle SQL",
      description:
        "Working on Oracle database and SQL-related activities for IDBI Bank, supporting application requirements through SQL development, stored procedures, database scripting, and troubleshooting of data-related issues.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      technologies: ["Oracle Sql", "iBPS", "Procedure Implementation"],
      features: [
        "Stored procedure development",
        "Database scripting",
        "Data retrieval & validation",
        "Database troubleshooting",
        "Data-related issue analysis",
        "Development & QA coordination"
      ],
      status: "Completed",
      year: "2026",
    },
    {
      category: "Industry" as Category,
      title: "Canara Bank — OmniOMS",
      description:
        "Working with Newgen OmniOMS for Canara Bank, focusing on customer communication management and configuration of communication workflows based on business requirements.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      technologies: ["CCM (Configuration Designer)", "Document Design"],
      features: [
        "OmniOMS configuration",
        "Customer communication workflows",
        "Communication process configuration",
        "Document generation workflows",
        "Client-specific configuration"
      ],
      status: "Completed",
      year: "2026",
    },
    {
      category: "Industry" as Category,
      title: "Real-Time Deployment of Workplace Harassment Reporting System",
      description:
        "Designed and developed 'Raise-My-Voice' (RMV), a Sexual Harassment at Workplace (POSH) platform enabling Industry women to securely file complaints and track case status. Implemented role-based access for multiple committees to register, log in, monitor complaints, manage cases, and take appropriate action based on reported issues. Delivered a secure and scalable web app using Python Flask and MongoDB.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "Bootstrap", "Python Flask", "MongoDB"],
      features: [
        "Complaint filing & real-time case tracking",
        "Role-based access for multiple committees, victims, and admins",
        "CAPTCHA and OTP-based user authentication",
        "Admin dashboard with analytics on complaint status",
        "Nodal officer system for complaint handling",
        "Escalation mechanism for unresolved cases",
        "Clean, responsive UI for users and admins",
      ],
      github: "https://github.com/akilarani21/RMV",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7302712699841392641/",
      status: "Deployed",
      year: "2025",
    }, 

    // ---------------- ACADEMIC PROJECTS ----------------
    
    {
      category: "academic" as Category,
      title: "Online Food Delivery Platform for Hostels",
      description:
        "An online food delivery system tailored for hostel environments, inspired by the e-commerce experience of platforms like Flipkart and Amazon. Built as a 4th-semester Database Management System project, it offers a seamless multi-role interface for customers, restaurant managers, and delivery personnel.",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      features: [
        "User-friendly responsive interface",
        "Customer login and ordering system",
        "Restaurant manager panel to add/delete food items",
        "Delivery boy login for in-house and external staff",
        "Mobile-first design for hostel use cases",
      ],
      github: "https://github.com/SubashiniVtg/Online-Food-Delivery-Website",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7241470404056248321/",
      status: "Production",
      year: "2024",
    },
    {
      category: "academic" as Category,
      title: "Caffeine Dreams",
      description:
        "My first hands-on React project: a dynamic, component-driven menu card for a coffee website. This beginner-level project helped me understand the core concepts of React such as components, props, and state management while creating an engaging and responsive user interface.",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
      technologies: ["MERN Stack"],
      features: [
        "Modular React components for menu sections",
        "State and props for dynamic rendering",
        "Menu Categories: Coffee, Ice Cream, Soft Drinks, Tea, Chocolates",
        "Responsive layout for mobile and desktop",
        "Clean, beginner-friendly UI",
      ],
      github: "https://github.com/SubashiniVtg/Caffeine-Dreams",
      live: "https://www.linkedin.com/feed/update/urn:li:activity:7250171774267486209/",
      status: "Production",
      year: "2025",
    },
    {
  category: "academic" as Category,
  title: "Smart Placement Portal",
  description:
    "An award-winning full-stack placement portal developed during a 1-day college hackathon. Built as a team using the MERN stack, the platform was designed to help students prepare for placements, access learning resources, share experiences, and get assistance through an integrated chatbot. The prototype was completed in approximately 7 hours and secured 1st Prize in the competition.",
  image:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  features: [
    "AI-powered chatbot for student assistance",
    "Placement preparation materials and resources",
    "Resource sharing by successfully placed students",
    "Student-focused placement support platform",
    "Full-stack MERN architecture",
    "Responsive and user-friendly interface",
    "Rapid development within a 7-hour hackathon",
    "1st Prize winning project",
  ],
  github: "https://github.com/SubashiniVtg/Placement",
  live: "https://www.linkedin.com/posts/subashinivtg_hackathon2025-mernstack-fullstackdevelopment-ugcPost-7320468749239619584-2QMM/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9290B8BeobhXJdZUH10SMAnqAaNzEy30",
  status: "Completed",
  year: "2025",
},
    // IEEE  PROJECTS 

    {
      category: "ieee" as Category,
      title: "ARGUS: An AI-Based Real-Time Deepfake Detection System",
      description:
        "Developed ARGUS, a real-time multimodal deepfake detection system combining 3D-CNN, LSTM, and Transformer-based models to identify manipulated video and audio content with high accuracy.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Deep Learning", "3D-CNN", "LSTM", "Transformers"],
      features: [
        "Real-time multimodal deepfake detection",
        "Combines 3D-CNN, LSTM, and Transformer architectures",
        "Achieved ~94% detection accuracy",
        "Analyzes both visual and temporal inconsistencies",
      ],
      status: "Published",
      year: "2026",
    },
    {
      category: "ieee" as Category,
      title: "Agri Voice – A Voice-Based Direct Marketing Platform for Empowering Farmers Through IVR and Voice-To-Text Technology",
      description:
        "Published research on an IVR-based solution enabling internet-free voice access for rural farmers to directly market their produce, removing middlemen and improving profitability through a simple voice interface.",
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&h=400&fit=crop",
      technologies: ["Twilio", "Google Speech API", "Firebase"],
      features: [
        "Internet-free voice access via IVR for rural farmers",
        "Achieved 95% recognition accuracy",
        "75% farmer adoption rate in pilot testing",
        "Enabled 30% profit growth for participating farmers",
        "Direct-to-buyer marketing without middlemen",
      ],
      status: "Published",
      year: "2025",
    },
    // UI/UX PROJECTS 

      {
      category: "uiux" as Category,
      title: "Reimagining Instagram: A Purpose-Driven Redesign",
      description:
        "A passion project where I reimagined Instagram—not to clone it, but to elevate the platform with smarter, more human-centered features that merge entertainment with productivity. As both a UI/UX designer and developer, I focused on solving real user pain points with empathy and functionality.",
      image:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=600&h=400&fit=crop",
      technologies: ["Figma"],
      features: [
        "Integrated music & movie streaming within the app",
        "In-app timer and daily planner for mindful screen time",
        "Real-time news broadcast page for awareness",
        "Daily inspirational quote feature",
        "One-click dark/light mode toggle (visible & intuitive)",
        "Separate notification icons (Likes, DMs, Shares)",
        "Smooth transitions and consistent experience across themes",
      ],
      github:
        "https://www.figma.com/files/team/1328346394090731502/recents-and-sharing/recently-viewed?fuid=1328346391621575973",
      live: "https://www.linkedin.com/posts/subashinivtg_uidesigner-uxdesigner-uiux-activity-7318937804120510464-nHVo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9290B8BeobhXJdZUH10SMAnqAaNzEy30",
      status: "Design",
      year: "2024",
    },

    {
  category: "uiux" as Category,
  title: "Music Streaming App",
  description:
    "A modern music streaming app concept designed entirely in Figma, focused on creating a seamless, intuitive, and engaging listening experience. From wireframes to the final interface, the project emphasizes user-centered design, effortless navigation, personalized content, and a visually engaging music experience.",
  image:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
  technologies: ["Figma"],
  features: [
    "Personalized playlists based on user preferences and mood",
    "Clean and intuitive interface for effortless navigation",
    "High-quality audio streaming experience",
    "Fast and responsive user interactions",
    "User-friendly music discovery and browsing",
    "Wireframes and high-fidelity UI design",
    "Consistent visual design and interaction patterns",
  ],
  github:
    "https://www.figma.com/proto/7cbRftoDjYTUaGj3rvFDcu/Music-streaming-app?node-id=4-14&starting-point-node-id=4%3A2",
  live:
    "https://www.linkedin.com/posts/subashinivtg_productlaunch-musicstreaming-uxdesign-ugcPost-7218899364004446209-Fvu3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEe9290B8BeobhXJdZUH10SMAnqAaNzEy30",
  status: "Design",
  year: "2024",
},

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Published":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Deployed":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Beta":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Active Development":
      case "Development":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Design":
        return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20";
      case "In Progress":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  const tabs: { key: Category; label: string; icon: typeof Rocket }[] = [
    { key: "Competitive", label: "Competitive Projects", icon: Rocket },
    { key: "Industry", label: "Industry Projects", icon: Briefcase },   
    { key: "academic", label: "Academic Projects", icon: GraduationCap },
    { key: "uiux", label: "UI/UX Projects", icon: Palette },
    { key: "ieee", label: "Research & IEEE Projects", icon: BookOpen }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of real-world deployments, hackathon builds, published research, and academic work
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full glass-effect gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                  <span
                    className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-primary-foreground/20"
                        : "bg-muted"
                    }`}
                  >
                    {projects.filter((p) => p.category === tab.key).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
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
                          <Clock className="h-4 w-4" />
                          {project.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex gap-2 flex-shrink-0">
                        {project.github && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover-glow"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="hover-glow"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
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
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
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

                    {(project.live || project.github) && (
                      <div className="flex gap-3 pt-4">
                        {project.live && (
                          <Button
                            className="flex-1 hover-lift"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            variant="outline"
                            className="flex-1 hover-lift"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Button>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
            onClick={() =>
              window.open("https://github.com/subashinivtg", "_blank")
            }
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
