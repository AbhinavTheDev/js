import { useState } from "react";
import Navbar from "../components/Navbar";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calculator, Clock, Code, Github } from "lucide-react";
import { templates } from "../utils/templateProjects";
import TemplatePreview from "../components/templates/TemplatePreview";

const TemplatesContent = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "calculator":
        return Calculator;
      case "counter":
        return Clock;
      case "todo":
        return Code;
      case "basic":
        return Github;
      default:
        return Code;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Project Templates
              </h1>
              <p className="text-muted-foreground mb-6">
                Explore interactive examples built with HTML, CSS, and JavaScript.
              </p>
            </div>

            {!selectedProject ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr justify-items-center">
                {templates.map((project) => {
                  const IconComponent = getProjectIcon(project.id);
                  return (
                    <Card 
                      key={project.id} 
                      className="card-hover cursor-pointer max-w-md h-full flex flex-col" 
                      onClick={() => setSelectedProject(project)}
                    >
                      <CardHeader className="pb-2 flex-shrink-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{project.title}</CardTitle>
                            <CardDescription className="text-xs text-muted-foreground mt-1">
                              {project.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col flex-grow justify-between pt-2">
                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground">Features:</p>
                          <ul className="text-xs space-y-1">
                            {project.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-1">
                                <div className="w-1 h-1 bg-primary rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button className="w-full mt-4" variant="default" size="sm">
                          View Project
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <TemplatePreview 
                project={selectedProject} 
                onBack={() => setSelectedProject(null)} 
              />
            )}
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

const Templates = () => {
  return <TemplatesContent />;
};

export default Templates;
