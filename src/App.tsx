import { useEffect } from "react";
import { Toaster } from "../src/components/ui/toaster";
import { Toaster as Sonner } from "../src/components/ui/sonner";
import { TooltipProvider } from "../src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "../src/pages/Index";
import Templates from "../src/pages/Templates";
import Components from "../src/pages/Components";

const queryClient = new QueryClient();

// Title updater component
const TitleUpdater = () => {
  const location = useLocation();
  
  useEffect(() => {
    const pathname = location.pathname;
    
    if (pathname === "/") {
      document.title = "JS Playground - Build, Test, and Share JavaScript Code";
    } else if (pathname === "/components") {
      document.title = "JS Playground - UI Components";
    } else if (pathname === "/templates") {
      document.title = "JS Playground - Templates";
    } else {
      document.title = `JS Playground - ${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)}`;
    }
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/js">
        <TitleUpdater />
        <Routes>
          {/* Base routes */}
          <Route path="/" element={<Index />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/components" element={<Components />} />
          
          {/* Remove these redirect routes as they're causing the issue */}
          {/* <Route path="/js" element={<Navigate to="/" replace />} />
          <Route path="/js/*" element={<Navigate to="/" replace />} /> */}
          
          {/* Catch-all for 404s - create a NotFound component or redirect to home */}
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
