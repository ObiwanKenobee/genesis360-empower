import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/discernment" element={<Dashboard />} />
          <Route path="/healthcare" element={<Dashboard />} />
          <Route path="/sustainability" element={<Dashboard />} />
          <Route path="/investments" element={<Dashboard />} />
          <Route path="/research" element={<Dashboard />} />
          <Route path="/blockchain" element={<Dashboard />} />
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