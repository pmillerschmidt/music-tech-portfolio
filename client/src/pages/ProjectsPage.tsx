import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Music } from "../components/Music";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ProjectsPage() {
  const [location] = useLocation();

  useEffect(() => {
    // Function to handle scroll
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    };

    // Initial scroll
    scrollToSection();

    // Add event listener for hash changes
    window.addEventListener('hashchange', scrollToSection);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, [location]);

  return (
    <main className="relative min-h-screen overflow-y-auto scroll-smooth">
      <Hero />
      <Projects />
      <Music />
    </main>
  );
}
