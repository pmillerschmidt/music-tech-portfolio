import { useRoute } from "wouter";
import { musicProjects } from "../lib/constants";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowLeft, Play, Pause } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function MusicDetailPage() {
  const [, params] = useRoute("/music/:id");
  const projectId = parseInt(params?.id || "0");
  const project = musicProjects[projectId];
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/music">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Music
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[3px]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Link href="/music">
              <Button variant="outline" className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Music
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white hero-text bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl text-white/80">
                  {project.demoDescription || project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    View Project
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? "Pause Demo" : "Play Demo"}
                  </Button>
                )}
              </div>

              {project.liveDemo && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Interactive Demo</h2>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/40">
                      <div className="relative w-full h-full">
                        {isPlaying && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="text-center text-white">
                              <p className="text-lg font-medium mb-4">Interactive Demo</p>
                              <p className="text-sm text-white/60">
                                {project.demoDescription}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {project.features && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-white/80">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
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
          </div>
        </div>
      </div>
    </main>
  );
}
