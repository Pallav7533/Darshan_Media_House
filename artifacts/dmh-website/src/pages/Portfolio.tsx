import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/lib/data";
import { Button } from "@/components/ui/button";

const categories = ["All", "Branding", "Photography", "Videography", "Websites", "Marketing Campaigns"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio = activeCategory === "All" 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="w-full">
      <section className="py-32 bg-background border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
            Our <span className="text-primary">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            A showcase of premium brands we've elevated through cinematic design and strategic execution.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-card text-muted-foreground hover:text-white hover:bg-card-border"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPortfolio.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/80 group-hover:bg-primary/20 transition-colors duration-300"></div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.category}</span>
                    <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
