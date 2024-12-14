import { Projects } from "../components/Projects";
import { Hero } from "../components/Hero";
import { Music } from "../components/Music";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Music />
    </main>
  );
}
