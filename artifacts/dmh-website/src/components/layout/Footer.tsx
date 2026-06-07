import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full overflow-hidden pointer-events-none select-none">
        <span className="font-serif text-[48px] md:text-[8vw] font-[800] text-white/5 whitespace-nowrap leading-none mt-[-0.2em]">
          WE CREATE. YOU GROW.
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center group">
              <span className="font-serif text-[32px] font-[800] tracking-tighter text-white">DMH</span>
              <div className="mx-4 h-[24px] w-[1px] bg-primary opacity-50" />
              <span className="text-[8px] font-sans font-[600] uppercase tracking-[0.3em] text-muted-foreground">
                Darshan Media<br/>House
              </span>
            </Link>
            <p className="text-muted-foreground text-[13px] leading-relaxed font-sans max-w-xs">
              Delivering world-class media, branding, and marketing solutions for brands that refuse to blend in.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, id: "fb" },
                { icon: Instagram, id: "ig" },
                { icon: Linkedin, id: "li" },
                { icon: Youtube, id: "yt" }
              ].map((Social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  data-testid={`social-${Social.id}`}
                >
                  <Social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-[700] text-lg mb-8 text-white tracking-wide">Expertise</h4>
            <ul className="space-y-4">
              {['Influencer Marketing', 'Social Media Management', 'Video Production', 'Premium Branding', 'Digital Marketing'].map((service, i) => (
                <li key={i}>
                  <Link href={`/services/${service.toLowerCase().replace(/ /g, '-')}`} className="group inline-flex flex-col">
                    <span className="text-muted-foreground group-hover:text-white text-[13px] transition-colors pb-1">
                      {service}
                    </span>
                    <span className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-[700] text-lg mb-8 text-white tracking-wide">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About DMH', path: '/about' },
                { name: 'Our Portfolio', path: '/portfolio' },
                { name: 'Clients & Partners', path: '/clients' },
                { name: 'Insights & News', path: '/blog' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="group inline-flex flex-col">
                    <span className="text-muted-foreground group-hover:text-white text-[13px] transition-colors pb-1">
                      {link.name}
                    </span>
                    <span className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-[700] text-lg mb-8 text-white tracking-wide">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-[13px] text-muted-foreground font-sans">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Level 4, Creative Tower,<br/>Media City District</span>
              </li>
              <li className="flex items-center space-x-4 text-[13px] text-muted-foreground font-sans">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center space-x-4 text-[13px] text-muted-foreground font-sans">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@darshanmediahouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mb-8 w-full" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-sans tracking-wide text-muted-foreground/60 space-y-4 md:space-y-0">
          <p><span className="italic mr-2">Crafted with precision.</span> &copy; {new Date().getFullYear()} Darshan Media House. All rights reserved.</p>
          <div className="flex space-x-8 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
