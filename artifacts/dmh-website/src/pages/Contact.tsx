import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services } from "@/lib/data";

export default function Contact() {
  return (
    <div className="w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img src="/contact-bg.png" alt="Contact DMH" className="w-full h-full object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6"
          >
            Let's Create <span className="text-primary">Together</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-light"
          >
            Ready to dominate your industry? Drop us a line.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-xl">
              <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="John Doe" className="bg-[#111] border-border focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@company.com" className="bg-[#111] border-border focus-visible:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="bg-[#111] border-border focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Interested In</label>
                  <Select>
                    <SelectTrigger className="bg-[#111] border-border focus:ring-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(s => (
                        <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[150px] bg-[#111] border-border focus-visible:ring-primary" />
                </div>

                <Button size="lg" className="w-full text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                      <p className="text-muted-foreground">hello@darshanmediahouse.com</p>
                      <p className="text-muted-foreground">info@darshanmediahouse.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+91 7016885397</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">Modheshvari society,Deesa,Banaskantha,385535</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#161616] rounded-2xl border border-border">
  <h3 className="text-xl font-bold mb-4">Immediate Assistance?</h3>

  <p className="text-muted-foreground mb-6">
    Message us directly on WhatsApp for rapid response.
  </p>

  <Button
    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12"
    onClick={() =>
      window.open(
        "https://wa.me/917016885397?text=Hello%20Darshan%20Media%20House,%20I%20need%20assistance.",
        "_blank"
      )
    }
  >
    Chat on WhatsApp
  </Button>
</div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
