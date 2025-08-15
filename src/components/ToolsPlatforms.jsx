import React from "react";
import { Code, Brain, Shield, Cloud } from "lucide-react";

const ToolsPlatforms = () => {
  const categories = [
    {
      icon: Code,
      title: "Agent Frameworks",
      items: [
        "LangChain",
        "DSPy",
        "CrewAI",
        "RAGatouille",
        "Reflexion/AutoGPT",
      ],
    },
    {
      icon: Brain,
      title: "LLMs",
      items: [
        "Claude 3",
        "GPT-4o",
        "Amazon Titan",
        "Google Gemini/PaLM 2",
        "LLaMA/Mistral",
      ],
    },
    {
      icon: Shield,
      title: "Security, Monitoring & Governance",
      items: [
        "Well-Architected",
        "Guardrails",
        "RBAC",
        "Data masking for LLMs",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure (AWS-native)",
      items: [
        "Compute/orchestration",
        "Data storage & access",
        "ETL",
        "Semantic indexing & vector search",
        "Containerization",
        "CI/CD setup",
      ],
    },
  ];

  return (
    <section id="tools-platforms" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Core Tools & <span className="coreai-text-gradient">Platforms</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Enterprise-grade technology stack powering our AI solutions
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-8 shadow-sm border border-gray-700/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-inter">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 font-medium font-source-sans">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 rounded-xl p-8 shadow-sm border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-inter">
              Why This Stack?
            </h3>
            <p className="text-gray-300 font-source-sans leading-relaxed">
              We've carefully selected proven, enterprise-ready technologies
              that ensure scalability, security, and performance. Our AWS-native
              approach provides enterprise-grade reliability while our choice of
              AI frameworks ensures cutting-edge capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsPlatforms;
