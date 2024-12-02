import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Research } from "../components/Research";
import { Projects } from "../components/Projects";
import { Music } from "../components/Music";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Research />
      <Projects />
      <Music />
      <Contact />
    </main>
  );
}
