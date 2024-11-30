import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
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
                <form className="space-y-6">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
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
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center hover:text-primary">
                  <Mail className="w-5 h-5 mr-3" />
                  contact@example.com
                </a>
                <a href="https://github.com" className="flex items-center hover:text-primary">
                  <Github className="w-5 h-5 mr-3" />
                  GitHub Profile
                </a>
                <a href="https://linkedin.com" className="flex items-center hover:text-primary">
                  <Linkedin className="w-5 h-5 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Download CV</h3>
              <Button variant="outline" className="w-full">
                Download Resume/CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
