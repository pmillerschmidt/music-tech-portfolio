import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

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

  // Cloudinary video sources for reliable delivery
  const videoSources = [
    {
      src: "https://res.cloudinary.com/demo/video/upload/v1710339587/pexels-rostislav-uzunov-9389446_1080p_wvGA9.mp4",
      type: "video/mp4"
    },
    {
      src: "https://res.cloudinary.com/demo/video/upload/v1710339587/pexels-rostislav-uzunov-9389446_1080p_wvGA9.webm",
      type: "video/webm"
    }
  ];

  // High-quality fallback image from Cloudinary
  const fallbackImage = "https://res.cloudinary.com/demo/image/upload/v1710339587/hero-fallback_xn2bk9.jpg";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && !isMobile && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20 transition-opacity duration-500">
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
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setIsVideoError(true)}
          >
            {videoSources.map((source, index) => (
              <source key={index} src={source.src} type={source.type} />
            ))}
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

        {/* Enhanced Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/50 to-black/80"
          style={{
            backdropFilter: 'blur(4px)',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent drop-shadow-lg">
            Creative Technology Researcher
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Exploring the intersection of human-computer interaction, artificial intelligence, and interactive media at MIT Media Lab
        </p>
        <Button 
          className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 backdrop-blur-sm transition-all duration-300"
          size="lg"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
        </Button>
      </motion.div>
    </section>
  );
}
