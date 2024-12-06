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

const musicProjects = [
  {
    title: "Neural Music Synthesis",
    description:
      "Developing deep learning models for real-time audio synthesis and music generation using neural networks",
    image: "/images/grooveblocks.jpg", // You can place your own image in public/images/neural-music.jpg
    link: "#",
  },
  {
    title: "AI-Powered Music Composition",
    description:
      "Building transformer-based models for generating complex musical arrangements and harmonies",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070", // Digital waveforms and AI visualization
    link: "#",
  },
  {
    title: "Intelligent Music Production",
    description:
      "Implementing machine learning algorithms for automated mixing, mastering, and sound design",
    image:
      "https://images.unsplash.com/photo-1597995722437-b71d4300c0f0?q=80&w=2070", // Modern music tech studio
    link: "#",
  },
  {
    title: "Adaptive Music Systems",
    description:
      "Engineering context-aware AI systems that generate dynamic soundtracks based on real-time input",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070", // Tech interface with music elements
    link: "#",
  },
];

export function Music() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 0 && !hasScrolled) {
      setHasScrolled(true);
    } else if (e.currentTarget.scrollLeft === 0 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <section
      id="music"
      className="relative py-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/images/music-background.PNG" // Place your background image in public/images/music-background.PNG
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
              className="grid grid-flow-col auto-cols-[calc(33.333%-1rem)] gap-6 pb-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar scroll-smooth"
              onScroll={handleScroll}
            >
              {musicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="snap-start shrink-0 w-[calc(33.333% - 1rem)]"
                >
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group">
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-white border-white hover:bg-white/20"
                            onClick={() =>
                              setPlayingIndex(
                                playingIndex === index ? null : index,
                              )
                            }
                          >
                            {playingIndex === index ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            className="text-white border-white hover:bg-white/20"
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
