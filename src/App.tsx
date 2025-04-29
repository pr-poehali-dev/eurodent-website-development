
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Другие маршруты можно добавлять здесь */}
          <Route path="/services/diagnostic" element={<NotFound />} />
          <Route path="/services/therapy" element={<NotFound />} />
          <Route path="/services/surgery" element={<NotFound />} />
          <Route path="/services/orthopedics" element={<NotFound />} />
          <Route path="/doctors" element={<NotFound />} />
          <Route path="/prices" element={<NotFound />} />
          <Route path="/contacts" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/reviews" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
