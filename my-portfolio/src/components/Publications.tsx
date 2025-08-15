import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; // Adjust if needed

const publications = [
  {
    title: "Agri voice-A voice based Direct Marketing Platform for Empowering Farmer through IVR and Voice-To-Text Technology",
    conference: "IEEE - 5th International Conference on Pervasive Computing and Social Network (ICPCSN)",
    year: "2025",
    icon: "📘",
    link: "https://ieeexplore.ieee.org/document/11035483", 
  },
  {
    title: "Therapeutic Finding of Drugs in form of Genetics and Biotechnology",
    conference: "IEEE – Intelligent Computing Technologies and Business Systems (ICTBS)",
    year: "2024",
    icon: "📙",
    // link: "https://ieeexplore.ieee.org/document/your-paper-id", // replace with your actual IEEE link
  },
//   {
//     title: "Blockchain for Secure Complaint Handling",
//     conference: "Elsevier – IJCSIT",
//     year: "2024",
//     icon: "📗",
//     link: "https://www.sciencedirect.com/science/article/your-paper-id", // replace with actual Elsevier link
//   }
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 section-bg">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
             Research Papers & Publications
          </h3>
          {/* to add more lg:grid-cols-2  increase the size 2-> 3 like this*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {publications.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift glass-effect text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{paper.icon}</div>
                    <div>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        <h4 className="font-semibold text-sm leading-tight mb-2">
                          {paper.title}
                        </h4>
                      </a>
                      <p className="text-xs text-muted-foreground">
                        {paper.conference}
                      </p>
                      <p className="text-xs text-primary font-medium">
                        {paper.year}
                      </p>
                    </div>
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

export default Publications;
