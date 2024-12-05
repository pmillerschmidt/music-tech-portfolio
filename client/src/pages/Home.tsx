import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Music } from "../components/Music";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Music />
      <Contact />
    </main>
  );
}
