import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const [_, navigate] = useLocation();
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

  const videoUrl = "https://cdn.pixabay.com/vimeo/529927344/paint-71788.mp4?width=1280&hash=bc7c3cc938db7c86523bc6be025ad4a42e5b3928";
  const fallbackImage = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop";

  const { toast } = useToast();

  // Handle video loading success
  const handleVideoLoaded = () => {
    console.log('Video loaded successfully');
    setIsVideoLoaded(true);
  };

  // Handle video loading error
  const handleVideoError = (error: any) => {
    console.error('Video loading error:', error);
    setIsVideoError(true);
    toast({
      title: "Video Loading Error",
      description: "Falling back to static image background",
      variant: "destructive",
    });
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
        {!isMobile && (
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="hero-text bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Paul Miller-Schmidt
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Musician | Engineer | Educator
        </p>
        <Button 
          className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
          size="lg"
          onClick={() => navigate('/projects')}
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </motion.div>
    </section>
  );
}
