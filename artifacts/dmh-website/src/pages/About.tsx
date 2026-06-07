import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Lightbulb, Zap, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden bg-card">
        <div className="absolute inset-0 z-0">
          <img src="/about-teaser.png" alt="About DMH" className="w-full h-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6"
          >
            We Are <span className="text-primary">Darshan Media House</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-muted-foreground font-light"
          >
            A collective of visionaries, strategists, and creators building the world's most compelling brands.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>
                  Founded with a singular vision to redefine digital excellence, Darshan Media House (DMH) emerged from the belief that marketing should be cinematic, strategic, and undeniable.
                </p>
                <p>
                  We don't do templates. We don't do 'good enough'. We partner with ambitious brands to craft narratives that capture attention and infrastructure that drives growth. From high-end video production to hyper-targeted influencer campaigns, every execution is handled with microscopic attention to detail.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/portfolio-1.png" alt="Creative work" className="rounded-xl w-full h-64 object-cover" />
              <img src="/portfolio-2.png" alt="Creative work" className="rounded-xl w-full h-64 object-cover translate-y-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#161616]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide our every decision and shape the work we deliver.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Precision", desc: "Microscopic attention to detail in every frame, pixel, and campaign strategy." },
              { icon: Lightbulb, title: "Innovation", desc: "Constant evolution. We never settle for yesterday's successful formula." },
              { icon: Zap, title: "Impact", desc: "Beautiful work is useless if it doesn't move the needle. We design for ROI." },
              { icon: Shield, title: "Integrity", desc: "Absolute transparency with our partners. Your success is our reputation." }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <value.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Join The Roster</h2>
          <p className="text-xl text-muted-foreground mb-10">We selectively partner with brands ready to dominate their vertical.</p>
          <Button size="lg" asChild>
            <Link href="/contact">Inquire About Partnership <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
