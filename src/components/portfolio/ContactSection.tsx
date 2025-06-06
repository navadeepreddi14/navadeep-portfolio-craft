import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(20, { message: "Message must be at least 20 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } 
  }
};

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // For a real implementation, uncomment and configure one of these:
      
      // Option 1: Email.js
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     name: data.name,
      //     email: data.email,
      //     message: data.message,
      //   },
      //   "YOUR_USER_ID"
      // );
      
      // Option 2: FormSpree
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) throw new Error("Form submission failed");
      
      // Demo mode - just wait 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll respond as soon as possible.",
      });
      
      form.reset();
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariant}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-primary mb-6"></div>
          <p className="text-muted-foreground text-center max-w-xl">
            Let's build something amazing together! I'm currently available for freelance projects and internships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariant}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-portfolio-primary/10 text-portfolio-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:navadeepreddisrav@gmail.com" 
                      className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                    >
                      navadeepreddisrav@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-portfolio-primary/10 text-portfolio-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">East Godavari, Andhra Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-portfolio-primary/10 text-portfolio-primary">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/navadeepreddi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                    >
                      linkedin.com/in/navadeepreddi
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-portfolio-primary/10 text-portfolio-primary">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <a 
                      href="https://github.com/navadeepreddi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-primary transition-colors"
                    >
                      github.com/navadeepreddi
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <div className="inline-block px-4 py-2 bg-portfolio-secondary text-white text-sm font-medium rounded-full">
                Available for freelance & internships
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariant}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="focus:ring-portfolio-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} className="focus:ring-portfolio-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message (min 20 characters)" 
                              {...field} 
                              className="min-h-[120px] focus:ring-portfolio-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <svg 
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24"
                          >
                            <circle 
                              className="opacity-25" 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="4"
                            ></circle>
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Motivational Quote */}
            <div className="mt-8 text-center italic text-muted-foreground">
              "Let's build something amazing together!"
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}