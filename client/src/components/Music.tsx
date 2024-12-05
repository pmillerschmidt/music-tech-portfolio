import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
  }
];

export function Music() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 -mx-4 scrollbar-hide">
          {musicProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="snap-center shrink-0 w-[300px] md:w-[400px]"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
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
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
