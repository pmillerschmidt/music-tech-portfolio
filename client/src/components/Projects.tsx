import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProjectDemo } from "./ProjectDemo";
import { projects } from "../lib/constants";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 0 && !hasScrolled) {
      setHasScrolled(true);
    } else if (e.currentTarget.scrollLeft === 0 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <section id="projects" className="relative py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Technology Background"
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
          Featured Projects
        </motion.h2>
        
        <div className="relative group">
          {/* Scroll indicator */}
          {!hasScrolled && (
            <div className="absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-black/60 to-transparent pointer-events-none z-10 flex items-center justify-end pr-4">
              <motion.div
                animate={{ x: [5, 0, 5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/60"
              >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.div>
          </div>
          )}
          
          <div 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 custom-scrollbar overflow-y-hidden scroll-smooth w-[calc(100%+4rem)] -ml-4"
            onScroll={handleScroll}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="snap-start shrink-0 w-[300px] md:w-[calc(33.333% - 1rem)]"
              >
                <Dialog>
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="relative h-48 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300"
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
                            className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10"
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
      </div>
    </section>
  );
}
