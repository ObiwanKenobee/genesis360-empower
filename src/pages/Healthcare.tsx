import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Brain, Pill } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Healthcare = () => {
  const navigate = useNavigate();

  const healthMetrics = [
    {
      title: "Physical Activity",
      value: "7,500",
      unit: "steps",
      icon: <Activity className="w-6 h-6 text-blue-500" />,
      progress: 75
    },
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      progress: 90
    },
    {
      title: "Mental Wellness",
      value: "Good",
      unit: "",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      progress: 85
    },
    {
      title: "Medication",
      value: "2/2",
      unit: "taken",
      icon: <Pill className="w-6 h-6 text-green-500" />,
      progress: 100
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
            <h1 className="text-4xl font-bold">Healthcare Dashboard</h1>
            <p className="text-muted-foreground mt-2">Monitor and improve your health metrics</p>
          </div>
          <Button onClick={() => navigate("/health-dashboard")}>Detailed Analysis</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {metric.icon}
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${metric.progress}%` }}
                      />
                    </div>
                  </div>
                  <CardTitle className="mt-4">{metric.title}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">{metric.value}</span>
                    {metric.unit && <span className="text-sm ml-1">{metric.unit}</span>}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Health Recommendations</CardTitle>
              <CardDescription>AI-powered suggestions for your wellbeing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Increase Daily Steps</p>
                  <p className="text-sm text-muted-foreground">Try to reach 10,000 steps today</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Brain className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Meditation Session</p>
                  <p className="text-sm text-muted-foreground">Schedule a 10-minute meditation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Participation</CardTitle>
              <CardDescription>Your contribution to medical research</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-medium">Data Sharing Status</p>
                <Button variant="outline" size="sm">
                  Manage Settings
                </Button>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  Your anonymized health data is helping researchers understand patterns in cardiovascular health
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Healthcare;