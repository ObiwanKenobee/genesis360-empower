import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/")}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Back to Home
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your Genesis360 dashboard. This area will be expanded in future updates.
      </p>
    </div>
  );
};

export default Dashboard;