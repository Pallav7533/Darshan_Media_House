import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { services } from "@/lib/data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/10 py-4 shadow-lg"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group" data-testid="link-home-logo">
          <span className="font-serif text-[36px] font-[800] tracking-tighter text-white transition-colors">
            DMH
          </span>
          <div className="mx-4 h-[36px] w-[1px] bg-primary opacity-50" />
          <span className="text-[9px] font-sans font-[600] uppercase tracking-[0.3em] text-muted-foreground hidden sm:block">
            Darshan Media House
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-8">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" }
              ].map(link => (
                <NavigationMenuItem key={link.path}>
                  <Link href={link.path} className="relative text-[13px] font-sans font-[500] tracking-[0.08em] uppercase hover:text-primary transition-colors py-2 group">
                    {link.name}
                    {location === link.path && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-primary" />
                    )}
         ``         </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-[13px] font-sans font-[500] tracking-[0.08em] uppercase hover:text-primary transition-colors py-2 data-[state=open]:text-primary px-0">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-6 p-6 md:w-[800px] md:grid-cols-2 bg-[#0f0f0f] border-border/50">
                    {services.map((service, idx) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex gap-4 p-2 no-underline outline-none transition-colors hover:bg-white/5"
                        >
                          <span className="text-primary font-serif font-bold text-sm mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <div className="text-[14px] font-serif font-medium leading-none text-white group-hover:text-primary transition-colors">
                              {service.title}
                            </div>
                            <p className="line-clamp-1 text-[12px] leading-snug text-muted-foreground mt-1.5 font-sans">
                              {service.shortDesc}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {[
                 { name: "Portfolio", path: "/portfolio" },
                 { name: "Clients", path: "/clients" },
                 { name: "Blog", path: "/blog" },
                 { name: "Influencer", path: "/influencer" }
               
              ].map(link => (
                <NavigationMenuItem key={link.path}>
                  <Link href={link.path} className="relative text-[13px] font-sans font-[500] tracking-[0.08em] uppercase hover:text-primary transition-colors py-2 group">
                    {link.name}
                    {location === link.path && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-primary" />
                    )}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-gold-shimmer rounded-full px-7 py-2.5 inline-flex items-center justify-center transition-transform hover:scale-105"
            data-testid="button-get-quote"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl p-6 flex flex-col space-y-6 max-h-[85vh] overflow-y-auto">
          {["Home", "About", "Portfolio", "Clients", "Blog", "Influencer", "Contact"].map((item) => (
            <Link 
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="text-[13px] font-sans font-[500] tracking-[0.08em] uppercase text-white hover:text-primary border-b border-white/10 pb-4"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pb-4">
            <span className="text-[11px] font-sans font-[600] tracking-[0.2em] uppercase text-primary mb-2">Services</span>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm font-serif pl-4 border-l border-white/10 hover:text-primary hover:border-primary transition-colors py-1">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
