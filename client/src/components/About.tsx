import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
              alt="Profile"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Paul Miller-Schmidt
                </h3>
                <p className="text-gray-600 mb-6">
                  As a tinkerer who discovered music later in life, I aim to
                  build the tools I wish I'd had growing up. With a background in computer
                  science, machine learning, and electronic instrument design, I
                  want to create adaptive systems that make musical expression
                  more accessible. From building a makerspace in high school to
                  developing musical toys at Yale, I'm driven to use technology
                  to help people learn through play.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Education</h4>
                    <p className="text-gray-600">
                      M.S. Media Arts and Sciences (Expected 2025)
                    </p>
                    <p className="text-gray-600">
                      B.S. Computer Science and Music Technology
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Research Interests</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Human-AI Interaction</li>
                      <li>Interactive Music Systems</li>
                      <li>Creative Computing</li>
                      <li>Extended Reality (XR)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="w-full sm:w-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
