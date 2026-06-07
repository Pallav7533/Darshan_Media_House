import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, portfolio, clients, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="DMH Hero Background" 
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-[#111111]/20"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight mb-6">
              Building Brands That <span className="text-primary italic">People Remember</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-light">
              We are a premium media, branding, and influencer marketing powerhouse trusted by top-tier brands to dominate the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90" asChild data-testid="btn-hero-consult">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-bold border-primary text-primary hover:bg-primary/10" asChild data-testid="btn-hero-work">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-[#161616]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: "Brands Elevated", value: "500+" },
              { label: "Premium Services", value: "10+" },
              { label: "Years of Excellence", value: "5" },
              { label: "Audience Reach", value: "1M+" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground">Comprehensive marketing solutions designed to scale your business and solidify your market dominance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full p-8 rounded-xl bg-card border border-card-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)] flex flex-col"
                    data-testid={`card-service-${service.slug}`}
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-300">
                      <Icon className="text-primary w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.shortDesc}</p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                      Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-white/5" asChild>
              <Link href="/services">View All 10 Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Agency for<br/><span className="text-primary">Ambitious Brands</span></h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Darshan Media House isn't just another agency. We are your strategic growth partners. We blend cinematic production quality with data-driven performance marketing to create campaigns that don't just look beautiful—they convert.
              </p>
              <ul className="space-y-4 mb-10">
                {["Elite in-house production team", "Data-first growth strategies", "Exclusive influencer network", "Uncompromising quality standards"].map((item, i) => (
                  <li key={i} className="flex items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild data-testid="btn-about-more">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img src="/about-teaser.png" alt="DMH Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Selected Works</h2>
              <p className="text-muted-foreground">A glimpse into the premium brands we've helped build and scale.</p>
            </div>
            <Button variant="link" className="text-primary hover:text-primary/80 px-0" asChild>
              <Link href="/portfolio" className="flex items-center">See Full Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Gold hover overlay effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300 z-10"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-serif font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-card border-y border-primary/20">
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to Dominate?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Partner with Darshan Media House and let's craft a legacy for your brand.
          </p>
          <Button size="lg" className="h-16 px-10 text-lg font-bold" asChild>
            <Link href="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
