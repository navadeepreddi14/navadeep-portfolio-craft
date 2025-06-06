import { motion } from "framer-motion"
import { ArrowDownIcon, DocumentArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline"
import { Button } from "../ui/button"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-background to-portfolio-secondary/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Hi, I'm Navadeep Reddi 👋
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
          >
            Future{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              Software Engineer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Data Science Enthusiast | Building meaningful digital experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white px-8 py-3 text-lg"
              onClick={() => {
                // TODO: Add resume download functionality
                console.log("Download resume")
              }}
            >
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              <EyeIcon className="h-5 w-5 mr-2" />
              View Projects
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => scrollToSection("about")}
              className="p-2 rounded-full hover:bg-portfolio-primary/10 transition-colors"
            >
              <ArrowDownIcon className="h-6 w-6 text-muted-foreground" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}