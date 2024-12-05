import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="relative py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Contact Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[3px]" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-white hero-text bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6 text-white">
                  <div>
                    <Input placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-white backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  contact@example.com
                </a>
                <a href="https://github.com" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </a>
                <a href="https://linkedin.com" className="flex items-center text-white/80 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="text-white backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Download CV</h3>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20">
                Download Resume/CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
