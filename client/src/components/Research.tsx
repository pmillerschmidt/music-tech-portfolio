import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { researchInterests } from "../lib/constants";

export function Research() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Research Interests
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1599652749620-e45b7f38988e"
              alt="Research Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {researchInterests.map((interest, index) => (
              <Card key={interest.title} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
