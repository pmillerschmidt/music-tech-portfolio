import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { musicProjects } from "../lib/constants";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function Music() {
  return (
    <section
      id="music"
      className="relative min-h-screen -mt-1"
    >
      <div className="relative w-full h-full">
        {/* Background that covers entire section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/music-background.png"
            alt="Music Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90 backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/5 to-black/20" />
          </div>
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* First viewport - initial view */}
          <div className="flex items-center">
            <div className="container mx-auto px-4 py-12">
              <motion.h2
                className="text-4xl font-bold mb-8 text-center text-white hero-text bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Music & Sound
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {musicProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <Link href={`/music/${index}`}>
                      <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group/card cursor-pointer">
                        <CardHeader className="p-4">
                          <CardTitle className="text-white">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            {project.summary}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="relative h-40 w-full bg-cover bg-center rounded-md mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-white font-medium flex items-center">
                                View Details
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}