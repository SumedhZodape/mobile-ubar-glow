import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import VividhksetraDashboard from "./pages/VividhksetraDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children, allowedUserType }: { children: React.ReactNode, allowedUserType: string }) => {
  const userType = localStorage.getItem('userType');
  
  if (!userType) {
    return <Navigate to="/login" replace />;
  }
  
  if (userType !== allowedUserType) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/admin-dashboard" 
            element={
              <ProtectedRoute allowedUserType="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/user-dashboard" 
            element={
              <ProtectedRoute allowedUserType="user">
                <UserDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vividhksetra-dashboard" 
            element={
              <ProtectedRoute allowedUserType="vividhksetra">
                <VividhksetraDashboard />
              </ProtectedRoute>
            } 
          />
          {/* Keep existing routes for material requisition */}
          <Route path="/material-requisition" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
