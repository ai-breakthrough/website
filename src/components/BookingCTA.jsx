import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const BookingCTA = () => {
  const handleBooking = () => {
    // This would typically link to a calendaring system
    // For now, we'll just scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="booking-cta" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Let's map your{" "}
            <span className="coreai-text-gradient">AI opportunities</span>
          </h2>

          {/* Subline */}
          <p className="text-xl text-gray-300 mb-8 font-source-sans">
            Book a free 45-minute AI Mapping Session
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              onClick={handleBooking}
              className="orange-gradient hover:opacity-90 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center space-x-3 mx-auto border-0"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Session</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Fine print */}
          <p className="text-gray-400 text-sm font-source-sans max-w-2xl mx-auto">
            Turning AI potential into operational advantage through
            human-centered collaboration
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
