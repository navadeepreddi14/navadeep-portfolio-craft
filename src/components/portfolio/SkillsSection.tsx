import { motion } from "framer-motion"

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", percentage: 90, color: "bg-blue-500" },
  { name: "SQL (MySQL/MS SQL Server)", percentage: 85, color: "bg-orange-500" },
  { name: "Power BI", percentage: 80, color: "bg-yellow-500" },
  { name: "Excel", percentage: 75, color: "bg-green-500" },
  { name: "HTML/CSS", percentage: 80, color: "bg-red-500" },
  { name: "Java", percentage: 70, color: "bg-purple-500" },
  { name: "Git & GitHub", percentage: 80, color: "bg-gray-700" },
  { name: "Machine Learning", percentage: 75, color: "bg-portfolio-primary" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Section Title */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Skills
            </h2>
            <div className="w-20 h-1 bg-portfolio-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-3xl">
              My technical skillset includes the following tools and languages:
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="ml-auto text-sm font-medium text-muted-foreground">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Tech Timeline Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="italic text-muted-foreground">
              See my complete learning journey on the timeline below
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}