import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Music } from "../components/Music";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ProjectsPage() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if we have a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Enable scrolling on the body
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
        }, 100);
      }
    } else {
      // If no hash, ensure scrolling is enabled
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    // Cleanup function to ensure scrolling is always enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [location]);

  return (
    <main className="min-h-screen overflow-auto">
      <Hero />
      <Projects />
      <Music />
    </main>
  );
}
