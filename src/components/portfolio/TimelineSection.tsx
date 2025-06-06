import { motion } from "framer-motion"

interface TimelineItem {
  year: string;
  technologies: string[];
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2021",
    technologies: ["Python", "SQL"],
    description: "Started my coding journey with Python and databases."
  },
  {
    year: "2022",
    technologies: ["Power BI", "Excel"],
    description: "Focused on data analysis tools and visualization."
  },
  {
    year: "2023",
    technologies: ["Machine Learning", "GitHub"],
    description: "Explored ML concepts and version control."
  },
  {
    year: "2024",
    technologies: ["React", "HTML/CSS"],
    description: "Expanded into web development and front-end technologies."
  },
]

export function TimelineSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tech Timeline
            </h2>
            <div className="w-20 h-1 bg-portfolio-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-3xl">
              Here's my learning journey over time
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-primary/20 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-portfolio-primary border-4 border-background"></div>
                  
                  {/* Content */}
                  <div className={`w-1/2 pr-8 ${index % 2 !== 0 && "text-right ml-auto pl-8 pr-0"}`}>
                    <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
                      <h3 className="text-2xl font-bold text-portfolio-primary mb-2">
                        {item.year}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="bg-portfolio-primary/10 text-portfolio-primary text-sm px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}