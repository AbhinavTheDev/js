import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}>
      <Button 
        variant="secondary" 
        size="icon" 
        onClick={scrollToTop}
        aria-label="Back to top"
        className="rounded-full shadow-md"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default BackToTop;
