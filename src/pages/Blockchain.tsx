import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, LineChart, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Blockchain = () => {
  const navigate = useNavigate();

  const metrics = [
    {
      title: "Transactions",
      description: "Verified blockchain entries",
      icon: <Link className="w-6 h-6 text-blue-500" />,
      value: "1,234",
      change: "+12%"
    },
    {
      title: "Smart Contracts",
      description: "Active agreements",
      icon: <Shield className="w-6 h-6 text-green-500" />,
      value: "45",
      change: "+3"
    },
    {
      title: "Network Health",
      description: "System performance",
      icon: <Activity className="w-6 h-6 text-purple-500" />,
      value: "99.9%",
      change: "Optimal"
    },
    {
      title: "Impact Score",
      description: "Environmental benefit",
      icon: <LineChart className="w-6 h-6 text-emerald-500" />,
      value: "85",
      change: "+5%"
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
            <h1 className="text-4xl font-bold">Blockchain Transparency</h1>
            <p className="text-muted-foreground mt-2">Track and verify transactions with blockchain technology</p>
          </div>
          <Button onClick={() => navigate("/dashboard")}>View All Transactions</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
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
                    <span className="text-sm font-medium text-green-600">{metric.change}</span>
                  </div>
                  <CardTitle className="mt-4">{metric.title}</CardTitle>
                  <CardDescription>
                    {metric.description}
                    <p className="text-2xl font-bold mt-2">{metric.value}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest verified blockchain entries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Link className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Carbon Offset Purchase</p>
                    <p className="text-sm text-blue-600">0x1a2b...3c4d</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Smart Contract Execution</p>
                    <p className="text-sm text-green-600">0x5e6f...7g8h</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">1 hour ago</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Network Status</CardTitle>
              <CardDescription>Real-time blockchain metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="font-medium">Block Height</p>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-blue-500 rounded-full animate-pulse" />
                  </div>
                  <span className="text-sm font-medium">15,789,234</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Network Nodes</p>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm font-medium">1,234</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Blockchain;