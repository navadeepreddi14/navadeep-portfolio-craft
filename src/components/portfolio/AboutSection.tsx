import { motion } from "framer-motion"
import { AcademicCapIcon } from "@heroicons/react/24/outline"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-portfolio-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-3xl">
              Get to know more about my background and aspirations
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="rounded-xl overflow-hidden border-4 border-portfolio-primary/20 shadow-xl">
                <div className="aspect-square w-full max-w-md bg-muted relative overflow-hidden">
                  {/* Will replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-portfolio-primary/30 to-portfolio-secondary/30">
                    <span className="text-xl text-foreground/70">Profile Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                I'm a B.Tech student passionate about data-driven applications
              </h3>
              
              <p className="text-muted-foreground">
                I'm a B.Tech student passionate about building data-driven applications and meaningful 
                digital experiences. I'm constantly learning and adapting to new technologies, with a 
                focus on solving real-world problems through code.
              </p>
              
              {/* Education Card */}
              <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-portfolio-primary/10 rounded-md mr-3">
                    <AcademicCapIcon className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-foreground">Education</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-foreground">
                      B.Tech in Computer Science and Data Science
                    </h5>
                    <p className="text-muted-foreground">
                      Kakinada Institute of Engineering and Technology (KIET)
                    </p>
                    <p className="text-sm text-muted-foreground">Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                My journey in tech is driven by curiosity and the desire to create impactful solutions.
                I enjoy exploring the intersection of data science and software engineering to build
                intelligent applications that solve real problems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}