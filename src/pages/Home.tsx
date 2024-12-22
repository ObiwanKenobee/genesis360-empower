import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Activity, Leaf, Brain, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Health Check",
      description: "View your health metrics and recommendations",
      icon: <Activity className="w-6 h-6" />,
      route: "/healthcare"
    },
    {
      title: "Sustainability Score",
      description: "Check your environmental impact",
      icon: <Leaf className="w-6 h-6" />,
      route: "/sustainability"
    },
    {
      title: "AI Insights",
      description: "Get personalized ethical recommendations",
      icon: <Brain className="w-6 h-6" />,
      route: "/discernment"
    },
    {
      title: "Investment Overview",
      description: "Track your impact investments",
      icon: <LineChart className="w-6 h-6" />,
      route: "/investments"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Your impact dashboard awaits</p>
          </div>
          <Button onClick={() => navigate("/health-dashboard")}>View Health Stats</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(action.route)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {action.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and their impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Leaf className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Reduced Carbon Footprint</p>
                      <p className="text-sm text-muted-foreground">-2.5kg CO2 today</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">2h ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Activity className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Health Goal Achieved</p>
                      <p className="text-sm text-muted-foreground">Daily steps target met</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">5h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Impact Overview</CardTitle>
              <CardDescription>Your contribution to global change</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">Sustainability Score</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-medium">Health Index</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;