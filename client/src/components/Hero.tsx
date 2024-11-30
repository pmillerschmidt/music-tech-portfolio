import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1532187863486-abf9dbad1b69)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)"
        }}
      />
      
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Creative Technology Researcher
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Exploring the intersection of human-computer interaction, artificial intelligence, and interactive media at MIT Media Lab
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="text-white border-white hover:bg-white/20"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
          <ArrowDown className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
}
