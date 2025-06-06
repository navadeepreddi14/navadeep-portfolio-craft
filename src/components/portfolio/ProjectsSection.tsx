import { motion } from "framer-motion"
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
import { Button } from "../ui/button"

const projects = [
  {
    title: "Loan Approval Prediction",
    description: "ML-based web app for loan eligibility prediction using Python, Pandas, and Streamlit.",
    tech: ["Python", "Pandas", "Streamlit", "Machine Learning"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  },
  {
    title: "E-commerce Database System",
    description: "Normalized database schema for online retail with ERD and advanced SQL queries.",
    tech: ["MySQL", "Database Design", "SQL"],
    github: "#",
    demo: null,
    image: "/api/placeholder/400/250"
  },
  {
    title: "Power BI Sales Dashboard",
    description: "Interactive KPI dashboard for monthly sales analysis and visualization.",
    tech: ["Power BI", "Excel", "Data Analysis"],
    github: "#",
    demo: "#",
    image: "/api/placeholder/400/250"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-portfolio-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Projects I've worked on to solve real-world problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-portfolio-primary/10 text-portfolio-primary text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <CodeBracketIcon className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}