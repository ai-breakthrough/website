import React from "react";
import {
  Database,
  Search,
  CheckCircle,
  Link,
  Shield,
  BarChart3,
  FileText,
  TrendingUp,
} from "lucide-react";

const HowWeHelp = () => {
  const solutions = [
    {
      icon: Database,
      text: "Automate data ingestion/entry across systems",
    },
    {
      icon: Search,
      text: "Centralized AI-powered knowledge retrieval",
    },
    {
      icon: CheckCircle,
      text: "AI-driven approval workflows with instant routing",
    },
    {
      icon: Link,
      text: "Agents that bridge/sync multiple systems",
    },
    {
      icon: Shield,
      text: "Real-time security monitoring & predictive alerts",
    },
    {
      icon: BarChart3,
      text: "System analysis & AI-generated forecasting",
    },
    {
      icon: FileText,
      text: "Automated report generation & scheduling",
    },
    {
      icon: TrendingUp,
      text: "Scalable AI processes that grow without extra staff",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            How we <span className="coreai-text-gradient">help</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Comprehensive solutions that transform your business operations
            through intelligent automation
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-700/50"
              >
                <div className="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium font-source-sans leading-relaxed">
                  {solution.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
