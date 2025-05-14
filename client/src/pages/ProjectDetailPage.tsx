import { useRoute } from "wouter";
import { projects } from "../lib/constants";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, ArrowLeft, Play, Pause } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function ProjectDetailPage() {
  const [, params] = useRoute("/projects/:id");
  const projectId = parseInt(params?.id || "0");
  const project = projects[projectId];
  const [isPlaying, setIsPlaying] = useState(false);

  if (!project) {
    return (
      <main className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[20s] hover:scale-110"
            style={{
              filter: "brightness(0.7) contrast(1.1)",
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              onClick={() => {
                window.location.href = "/#projects";
                // Add a small delay to ensure the navigation happens before scrolling
                setTimeout(() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white hero-text bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <div className="flex gap-4">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <Button 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2 group-hover:animate-pulse">
                          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Source
                      </Button>
                    )}
                    {(project.title === "nextChord" || project.title === "Chess Engine Design") && project.projectUrl && (
                      <Button 
                        onClick={() => window.open(project.projectUrl, '_blank')}
                        className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Visit Project Website
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-white/80 text-lg">
                    {project.description}
                  </p>
                </CardContent>
              </Card>

              {/* Demo Video Section */}
              {project.videoUrl && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Project Demo</h2>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/40">
                      {project.isYoutubeVideo ? (
                        <iframe
                          src={project.videoUrl.includes('embed') ? project.videoUrl : project.videoUrl.replace('watch?v=', 'embed/')}
                          className="w-full h-full"
                          title={`${project.title} Demo`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={project.videoUrl}
                          controls
                          className="w-full h-full"
                          poster={project.image}
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* For MelGen project, show About section first */}
              {project.title === "MelGen" ? (
                <>
                  {/* About Section with Image */}
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="aspect-video rounded-lg overflow-hidden bg-black/40 mb-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 text-white">About This Project</h2>
                      <div className="prose prose-invert">
                          <div className="space-y-4" dangerouslySetInnerHTML={{
                            __html: project.detailedDescription.split('\n').map(paragraph => {
                              const trimmedParagraph = paragraph.trim();
                              if (!trimmedParagraph) return '';

                              if (trimmedParagraph.startsWith('-')) {
                                return `<div class="flex items-start gap-3 text-white/80">
                                  <span class="select-none">•</span>
                                  <span style="flex: 1">${trimmedParagraph.substring(1).trim()}</span>
                                </div>`;
                              }

                              return `<p class="text-white/80">${trimmedParagraph}</p>`;
                            }).join('')
                          }} />
                        </div>
                    </CardContent>
                  </Card>
                  {/* Key Features */}
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
                </>
              ) : (
                <>
                  

                  {/* Detailed Description */}
                  {project.detailedDescription && (
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                      <CardContent className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-white">About This Project</h2>
                        <div className="prose prose-invert">
                          <div className="space-y-4" dangerouslySetInnerHTML={{
                            __html: project.detailedDescription.split('\n').map(paragraph => {
                              const trimmedParagraph = paragraph.trim();
                              if (!trimmedParagraph) return '';

                              if (trimmedParagraph.startsWith('-')) {
                                return `<div class="flex items-start gap-3 text-white/80">
                                  <span class="select-none">•</span>
                                  <span style="flex: 1">${trimmedParagraph.substring(1).trim()}</span>
                                </div>`;
                              }

                              return `<p class="text-white/80">${trimmedParagraph}</p>`;
                            }).join('')
                          }} />
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  {/* Key Features */}
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
                </>
              )}

              {/* Technologies */}
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