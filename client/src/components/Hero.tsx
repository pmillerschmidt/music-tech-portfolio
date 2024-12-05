import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices and handle resize events
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const videoUrl = "https://static.videezy.com/system/resources/previews/000/004/381/original/Light_Tech_Background_4K_Motion.mp4";
  const fallbackImage = "https://images.unsplash.com/photo-1518972559570-7cc1309d3229?q=80&w=2070&auto=format&fit=crop";

  const { toast } = useToast();

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setIsVideoError(true);
    toast({
      title: "Video Loading Error",
      description: "Falling back to static image background",
      variant: "destructive",
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && !isMobile && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Video Background for Desktop */}
        {!isMobile && !isVideoError && (
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedData={handleVideoLoaded}
              onError={handleVideoError}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Fallback Image for Mobile or Error */}
        {(isMobile || isVideoError) && (
          <motion.img
            src={fallbackImage}
            alt="Creative Technology Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            loading="eager"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
          <span className="hero-text bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] animate-gradient">
            Paul Miller-Schmidt
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
          Musician | Engineer | Educator
        </p>
        <Button 
          className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
          size="lg"
          onClick={scrollToProjects}
        >
          View My Work
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="ml-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </Button>
      </motion.div>
    </section>
  );
}
