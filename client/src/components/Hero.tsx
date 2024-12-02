import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.3)" }}
        >
          <source src="https://player.vimeo.com/external/459863572.hd.mp4?s=49e34db9e4253106a8ac0b8a72f2ae88b1763f59&profile_id=174" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/30" /> {/* Additional overlay for better text visibility */}
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
          Creative Technology Researcher
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-md">
          Exploring the intersection of human-computer interaction, artificial intelligence, and interactive media at MIT Media Lab
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="text-white border-white hover:bg-white/20 shadow-lg"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
          <ArrowDown className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}
