import React from "react";
import { Layers, Users, Shield, Award, DollarSign } from "lucide-react";

const Approach = () => {
  const differentiators = [
    {
      icon: Layers,
      text: "Full-stack GenAI delivery — from vector DB to frontend",
    },
    {
      icon: Users,
      text: "Human–AI collaboration by design",
    },
    {
      icon: Shield,
      text: "AWS Well-Architected Framework alignment",
    },
    {
      icon: Award,
      text: "Certified specialists",
    },
    {
      icon: DollarSign,
      text: "Credits & co-funding via AWS Partner Network",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Human–AI collaboration that delivers measurable{" "}
            <span className="coreai-text-gradient">business outcomes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Our approach combines cutting-edge AI technology with human
            expertise to create sustainable, scalable solutions
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((differentiator, index) => {
            const IconComponent = differentiator.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium font-source-sans leading-relaxed">
                  {differentiator.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Enterprise-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="text-sm">AWS Partner Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Certified specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
