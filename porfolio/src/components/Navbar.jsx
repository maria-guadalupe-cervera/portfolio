import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto para deshabilitar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  return (
    <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 bg-background">
      Skip to main content
    </a>
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Guadalupe </span>{" "}
            Cervera
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300 h-[100dvh] w-screen", // Usar dvh para manejar la barra de direcciones móvil
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none translate-x-full"
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-2xl font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};