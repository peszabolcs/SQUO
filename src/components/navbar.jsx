import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/squo_hatter_nelkul-cLohoMhQgJMCKzOIUnvwzPHI9ai7Nz.png"
              alt="SQUO Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-slate-900">SQUO</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Főoldal
            </a>
            <a
              href="/product"
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Termék
            </a>
            <a
              href="/use-cases"
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Alkalmazási területek
            </a>
            <a
              href="/about"
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Rólunk
            </a>
            <a
              href="/contact"
              className="text-slate-700 hover:text-primary transition-colors"
            >
              Kapcsolat
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Főoldal
              </a>
              <a
                href="/product"
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Termék
              </a>
              <a
                href="/use-cases"
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Alkalmazási területek
              </a>
              <a
                href="/about"
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rólunk
              </a>
              <a
                href="/contact"
                className="text-slate-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kapcsolat
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
