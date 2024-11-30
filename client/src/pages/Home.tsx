import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Research } from "../components/Research";
import { Publications } from "../components/Publications";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Research />
      <Publications />
      <Contact />
    </main>
  );
}
