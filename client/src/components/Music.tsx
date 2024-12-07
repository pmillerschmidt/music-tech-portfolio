import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, ExternalLink } from "lucide-react";
import { useState } from "react";
import { musicProjects } from "../lib/constants";
import { Dialog } from "@/components/ui/dialog";
import { ProjectDemo } from "./ProjectDemo";

export function Music() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 0 && !hasScrolled) {
      setHasScrolled(true);
    } else if (e.currentTarget.scrollLeft === 0 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <section id="music" className="relative py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/music-background.png"
          alt="Music Technology Background"
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
          Music & Sound
        </motion.h2>

        <div className="relative group">
          {/* Scroll indicator */}
          {!hasScrolled && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
              <motion.div
                animate={{ x: [5, 0, 5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/60 bg-black/20 rounded-full p-2 backdrop-blur-sm"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </div>
          )}

          <div className="container mx-auto px-4">
            <div 
              className="grid grid-flow-col auto-cols-[calc(33.333%-1rem)] gap-6 pb-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar"
              onScroll={handleScroll}
              ref={(el) => {
                if (el) {
                  requestAnimationFrame(() => {
                    el.scrollLeft = 0;
                  });
                }
              }}
            >
              {musicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Card 
                    className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedProject(index)}
                  >
                    <CardHeader>
                      <CardTitle className="text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative h-48 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          {project.liveDemo && (
                            <Button
                              variant="outline"
                              size="icon"
                              className="text-white border-white hover:bg-white/20"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingIndex(playingIndex === index ? null : index);
                              }}
                            >
                              {playingIndex === index ? (
                                <Pause className="h-4 w-4" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </Button>
                          )}
                          {project.demoUrl && (
                            <Button
                              variant="outline"
                              className="text-white border-white hover:bg-white/20"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.demoUrl, "_blank");
                              }}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Demo
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject !== null && (
          <ProjectDemo project={musicProjects[selectedProject]} />
        )}
      </Dialog>
    </section>
  );
}
