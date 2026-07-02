import { motion, Variants, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowDownRight, ArrowRightCircle, ArrowLeft } from "lucide-react";
import { services, portfolio, clients, testimonials } from "@/lib/data";
import { useEffect, useRef, useState, useCallback } from "react";

// CountUp Component for Stats
function CountUp({ to, duration = 1.5 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

// ─── TypeScript-safe variant definitions ────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const sectionVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

// ─── Portfolio Cinematic Slider ──────────────────────────────────────────────
type PortfolioItem = { id: number; title: string; category: string; image: string };

function PortfolioSlider({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const total = items.length;
  const INTERVAL = 4000;

  const go = useCallback(
    (next: number) => {
      setDirection(next > active ? 1 : -1);
      setActive((next + total) % total);
      setProgress(0);
    },
    [active, total]
  );

  // Auto-play with progress bar
  useEffect(() => {
    if (paused) return;
    const step = 50;
    const inc = (step / INTERVAL) * 100;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p + inc >= 100) {
          go((active + 1) % total);
          return 0;
        }
        return p + inc;
      });
    }, step);
    return () => clearInterval(id);
  }, [paused, active, go, total]);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.5, ease: EASE } }),
  };

  const cur = items[active];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main slide area */}
      <div className="relative w-full h-[480px] md:h-[600px] lg:h-[680px] bg-[#0d0d0d] overflow-hidden">
        {/* Animated image */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={cur.image}
              alt={cur.title}
              className="w-full h-full object-cover opacity-70"
            />
            {/* Dark gradient overlay — left side for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide content — left side */}
        <div className="absolute inset-0 z-10 flex items-end pb-14 px-8 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25, ease: EASE } }}
              exit={{ y: -20, opacity: 0, transition: { duration: 0.3, ease: EASE } }}
              className="max-w-lg"
            >
              {/* Index */}
              <div className="text-[80px] font-serif font-[800] text-white/5 leading-none select-none mb-2">
                {String(active + 1).padStart(2, "0")}
              </div>
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[1px] bg-[#D4AF37]" />
                <span className="text-[11px] font-sans font-[700] uppercase tracking-[0.25em] text-[#D4AF37]">
                  {cur.category}
                </span>
              </div>
              {/* Title */}
              <h3 className="text-[28px] md:text-[38px] font-serif font-[800] text-white leading-tight mb-6">
                {cur.title}
              </h3>
              {/* CTA */}
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 text-[12px] font-sans font-[600] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                View Project
                <span className="w-8 h-[1px] bg-white/30 group-hover:bg-white group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: counter + nav arrows */}
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-6">
          <span className="text-[12px] font-sans font-[600] tracking-[0.15em] text-white/50">
            {String(active + 1).padStart(2, "0")}
            <span className="text-white/20"> / </span>
            {String(total).padStart(2, "0")}
          </span>
          <div className="w-[1px] h-16 bg-white/10" />
          <button
            onClick={() => go(active - 1)}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => go(active + 1)}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300"
          >
            <ArrowRightCircle size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Gold progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-10">
          <motion.div
            className="h-full bg-[#D4AF37]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0 }}
          />
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-3 mt-4 px-8 md:px-16 pb-2 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <button
            key={item.id}
            onClick={() => go(i)}
            className={`
              relative flex-shrink-0 w-[110px] h-[64px] overflow-hidden rounded-sm
              transition-all duration-300 border
              ${i === active
                ? "border-[#D4AF37] opacity-100 scale-[1.04]"
                : "border-white/10 opacity-40 hover:opacity-70"
              }
            `}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            {i === active && (
              <div className="absolute inset-0 bg-[#D4AF37]/10" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-[#111111]"
    >
      {/* Hero Section */}
      <section className="relative min-h-[65vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="DMH Hero Background"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent top-[40%]" />
        </div>

        {/* Animated Gradient Orb */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none z-0"
        />

        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={itemVariants}
              style={{ fontSize: "clamp(60px, 9vw, 120px)" }}
              className="font-serif font-[800] leading-[0.9] tracking-tighter text-white"
            >
              Building Brands
              <br />
              That{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">People</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[6px] text-primary"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              <span className="italic text-[#D4AF37]">Remember</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[17px] text-white/60 max-w-2xl mx-auto font-sans font-[400] leading-relaxed mt-8 mb-12"
            >
              We are a premium media, branding, and influencer marketing
              powerhouse trusted by top-tier brands to dominate the digital
              landscape.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link
                href="/contact"
                className="btn-gold-shimmer rounded-full px-10 py-4 inline-flex items-center justify-center group"
                data-testid="btn-hero-consult"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full px-10 py-4 border border-white/20 text-white font-sans font-[600] text-[13px] uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-colors"
                data-testid="btn-hero-work"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0f0f0f] border-t border-primary/20 relative z-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: "Brands Elevated", value: 50, suffix: "+" },
              { label: "Premium Services", value: 10, suffix: "+" },
              { label: "Years of Excellence", value: 6, suffix: "" },
              { label: "Audience Reach", value: 1, suffix: "M+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start lg:pl-12"
              >
                <div className="w-8 h-[1px] bg-primary mb-6" />
                <div className="text-[52px] font-serif font-[800] text-primary leading-none mb-3">
                  <CountUp to={stat.value} />
                  <span className="text-[40px] align-top">{stat.suffix}</span>
                </div>
                <div className="text-[11px] font-sans font-[500] tracking-[0.2em] uppercase text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="section-eyebrow mb-6">02 / Services</div>
            <h2 className="text-4xl md:text-[56px] font-serif font-[800] text-white tracking-tight">
              What We Do Best
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border border-white/5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} href={`/services/${service.slug}`}>
                  <motion.div
                    variants={itemVariants}
                    className="group relative h-full bg-[#161616] p-8 border border-white/5 hover:bg-[#1c1c1c] transition-colors duration-500 overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 16px)",
                    }}
                  >
                    {/* Left Border Anim */}
                    <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[3px] bg-primary transition-all duration-300" />

                    <div className="absolute top-4 right-4 text-[48px] font-serif font-[800] text-white/5 pointer-events-none select-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <Icon
                      className="text-primary w-[28px] h-[28px] mb-8"
                      strokeWidth={1.5}
                    />

                    <h3 className="text-[18px] font-serif font-[700] text-white mb-4 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[13px] font-sans text-white/50 leading-relaxed mb-12">
                      {service.shortDesc}
                    </p>

                    <div className="absolute bottom-8 left-8 flex items-center text-[11px] font-sans font-[600] uppercase tracking-widest text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore <div className="w-4 h-[1px] bg-primary ml-3" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row relative">
            {/* Text Side (Left 45%) */}
            <div className="lg:w-[45%] lg:pr-20 py-10 relative z-20">
              <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="section-eyebrow mb-8">03 / Studio</div>
                <h2 className="text-4xl md:text-[52px] font-serif font-[800] text-white mb-8 leading-[1.1]">
                  The Agency for
                  <br />
                  <span className="text-primary italic font-[600]">
                    Ambitious Brands
                  </span>
                </h2>
                <p className="text-[16px] font-sans text-white/60 mb-10 leading-relaxed max-w-md">
                  Darshan Media House isn't just another agency. We are your
                  strategic growth partners. We blend cinematic production
                  quality with data-driven performance marketing to create
                  campaigns that don't just look beautiful—they convert.
                </p>
                <ul className="space-y-5 mb-12">
                  {[
                    "Elite in-house production team",
                    "Data-first growth strategies",
                    "Exclusive influencer network",
                    "Uncompromising quality standards",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-[14px] font-sans font-[500] text-white/80"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-4 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="group inline-flex items-center text-[12px] font-sans font-[600] uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
                >
                  Discover Our Story
                  <div className="ml-4 w-8 h-[1px] bg-white/30 group-hover:bg-primary transition-colors" />
                </Link>
              </motion.div>
            </div>

            {/* Image Side (Right 55%) */}
            <div className="lg:absolute lg:right-0 lg:top-[-40px] lg:bottom-[-40px] lg:w-[55%] mt-12 lg:mt-0 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE }}
                className="w-full h-full relative group"
              >
                <img
                  src="/about-teaser.png"
                  alt="DMH Workspace"
                  className="w-full h-[500px] lg:h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Gold Corners */}
                <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Bento Style */}
      <section className="py-32 bg-[#111111]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="section-eyebrow mb-6">04 / Selected Works</div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-[56px] font-serif font-[800] text-white tracking-tight leading-[1.05]">
                Work That
                <br />
                <span className="text-primary italic font-[600]">Speaks</span>
              </h2>
              <Link
                href="/portfolio"
                className="group inline-flex items-center text-[12px] font-sans font-[600] uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors self-start md:self-auto pb-2"
              >
                View All Projects
                <ArrowDownRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          <PortfolioSlider items={portfolio.slice(0, 6)} />
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 mb-16 text-center">
          <div className="section-eyebrow justify-center mb-6">05 / Trusted By</div>
          <h2 className="text-3xl md:text-[40px] font-serif font-[800] text-white">Brands That Trust Us</h2>
        </div>

        <div className="relative flex flex-col gap-8 group">
          {/* Row 1 - Left */}
          <div className="flex w-max animate-marquee gap-8 group-hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="px-10 py-6 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-sm flex items-center justify-center whitespace-nowrap min-w-[200px]">
                <span className="font-serif text-xl text-white/50 tracking-wider mix-blend-plus-lighter">{client}</span>
              </div>
            ))}
          </div>
          {/* Row 2 - Right */}
          <div className="flex w-max animate-marquee-reverse gap-8 group-hover:[animation-play-state:paused] ml-[-200px]">
            {[...clients, ...clients].reverse().map((client, i) => (
              <div key={i} className="px-10 py-6 bg-white/[0.02] border border-white/5 rounded-full backdrop-blur-sm flex items-center justify-center whitespace-nowrap min-w-[200px]">
                <span className="font-sans font-[700] uppercase text-lg text-white/40 tracking-[0.2em]">{client}</span>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-marquee { animation: marquee 40s linear infinite; }
          .animate-marquee-reverse { animation: marquee-reverse 40s linear infinite; }
        `}} />
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="section-eyebrow mb-16 justify-center">
            06 / Client Voices
          </div>

          <div className="max-w-4xl mx-auto text-center relative">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[200px] font-serif text-primary/10 leading-none select-none">
              "
            </div>

            <p className="text-[20px] md:text-[28px] font-sans font-[300] italic text-white leading-relaxed mb-12 relative z-10">
              "{testimonials[0].quote}"
            </p>

            <div className="flex flex-col items-center">
              <h4 className="text-[14px] font-serif font-[700] text-white mb-2">
                {testimonials[0].author}
              </h4>
              <p className="text-[12px] font-sans font-[600] uppercase tracking-[0.2em] text-primary">
                {testimonials[0].company}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-16">
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-colors">
                &larr;
              </button>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-colors">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative bg-[#0a0a0a] overflow-hidden">
        {/* Diagonal striped pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 11px)",
          }}
        />

        {/* Blurred circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
        <div className="absolute top-40 right-1/4 w-24 h-24 bg-primary/15 rounded-full blur-[40px]" />

        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-[48px] md:text-[72px] font-serif font-[800] text-white mb-16 leading-[1.1]">
            Ready to{" "}
            <span className="italic text-primary font-[600]">Dominate?</span>
          </h2>

          <Link
            href="/contact"
            className="btn-gold-shimmer rounded-none h-20 px-20 inline-flex items-center justify-center text-[14px] font-sans tracking-[0.2em] transition-transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          >
            START PROJECT
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
