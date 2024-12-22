import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Healthcare from "./pages/Healthcare";
import Sustainability from "./pages/Sustainability";
import Discernment from "./pages/Discernment";
import Blockchain from "./pages/Blockchain";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/discernment" element={<Discernment />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investments" element={<Dashboard />} />
          <Route path="/research" element={<Dashboard />} />
          <Route path="/election" element={<Dashboard />} />
          <Route path="/health-dashboard" element={<Dashboard />} />
          <Route path="/smart-ui" element={<Dashboard />} />
          <Route path="/socioeconomic" element={<Dashboard />} />
          <Route path="/climate" element={<Dashboard />} />
          <Route path="/wildlife" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;