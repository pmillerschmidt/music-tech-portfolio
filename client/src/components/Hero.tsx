import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);

  // Detect mobile devices
  const [isMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    return false;
  });

  const videoUrl = "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4";
  const fallbackImageUrl = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setIsVideoError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ filter: "brightness(0.3)" }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {!isVideoLoaded && !isVideoError && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            )}
          </>
        ) : (
          <img
            src={fallbackImageUrl}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
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
