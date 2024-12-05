import { useRoute } from "wouter";
import { projects } from "../lib/constants";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProjectDetailPage() {
  const [, params] = useRoute("/projects/:id");
  const projectId = parseInt(params?.id || "0");
  const project = projects[projectId];

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
    <main className="min-h-screen pt-16">
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[50vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[3px]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects">
              <Button variant="outline" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {project.title}
                </h1>
                <p className="text-xl text-white/80">
                  {project.description}
                </p>
              </div>

              {project.demoUrl && (
                <div className="flex gap-4">
                  <Button 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Visit Live Demo
                  </Button>
                </div>
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

              {project.liveDemo && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Interactive Demo</h2>
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/40">
                      {/* Interactive demo content will go here */}
                      <div className="w-full h-full flex items-center justify-center text-white/60">
                        Interactive demo coming soon
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
