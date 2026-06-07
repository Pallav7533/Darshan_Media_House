import { useParams, Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import NotFound from "./not-found";
import { useRef } from "react";

export default function ServiceDetail() {
  const params = useParams();
  const service = services.find(s => s.slug === params.slug);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!service) return <NotFound />;

  const Icon = service.icon;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="w-full bg-[#111111]">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-end pb-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0 origin-top">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover filter grayscale-[10%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent"></div>
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <Link href="/services" className="inline-flex items-center text-[11px] font-sans font-[600] tracking-[0.2em] uppercase text-primary/80 hover:text-primary mb-10 transition-colors">
            &larr; Back to Services
          </Link>
          
          <div className="flex gap-8 items-stretch">
            {/* Tall gold line */}
            <div className="w-[2px] bg-primary opacity-80" />
            
            <div className="pb-2">
              <div className="flex items-center gap-4 mb-6">
                <Icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                <span className="text-[14px] font-sans text-primary font-[500] tracking-widest uppercase">Service Focus</span>
              </div>
              <h1 className="text-5xl md:text-[72px] font-serif font-[800] text-white leading-[0.9] tracking-tight mb-8">
                {service.title}
              </h1>
              <p className="text-[18px] md:text-[22px] font-sans text-white/60 font-[300] max-w-3xl leading-relaxed">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-24">
              
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-[32px] font-serif font-[800] text-white mb-10">Comprehensive Solutions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub, i) => (
                    <div key={i} className="group relative bg-[#161616] p-6 border border-white/5 flex items-start overflow-hidden hover:bg-[#1a1a1a] transition-colors">
                      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
                      <span className="text-[12px] font-serif font-bold text-white/20 mr-4 mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans text-[14px] text-white/80 font-[500] tracking-wide">{sub}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-[32px] font-serif font-[800] text-white mb-10">Key Benefits</h2>
                <div className="space-y-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start border-t border-white/5 pt-6">
                      <div className="text-[24px] font-serif font-[800] text-primary w-16 shrink-0 leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <p className="text-[16px] font-sans text-white/70 font-[300] leading-relaxed pt-1">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-[32px] font-serif font-[800] text-white mb-12">Our Process</h2>
                <div className="relative flex justify-between items-start">
                  {/* Connecting Line */}
                  <div className="absolute top-6 left-[5%] right-[5%] h-[1px] bg-white/10 z-0">
                    <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                  </div>
                  
                  {['Discovery', 'Strategy', 'Execution', 'Optimization'].map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center group w-1/4">
                      <div className="w-12 h-12 rounded-full bg-[#111111] border border-primary text-primary flex items-center justify-center font-serif font-bold text-lg mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                        {i + 1}
                      </div>
                      <div className="text-[14px] font-sans font-[600] uppercase tracking-wider text-white text-center">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white/[0.02] border-t-2 border-t-primary border-x border-b border-white/5 p-10 backdrop-blur-md">
                <div className="text-[10px] font-sans font-[600] tracking-[0.3em] uppercase text-primary mb-4">Start Now</div>
                <h3 className="text-[28px] font-serif font-[800] text-white mb-6 leading-tight">Ready to elevate your brand?</h3>
                <p className="text-[14px] font-sans text-white/50 mb-10 leading-relaxed font-[300]">
                  Schedule a consultation with our experts today to discuss your vision and dominate your market.
                </p>
                <div className="space-y-4">
                  <Link 
                    href="/contact" 
                    className="btn-gold-shimmer w-full h-14 flex items-center justify-center text-[12px] transition-transform hover:scale-[1.02]"
                  >
                    GET A QUOTE
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="w-full h-14 border border-white/20 flex items-center justify-center text-[12px] font-sans font-[600] uppercase tracking-widest text-white hover:bg-white/5 transition-colors"
                  >
                    VIEW RELATED WORK
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
