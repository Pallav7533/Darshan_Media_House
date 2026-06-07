import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "./not-found";

export default function ServiceDetail() {
  const params = useParams();
  const service = services.find(s => s.slug === params.slug);

  if (!service) return <NotFound />;

  const Icon = service.icon;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-background border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <Link href="/services" className="inline-flex items-center text-sm text-primary mb-8 hover:underline">
            ← Back to All Services
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
              <Icon className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold">{service.title}</h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl">
            {service.shortDesc}
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Comprehensive Solutions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="bg-card p-4 rounded-lg border border-border flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="font-medium">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center p-4 bg-[#161616] rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mr-4 shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                      <span className="text-lg text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-card border border-primary/20 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4">Ready to elevate your brand?</h3>
                <p className="text-muted-foreground mb-8 text-sm">
                  Schedule a consultation with our {service.title.toLowerCase()} experts today to discuss your vision.
                </p>
                <Button size="lg" className="w-full text-base font-bold mb-4" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full border-border" asChild>
                  <Link href="/portfolio">View Related Work</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
