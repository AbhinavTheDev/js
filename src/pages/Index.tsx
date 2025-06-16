import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import CodePreview from "../components/CodePreview";
import FeatureCard from "../components/FeatureCard";
import { Share2, Zap, Download,} from "lucide-react";
import { Link } from "react-router-dom";

// Wrapper component to access theme context
const IndexContent = () => {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: Share2,
      title: "Seamless Sharing",
      description:
        "Share your projects instantly with teammates or the community using a single link, perfect for collaborative coding.",
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description:
        "Built for speed with optimized rendering and execution, handling complex code with minimal latency.",
    },
    {
      icon: Download,
      title: "Easy Download",
      description:
        "Export your projects in instantly to integrate seamlessly with your development workflow.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex flex-col space-y-4 lg:space-y-6 lg:w-1/2 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                JavaScript Development, Reimagined
              </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                A hub of html, css, js based components and projects for your framework-less projects.
                </p>
              <div className="flex flex-row gap-4 pt-4">
                <Link to="/js/templates">
                  <Button size="lg" className="font-medium">
                    Start Creating
                  </Button>
                </Link>
                <Link to="https://github.com/abhinavthedev" target="_blank">
                  <Button variant="outline" size="lg" className="font-medium">
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-md hidden sm:block mx-auto lg:max-w-none mt-8 lg:mt-0 animate-fade-in">
              <CodePreview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Powerful Developer Tools
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to streamline your JavaScript workflow in one
              intuitive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready-to-Use Templates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jump-start your projects with our collection of professionally
              designed templates
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="flex-1 max-w-md">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border/40">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Interactive Applications
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    From calculators to todo lists, build practical web tools
                    with our interactive templates.
                  </p>
                  <Link to="/js/templates">
                    <Button className="w-full">Explore Templates</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden border border-border/40">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">UI Components</h3>
                  <p className="text-muted-foreground mb-4">
                    Enhance your interfaces with our collection of customizable,
                    responsive UI components.
                  </p>
                  <Link to="/js/components">
                    <Button className="w-full">View Components</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-14 md:py-16">
        <div className="container px-4 md:px-6 py-2 border border-gray rounded-lg shadow-lg">
          <div className="text-center max-w-3xl mx-auto p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building Today
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join now to create amazing JavaScript projects with our powerful
              toolset
            </p>
            <Link to="/js/templates">
              <Button size="lg" className="font-medium">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

// Main Index component with ThemeProvider
const Index = () => {
  return <IndexContent />;
};

export default Index;
