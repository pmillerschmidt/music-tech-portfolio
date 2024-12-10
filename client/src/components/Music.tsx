import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { musicProjects } from "../lib/constants";
import { ExternalLink } from "lucide-react";
import { Link as WouterLink } from "wouter"; // Import for wouter Link


export function Music() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft > 0 && !hasScrolled) {
      setHasScrolled(true);
    } else if (e.currentTarget.scrollLeft === 0 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  const scrollRight = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (scrollContainerRef.current) {
      // Calculate the width of one project card including gap
      const cardWidth = scrollContainerRef.current.clientWidth / 3;
      // Scroll by exactly 3 cards
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 3,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="music" className="relative py-8 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/music-background.png"
          alt="Music Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 backdrop-blur-md" />
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
            <motion.button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[100] p-3 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white/60 hover:text-white/80 transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={scrollRight}
              whileHover={{ x: [0, 5, 0] }}
              transition={{ duration: 1 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="pointer-events-none"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          )}

          <div className="container mx-auto px-4">
            <div 
              ref={scrollContainerRef}
              className="grid grid-flow-col auto-cols-[calc(33.333%-1.333rem)] gap-6 pb-6 overflow-x-auto snap-x snap-mandatory custom-scrollbar"
              onScroll={handleScroll}
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
                  <WouterLink href={`/music/${index}`}> {/* Using wouter Link */}
                    <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-white/70">
                          {project.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative h-48 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
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
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech) => (
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
                  </WouterLink>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}