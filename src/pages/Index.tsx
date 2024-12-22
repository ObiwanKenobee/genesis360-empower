import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Activity, 
  Leaf, 
  LineChart, 
  Microscope,
  Brain,
  Link,
  Vote,
  Home,
  Briefcase,
  HeartPulse,
  Search,
  Sparkles,
  DollarSign,
  TreePine,
  Dog  // Replaced Paw with Dog, which is available in lucide-react
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      title: "Home Dashboard",
      description: "Your personalized command center for all Genesis360 features",
      icon: <Home className="w-6 h-6" />,
      color: "bg-blue-50",
      route: "/home"
    },
    {
      title: "AI Discernment",
      description: "AI-powered ethical insights and recommendations",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-50",
      route: "/discernment"
    },
    {
      title: "Healthcare",
      description: "AI-powered health insights and recommendations",
      icon: <Activity className="w-6 h-6" />,
      color: "bg-rose-50",
      route: "/healthcare"
    },
    {
      title: "Sustainability",
      description: "Track and improve your environmental impact",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-emerald-50",
      route: "/sustainability"
    },
    {
      title: "Investments",
      description: "Purpose-driven impact investment opportunities",
      icon: <LineChart className="w-6 h-6" />,
      color: "bg-amber-50",
      route: "/investments"
    },
    {
      title: "Research",
      description: "Contribute to global medical research",
      icon: <Microscope className="w-6 h-6" />,
      color: "bg-violet-50",
      route: "/research"
    },
    {
      title: "Blockchain",
      description: "Transparent tracking of transactions and impact",
      icon: <Link className="w-6 h-6" />,
      color: "bg-cyan-50",
      route: "/blockchain"
    },
    {
      title: "Election Transparency",
      description: "Monitor and verify election data",
      icon: <Vote className="w-6 h-6" />,
      color: "bg-orange-50",
      route: "/election"
    },
    {
      title: "Health Dashboard",
      description: "Monitor your health metrics and progress",
      icon: <HeartPulse className="w-6 h-6" />,
      color: "bg-pink-50",
      route: "/health-dashboard"
    },
    {
      title: "Smart UI",
      description: "Adaptive interface powered by AI",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-indigo-50",
      route: "/smart-ui"
    },
    {
      title: "Socioeconomic Impact",
      description: "Track your social and economic impact",
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-50",
      route: "/socioeconomic"
    },
    {
      title: "Climate Action",
      description: "Take action against climate change",
      icon: <TreePine className="w-6 h-6" />,
      color: "bg-teal-50",
      route: "/climate"
    },
    {
      title: "Wildlife Guardian",
      description: "Protect and monitor wildlife",
      icon: <Dog className="w-6 h-6" />, // Changed from Paw to Dog
      color: "bg-yellow-50",
      route: "/wildlife"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4" variant="secondary">Welcome to Genesis360</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
            Empowering Global Change
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Make informed decisions for healthcare, sustainability, and social impact with AI-powered insights.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeIn}>
              <Card 
                className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => navigate(feature.route)}
              >
                <div className="p-6">
                  <div className={`${feature.color} p-3 rounded-lg inline-block mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;