import { motion } from "framer-motion";
import { clients, testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Clients() {
  return (
    <div className="w-full">
      <section className="py-32 bg-background border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6">
            Trusted by <span className="text-primary">Leaders</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            We partner with ambitious organizations across the globe.
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, i) => (
              <div 
                key={i} 
                className="aspect-video bg-card border border-border rounded-xl flex items-center justify-center p-8 grayscale hover:grayscale-0 hover:border-primary/30 transition-all duration-500"
              >
                <h3 className="font-serif font-bold text-2xl text-muted-foreground">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#161616] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Client Voices</h2>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((test, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="bg-card p-8 md:p-12 rounded-2xl border border-border h-full flex flex-col">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    <p className="text-lg md:text-xl text-foreground font-light leading-relaxed mb-8 flex-grow">
                      "{test.quote}"
                    </p>
                    <div className="mt-auto">
                      <div className="font-serif font-bold text-lg text-white">{test.author}</div>
                      <div className="text-primary text-sm font-semibold">{test.company}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-10 gap-4">
              <CarouselPrevious className="static translate-y-0 hover:bg-primary hover:text-black border-border" />
              <CarouselNext className="static translate-y-0 hover:bg-primary hover:text-black border-border" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
