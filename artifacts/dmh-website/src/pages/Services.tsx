import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <div className="w-full">
      <section className="relative py-32 bg-background border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src="/services-bg.png" alt="Services" className="w-full h-full object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6"
          >
            Premium <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-light"
          >
            End-to-end media and marketing solutions engineered for absolute market dominance.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full bg-card rounded-2xl border border-card-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="h-48 relative overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors"></div>
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-background/80 backdrop-blur border border-white/10 flex items-center justify-center">
                        <Icon className="text-primary w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 line-clamp-2">{service.shortDesc}</p>
                      
                      <div className="space-y-2 mb-8">
                        {service.subServices.slice(0, 3).map((sub, i) => (
                          <div key={i} className="text-sm flex items-center text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {sub}
                          </div>
                        ))}
                        {service.subServices.length > 3 && (
                          <div className="text-sm text-muted-foreground italic">
                            + {service.subServices.length - 3} more specializations
                          </div>
                        )}
                      </div>

                      <div className="inline-flex items-center text-sm font-semibold text-primary">
                        Explore Full Details <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
