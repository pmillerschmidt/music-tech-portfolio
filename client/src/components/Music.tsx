import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, ExternalLink } from "lucide-react";
import { useState } from "react";

const musicProjects = [
  {
    title: "Digital Sound Processing",
    description: "Exploring the intersection of technology and music through digital sound processing and synthesis",
    image: "https://images.unsplash.com/photo-1519874179391-5c97e0fccf16",
    link: "#"
  },
  {
    title: "Interactive Music Installations",
    description: "Creating interactive installations that respond to movement and environmental factors",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    link: "#"
  },
  {
    title: "AI Music Generation",
    description: "Using machine learning to create unique musical compositions and soundscapes",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    link: "#"
  },
  {
    title: "Spatial Audio Experience",
    description: "Developing immersive 3D audio environments for virtual reality applications",
    image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b",
    link: "#"
  }
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
    <section id="music" className="relative py-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
          alt="Music Background"
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
            className="container mx-auto px-4"
          >
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
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-white/70">{project.description}</CardDescription>
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
                          onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
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
                          onClick={() => window.open(project.link, '_blank')}
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
