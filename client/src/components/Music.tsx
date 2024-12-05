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

        <div className="relative">
          {/* Scroll indicators */}
          <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 -mx-4 custom-scrollbar">
            {musicProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="snap-center shrink-0 w-[300px] md:w-[calc(33.333% - 1rem)] min-w-[300px]"
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
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
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white/10">
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
      </div>
    </section>
  );
}
