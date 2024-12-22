import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, TreePine, Droplet, Wind } from "lucide-react";
import { motion } from "framer-motion";

const Sustainability = () => {
  const metrics = [
    {
      title: "Carbon Footprint",
      value: "2.5",
      unit: "tons CO2/year",
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      change: -15,
      description: "15% reduction from last month"
    },
    {
      title: "Trees Planted",
      value: "12",
      unit: "trees",
      icon: <TreePine className="w-6 h-6 text-emerald-500" />,
      change: 2,
      description: "2 new trees this month"
    },
    {
      title: "Water Saved",
      value: "1,250",
      unit: "liters",
      icon: <Droplet className="w-6 h-6 text-blue-500" />,
      change: 8,
      description: "8% improvement in water usage"
    },
    {
      title: "Clean Energy",
      value: "75",
      unit: "%",
      icon: <Wind className="w-6 h-6 text-cyan-500" />,
      change: 5,
      description: "75% energy from renewable sources"
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
            <h1 className="text-4xl font-bold">Sustainability Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track and improve your environmental impact</p>
          </div>
          <Button>Download Report</Button>
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
                    <span className={`text-sm font-medium ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change >= 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                  <CardTitle className="mt-4">{metric.title}</CardTitle>
                  <CardDescription>
                    <span className="text-2xl font-bold">{metric.value}</span>
                    <span className="text-sm ml-1">{metric.unit}</span>
                    <p className="text-sm mt-2">{metric.description}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Actions</CardTitle>
              <CardDescription>Recent activities and their impact</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Used Public Transport</p>
                    <p className="text-sm text-green-600">Saved 2.5kg CO2</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Today</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Droplet className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Water Conservation</p>
                    <p className="text-sm text-blue-600">Saved 50 liters</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Challenges</CardTitle>
              <CardDescription>Join community initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Zero Waste Week</h4>
                  <Button variant="outline" size="sm">Join</Button>
                </div>
                <p className="text-sm text-muted-foreground">Reduce your waste production to zero for one week</p>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <TreePine className="w-4 h-4 mr-2" />
                  <span>Starts in 3 days • 245 participants</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Energy Saving Sprint</h4>
                  <Button variant="outline" size="sm">Join</Button>
                </div>
                <p className="text-sm text-muted-foreground">Reduce your energy consumption by 20% in 30 days</p>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <Wind className="w-4 h-4 mr-2" />
                  <span>Starts in 1 week • 178 participants</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default Sustainability;