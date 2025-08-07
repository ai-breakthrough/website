import React from "react";
import {
  Brain,
  MessageSquare,
  Eye,
  BarChart3,
  Cog,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import mainBackgroundImage from "../assets/main_background.jpg";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Implementation",
      description:
        "Predictive analytics, recommendation systems, and intelligent automation tailored for Danish B2B markets.",
      features: [
        "Predictive Analytics",
        "Recommendation Systems",
        "Fraud Detection",
        "Customer Behavior Analysis",
      ],
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description:
        "Advanced language solutions supporting Danish, English, and Ukrainian for global business communication.",
      features: [
        "Intelligent Chatbots",
        "Document Analysis",
        "Sentiment Analysis",
        "Multi-language Support",
      ],
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description:
        "Visual intelligence systems for quality control, inventory management, and automated inspection.",
      features: [
        "Quality Control",
        "Inventory Management",
        "Security Enhancement",
        "Medical Image Analysis",
      ],
    },
    {
      icon: BarChart3,
      title: "AI Strategy Consulting",
      description:
        "Comprehensive AI transformation roadmaps designed specifically for Danish business culture and regulations.",
      features: [
        "AI Readiness Assessment",
        "Implementation Roadmaps",
        "ROI Analysis",
        "Change Management",
      ],
    },
    {
      icon: Cog,
      title: "Custom AI Development",
      description:
        "Bespoke AI solutions built by our Danish-Ukrainian team to address your unique business challenges.",
      features: [
        "Custom Algorithms",
        "API Development",
        "System Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Analytics & Insights",
      description:
        "Transform your business data into actionable insights with advanced analytics and visualization.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Performance Metrics",
        "Predictive Modeling",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={mainBackgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-purple-900/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Comprehensive AI services designed for Danish businesses, delivered
            by our expert Danish-Ukrainian team with deep understanding of both
            Nordic business culture and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover-lift dark-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white font-inter">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 font-source-sans">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose CoreAI */}
        <div className="mt-20">
          <div className="dark-card rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-inter">
                Why Choose CoreAI.dk?
              </h3>
              <p className="text-lg text-gray-300 font-source-sans">
                Our unique Danish-Ukrainian partnership delivers exceptional
                value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🇩🇰</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Danish Market Expertise
                </h4>
                <p className="text-gray-400 text-sm">
                  Deep understanding of Danish business culture and regulations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">🇺🇦</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Ukrainian Technical Excellence
                </h4>
                <p className="text-gray-400 text-sm">
                  World-class technical talent and innovative solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Proven Track Record
                </h4>
                <p className="text-gray-400 text-sm">
                  50+ successful AI implementations across various industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  End-to-End Solutions
                </h4>
                <p className="text-gray-400 text-sm">
                  From strategy to implementation and ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
