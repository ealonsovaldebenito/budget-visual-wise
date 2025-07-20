import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Transacciones from "./pages/Transacciones";
import Ahorro from "./pages/Ahorro";
import Proyecciones from "./pages/Proyecciones";
import Recurrentes from "./pages/Recurrentes";
import Configuracion from "./pages/Configuracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-12 flex items-center border-b bg-card">
                <SidebarTrigger className="ml-4" />
                <div className="ml-4">
                  <h2 className="font-semibold text-foreground">Finanzas Personales</h2>
                </div>
              </header>
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/transacciones" element={<Transacciones />} />
                  <Route path="/ahorro" element={<Ahorro />} />
                  <Route path="/proyecciones" element={<Proyecciones />} />
                  <Route path="/recurrentes" element={<Recurrentes />} />
                  <Route path="/configuracion" element={<Configuracion />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
