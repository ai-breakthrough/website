import React from "react";
import { Brain, Workflow, TrendingUp, Users, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Services = () => {
  const services = [
    {
      id: "agentic-ai-optimization",
      icon: Brain,
      title: "Agentic AI Optimization Strategy & Implementation",
      description:
        "Comprehensive strategy and implementation of AI agents that transform your business operations.",
      steps: [
        "Business Process Assessment",
        "Prototype (Design & Architecture)",
        "Agent Development, Testing & Deployment (MVC)",
        "Scale Planning & Rollout",
      ],
    },
    {
      id: "workflow-automation",
      icon: Workflow,
      title: "Workflow Automation Solutions",
      description:
        "Intelligent automation of complex workflows across your organization.",
      steps: [
        "Workflow Analysis & Mapping",
        "Blueprint Design",
        "Agent Development, Testing & Deployment (MVC)",
        "Scale Planning & Rollout",
      ],
    },
    {
      id: "predictive-analytics",
      icon: TrendingUp,
      title: "Predictive Analytics & AI-Driven Forecasting",
      description:
        "Advanced analytics and forecasting capabilities powered by AI.",
      steps: [
        "Data Assessment & Model Design",
        "Predictive Hypothesis Development",
        "Forecasting Engine Development, Testing & Integration (MVC)",
        "Scale Planning & Rollout",
      ],
    },
    {
      id: "ai-enablement",
      icon: Users,
      title: "AI Enablement & Training",
      description:
        "Comprehensive training and change management for AI adoption.",
      steps: [
        "Skills Assessment & Gap Analysis",
        "Skills report & training plan",
        "Training",
        "Change Management & Adoption",
        "Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            End-to-end AI solutions designed to transform your business
            operations through intelligent automation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="hover-lift dark-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 orange-gradient rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-white font-inter mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 font-source-sans">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Implementation Process */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-inter">
            Our Implementation Process
          </h3>
          <p className="text-lg text-gray-300 font-source-sans">
            A proven methodology that ensures successful AI deployment
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Assessment",
                description:
                  "Business process analysis and AI readiness evaluation",
              },
              {
                number: "02",
                title: "Design",
                description: "Architecture design and prototype development",
              },
              {
                number: "03",
                title: "Development",
                description: "AI agent development, testing, and deployment",
              },
              {
                number: "04",
                title: "Scale",
                description: "Rollout planning and scaling strategies",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 orange-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 font-inter">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm font-source-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 font-inter">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-gray-300 mb-6 font-source-sans">
              Let's discuss how AI agents can automate your workflows and drive
              business outcomes
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#booking-cta")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="orange-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg flex items-center space-x-2 mx-auto"
            >
              <span>Book Your AI Mapping Session</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
