import React from "react";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Database,
  Users,
  Workflow,
} from "lucide-react";
import { Button } from "./ui/button";
import denmarkImage from "../assets/NnJayPQKKHbk.jpg";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const element = document.querySelector("#booking-cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 coreai-gradient"></div>
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={denmarkImage}
          alt="Denmark landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight font-inter slide-in-up">
            Transforming Business Operations with
            <br />
            <span className="coreai-text-gradient">Agentic AI Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed font-source-sans slide-in-up">
            We deploy AI agents that automate workflows, augment teams, and
            orchestrate outcomes across your business.
          </p>

          {/* Pain-point chips */}
          <div className="mb-8 slide-in-up">
            <div className="inline-flex flex-wrap justify-center gap-3 mb-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-white/90 text-sm font-medium">
                  Manual workflows slow us down
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
                <Database className="w-4 h-4 text-orange-400" />
                <span className="text-white/90 text-sm font-medium">
                  Knowledge is buried across tools and teams
                </span>
              </div>
            </div>
            <div className="inline-flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-white/90 text-sm font-medium">
                  We store huge amounts of data but can't extract insights
                </span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
                <Workflow className="w-4 h-4 text-orange-400" />
                <span className="text-white/90 text-sm font-medium">
                  Internal tools don't talk to each other — copy-paste nightmare
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-orange-400 text-sm font-medium bg-white/5 px-3 py-1 rounded-full">
                High administrative overhead
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 slide-in-up">
            <Button
              onClick={scrollToBooking}
              className="orange-gradient hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center space-x-2 border-0"
            >
              <span>Book your free 45-minute AI Mapping Session</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              onClick={() => scrollToSection("#use-cases")}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Explore Use Cases</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full floating-animation hidden lg:block"></div>
      <div
        className="absolute top-1/3 right-10 w-16 h-16 bg-yellow-400/10 rounded-full floating-animation hidden lg:block"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-400/10 rounded-full floating-animation hidden lg:block"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default Hero;
