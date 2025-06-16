import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/js/" className="flex items-center">
          <span className="font-bold text-lg">JSPlay</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/js/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/js/templates" className="text-sm font-medium hover:text-primary transition-colors">Templates</Link>
          <Link to="/js/components" className="text-sm font-medium hover:text-primary transition-colors">Components</Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="flex flex-col p-4 bg-background/95 backdrop-blur-md border-t md:hidden animate-fade-in">
          <Link 
            to="/js/" 
            className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/js/templates" 
            className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Templates
          </Link>
          <Link 
            to="/js/components" 
            className="px-4 py-3 text-sm font-medium hover:bg-accent rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Components
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
