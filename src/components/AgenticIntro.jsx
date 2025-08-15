import React from "react";
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Database,
  Workflow,
} from "lucide-react";

const AgenticIntro = () => {
  const capabilities = [
    {
      icon: Brain,
      text: "Learns/adapts; makes real-time decisions to achieve goals",
    },
    {
      icon: Database,
      text: "Evaluates available information, consults knowledge bases",
    },
    {
      icon: Workflow,
      text: "Breaks down complex requests into logical steps",
    },
    {
      icon: Zap,
      text: "Orchestrates actions across multi-step workflows",
    },
    {
      icon: Shield,
      text: "Maintains security and compliance",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side - Text block */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
              What are{" "}
              <span className="coreai-text-gradient">Agentic AI systems</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-source-sans">
              Agentic AI systems act like digital coworkers embedded in
              operations — able to make decisions, automate repetitive tasks,
              and coordinate outcomes.
            </p>
          </div>

          {/* Right side - Capabilities list */}
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 orange-gradient rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white font-medium font-source-sans">
                      {capability.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stat callout */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold text-orange-600 font-inter">
                    AI Agents market: $10.1B (2024) → $470.1B (2030)
                  </div>
                  <div className="text-sm text-orange-600/70 font-source-sans">
                    Exponential growth opportunity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticIntro;
