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
        // Ensure the element is scrolled into view after a short delay
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="relative min-h-screen overflow-y-auto scroll-smooth">
      <Hero />
      <Projects />
      <Music />
    </main>
  );
}
