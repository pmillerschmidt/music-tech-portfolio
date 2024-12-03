import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoError, setIsVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices on mount
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

  // Video sources with multiple formats for better browser support
  const videoSources = [
    {
      src: "https://cdn.pixabay.com/vimeo/328269になってきた/47313/pexels-2611250.mp4?width=1280&hash=786c49e38c038d025b1d41fdb7dd2f00c58c9af1",
      type: "video/mp4"
    },
    {
      src: "https://cdn.pixabay.com/vimeo/328269になってきた/47313/pexels-2611250.webm?width=1280&hash=786c49e38c038d025b1d41fdb7dd2f00c58c9af1",
      type: "video/webm"
    }
  ];

  const fallbackImage = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Loading Spinner */}
        {!isVideoLoaded && !isVideoError && !isMobile && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center transition-opacity duration-500">
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
          />
        )}

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)',
            backdropFilter: 'blur(4px)'
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
          Creative Technology Researcher
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Exploring the intersection of human-computer interaction, artificial intelligence, and interactive media at MIT Media Lab
        </p>
        <Button 
          variant="outline" 
          size="lg"
          className="text-white border-white hover:bg-white/20 transition-all duration-300 shadow-lg backdrop-blur-sm"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Work
          <ArrowDown className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}
