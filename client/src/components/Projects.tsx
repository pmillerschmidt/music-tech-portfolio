import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectDemo } from "./ProjectDemo";
import { projects } from "../lib/constants";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="relative h-48 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-md transition-shadow"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <DialogTrigger asChild>
                          <Button variant="outline" className="text-white border-white hover:bg-white/20">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Demo
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <ProjectDemo project={project} />
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
