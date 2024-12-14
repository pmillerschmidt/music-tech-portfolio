import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Music } from "../components/Music";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ProjectsPage() {
  const [location] = useLocation();

  useEffect(() => {
    // Function to handle scroll with retry
    const scrollToSection = (retryCount = 0) => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          // Force a layout reflow
          void element.offsetHeight;
          
          const scrollOptions = {
            behavior: "smooth" as ScrollBehavior,
            block: "start" as ScrollLogicalPosition,
          };

          try {
            element.scrollIntoView(scrollOptions);
          } catch (e) {
            console.error("Scroll error:", e);
            // Fallback to window.scrollTo
            const rect = element.getBoundingClientRect();
            window.scrollTo({
              top: rect.top + window.pageYOffset,
              behavior: "smooth",
            });
          }
        } else if (retryCount < 3) {
          // Retry a few times if element is not found
          setTimeout(() => scrollToSection(retryCount + 1), 250);
        }
      }
    };

    // Delay initial scroll to ensure content is loaded
    const initialScrollTimeout = setTimeout(() => {
      scrollToSection();
    }, 500);

    // Handle hash changes
    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      clearTimeout(initialScrollTimeout);
      window.removeEventListener('hashchange', handleHashChange);
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
