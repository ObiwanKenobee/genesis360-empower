import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Scale, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Discernment = () => {
  const navigate = useNavigate();

  const insights = [
    {
      title: "Ethical Analysis",
      description: "AI-powered analysis of ethical implications",
      icon: <Scale className="w-6 h-6 text-purple-500" />,
      value: "98%",
      detail: "Confidence Score"
    },
    {
      title: "Decision Support",
      description: "Personalized recommendations",
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      value: "12",
      detail: "Active Insights"
    },
    {
      title: "Privacy Score",
      description: "Data protection assessment",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      value: "A+",
      detail: "Security Rating"
    },
    {
      title: "Community Input",
      description: "Crowdsourced ethical perspectives",
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
      value: "2.4K",
      detail: "Contributors"
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
            <h1 className="text-4xl font-bold">AI Discernment Engine</h1>
            <p className="text-muted-foreground mt-2">Make informed decisions with AI-powered ethical insights</p>
          </div>
          <Button onClick={() => navigate("/dashboard")}>View History</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    {insight.icon}
                    <span className="text-2xl font-bold">{insight.value}</span>
                  </div>
                  <CardTitle className="mt-4">{insight.title}</CardTitle>
                  <CardDescription>
                    {insight.description}
                    <p className="text-sm mt-2 text-muted-foreground">{insight.detail}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Analyses</CardTitle>
              <CardDescription>Your latest ethical assessments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Scale className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium">Healthcare Decision Analysis</p>
                  <p className="text-sm text-muted-foreground">Completed 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <Brain className="w-4 h-4 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium">Sustainability Impact Review</p>
                  <p className="text-sm text-muted-foreground">Completed yesterday</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>AI-suggested next steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  Consider reviewing your healthcare data sharing preferences to optimize ethical alignment
                </p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-800">
                  Your sustainability choices show strong ethical consideration. Keep up the positive impact!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Discernment;