import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Phone, LogIn } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
    } border-b border-border`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-wellness-success rounded-full hover:scale-110 transition-transform duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">MindWell</h1>
              <p className="text-xs text-muted-foreground">Student Mental Health</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-wellness transition-colors hover:scale-105 transform duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-wellness transition-colors hover:scale-105 transform duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-wellness transition-colors hover:scale-105 transform duration-200"
            >
              Stories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-wellness transition-colors hover:scale-105 transform duration-200"
            >
              Contact
            </button>
            <Link to="/crisis-intervention">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transform transition-all duration-200 animate-pulse">
                <Phone className="mr-2 h-4 w-4" />
                SOS
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="text-sm">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 h-8 w-8 hover:bg-muted/50 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-foreground hover:text-wellness transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-foreground hover:text-wellness transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left text-foreground hover:text-wellness transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-foreground hover:text-wellness transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
              >
                Contact
              </button>
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                  <LogIn className="h-3 w-3 mr-2" />
                  Login
                </Button>
                <Link to="/crisis-intervention" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white animate-pulse text-sm">
                    <Phone className="mr-2 h-3 w-3" />
                    SOS Emergency
                  </Button>
                </Link>
                <Button size="sm" className="w-full bg-wellness hover:bg-wellness/90 text-sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;