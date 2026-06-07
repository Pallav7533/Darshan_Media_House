import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-3xl font-extrabold tracking-tighter text-white">
                DMH
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mt-1">
                Darshan Media House
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We Create. You Grow. Delivering world-class media, branding, and marketing solutions for brands that refuse to blend in.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-fb">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-ig">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-li">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-yt">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Expertise</h4>
            <ul className="space-y-3">
              <li><Link href="/services/influencer-marketing" className="text-muted-foreground hover:text-primary text-sm transition-colors">Influencer Marketing</Link></li>
              <li><Link href="/services/social-media-management" className="text-muted-foreground hover:text-primary text-sm transition-colors">Social Media Management</Link></li>
              <li><Link href="/services/video-production" className="text-muted-foreground hover:text-primary text-sm transition-colors">Video Production</Link></li>
              <li><Link href="/services/branding" className="text-muted-foreground hover:text-primary text-sm transition-colors">Premium Branding</Link></li>
              <li><Link href="/services/digital-marketing" className="text-muted-foreground hover:text-primary text-sm transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors mt-2 inline-block">View All Services →</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About DMH</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Portfolio</Link></li>
              <li><Link href="/clients" className="text-muted-foreground hover:text-primary text-sm transition-colors">Clients & Partners</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Insights & News</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Level 4, Creative Tower,<br/>Media City District</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@darshanmediahouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Darshan Media House. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
