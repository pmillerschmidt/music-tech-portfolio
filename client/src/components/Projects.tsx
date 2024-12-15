import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projects } from "../lib/constants";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen -mt-1"
    >
      <div className="relative w-full h-full">
        {/* Background that covers entire section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/projects-inverted.jpg"
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 backdrop-blur-md" />
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* First viewport - initial view */}
          <div className="flex items-center">
            <div className="container mx-auto px-4 py-12">
              <motion.h2
                className="text-4xl font-bold mb-8 text-center text-white hero-text bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>

              {/* First three projects */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <Link href={`/projects/${index}`}>
                      <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                        <CardHeader className="p-4">
                          <CardTitle className="text-white">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="relative h-40 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white font-medium flex items-center">
                                View Details
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            {project.githubUrl && (
                              <Button
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.githubUrl, '_blank');
                                }}
                                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                              >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 group-hover:animate-pulse">
                                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View Source
                              </Button>
                            )}
                            {project.projectUrl && (
                              <Button
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.projectUrl, '_blank');
                                }}
                                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                              >
                                <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                                Visit Project Website
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Second set of projects */}
          <div className="min-h-[80vh] pt-0">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(3, 6).map((project, index) => (
                  <motion.div
                    key={index + 3}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <Link href={`/projects/${index + 3}`}>
                      <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                        <CardHeader className="p-4">
                          <CardTitle className="text-white">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="relative h-40 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white font-medium flex items-center">
                                View Details
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            {project.githubUrl && (
                              <Button
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.githubUrl, '_blank');
                                }}
                                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                              >
                                <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 group-hover:animate-pulse">
                                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View Source
                              </Button>
                            )}
                            {project.projectUrl && (
                              <Button
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(project.projectUrl, '_blank');
                                }}
                                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                              >
                                <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                                Visit Project Website
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}