import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col group" data-testid="link-home-logo">
          <span className="font-serif text-3xl font-extrabold tracking-tighter text-white group-hover:text-primary transition-colors">
            DMH
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium hidden sm:block">
            Darshan Media House
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1 lg:space-x-2">
              <NavigationMenuItem>
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-sm font-medium hover:text-primary transition-colors px-3 py-2 data-[state=open]:text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card border-border">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-primary focus:bg-accent/10 focus:text-primary"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                            {service.shortDesc}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2">
                  Portfolio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/clients" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2">
                  Clients
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors px-3 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold shadow hover:bg-primary/90 transition-colors uppercase tracking-wide"
            data-testid="button-get-quote"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="text-lg font-medium p-2 border-b border-border/50">Home</Link>
          <Link href="/about" className="text-lg font-medium p-2 border-b border-border/50">About</Link>
          <div className="flex flex-col space-y-2 p-2 border-b border-border/50">
            <span className="text-lg font-medium text-muted-foreground mb-2">Services</span>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-base pl-4 border-l border-border hover:text-primary hover:border-primary transition-colors py-1">
                {service.title}
              </Link>
            ))}
          </div>
          <Link href="/portfolio" className="text-lg font-medium p-2 border-b border-border/50">Portfolio</Link>
          <Link href="/clients" className="text-lg font-medium p-2 border-b border-border/50">Clients</Link>
          <Link href="/blog" className="text-lg font-medium p-2 border-b border-border/50">Blog</Link>
          <Link href="/contact" className="text-lg font-medium p-2 text-primary">Contact</Link>
        </div>
      )}
    </header>
  );
}
