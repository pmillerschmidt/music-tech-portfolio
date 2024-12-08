import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Pause } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  liveDemo?: boolean;
  isExternalDemo?: boolean;
  embedDemo?: boolean;
  demoDescription?: string;
  features?: string[];
}

interface ProjectDemoProps {
  project: Project;
}

export function ProjectDemo({ project }: ProjectDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <DialogContent className="max-w-4xl w-full">
      <DialogHeader>
        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
        <DialogDescription className="text-lg mt-2">
          {project.demoDescription || project.description}
        </DialogDescription>
      </DialogHeader>
      
      <div className="mt-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
          {project.liveDemo ? (
            <div className="relative w-full h-full">
              {project.embedDemo && project.demoUrl ? (
                <div className="relative w-full h-full">
                  {iframeLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <p className="text-lg font-medium mb-2">Loading Demo...</p>
                        <p className="text-sm text-gray-600">Please wait while the demo loads</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={project.demoUrl}
                    className="w-full h-full border-0 bg-white"
                    onLoad={handleIframeLoad}
                    title={`${project.title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="eager"
                  />
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait">
                    {isPlaying && (
                      <motion.div
                        key="demo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <p className="text-lg font-medium mb-4">Interactive Demo</p>
                          <p className="text-sm text-gray-600">
                            {project.demoDescription}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <Button
                    className="absolute bottom-4 right-4 z-10"
                    onClick={() => {
                      if (project.isExternalDemo && project.demoUrl) {
                        window.open(project.demoUrl, '_blank');
                      } else {
                        setIsPlaying(!isPlaying);
                      }
                    }}
                  >
                    {project.isExternalDemo ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />
                    )}
                  </Button>
                </>
              )}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {project.features && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Key Features</h3>
          <ul className="grid grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.demoUrl && !project.embedDemo && (
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={() => window.open(project.demoUrl, "_blank")}
            className="w-full sm:w-auto"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Open in New Tab
          </Button>
        </div>
      )}
    </DialogContent>
  );
}
