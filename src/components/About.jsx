import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import ukraineImage from '../assets/c3wzkHv7NyRk.jpg';
import denmarkImage from '../assets/NnJayPQKKHbk.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            About CoreAI.dk
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            A unique partnership bridging Danish innovation with Ukrainian technical excellence, 
            creating AI solutions that transform businesses while supporting our Ukrainian colleagues.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-inter">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-300 font-source-sans">
              <p className="text-lg leading-relaxed">
                CoreAI.dk was founded on the belief that artificial intelligence should be accessible, 
                practical, and transformative for Danish businesses. Our journey began with a simple 
                yet powerful vision: to combine the best of Nordic design thinking with Eastern European 
                technical excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Our Danish-Ukrainian team brings together decades of experience in AI, machine learning, 
                and business transformation. We understand the unique challenges facing Danish B2B companies 
                and have the technical expertise to deliver solutions that drive real business value.
              </p>
              <p className="text-lg leading-relaxed">
                More than just a business partnership, we are committed to supporting Ukraine through 
                our work, providing opportunities for Ukrainian talent, and contributing to the country's 
                technological advancement during these challenging times.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={denmarkImage} 
                  alt="Denmark" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent flex items-end">
                  <span className="text-white font-semibold p-4">🇩🇰 Denmark</span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg mt-8">
                <img 
                  src={ukraineImage} 
                  alt="Ukraine" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/80 to-transparent flex items-end">
                  <span className="text-white font-semibold p-4">🇺🇦 Ukraine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="dark-card rounded-2xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-inter">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-source-sans">
                To democratize AI technology for Danish B2B companies, providing tailored solutions 
                that drive real business value while supporting our Ukrainian colleagues and their homeland. 
                We believe in the power of international collaboration to create innovative solutions 
                that benefit businesses and communities alike.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-inter">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Innovation with Purpose</h4>
                    <p className="text-gray-400 text-sm">Creating AI solutions that solve real business problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Cultural Collaboration</h4>
                    <p className="text-gray-400 text-sm">Bridging Danish and Ukrainian expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Social Responsibility</h4>
                    <p className="text-gray-400 text-sm">Supporting Ukraine through our business</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Highlights */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-inter">
            Our Team
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-source-sans">
            A dedicated team of cool people from Denmark and Ukraine, united by our passion for AI 
            and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover-lift dark-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Danish Leadership</h4>
              <p className="text-gray-400 text-sm">Business development and market expertise</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift dark-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 orange-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ukrainian Tech Team</h4>
              <p className="text-gray-400 text-sm">World-class AI and ML development</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift dark-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Combined Experience</h4>
              <p className="text-gray-400 text-sm">50+ years of collective AI expertise</p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift dark-card border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Ukraine Support</h4>
              <p className="text-gray-400 text-sm">Committed to supporting Ukrainian talent</p>
            </CardContent>
          </Card>
        </div>

        {/* Support Ukraine Message */}
        <div className="mt-20 orange-gradient rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-inter">
              🇺🇦 Supporting Ukraine Through Innovation
            </h3>
            <p className="text-lg text-white/90 leading-relaxed font-source-sans">
              Our partnership with Ukrainian talent is more than business—it's a commitment to supporting 
              a nation's resilience and technological advancement. Every project we deliver together 
              contributes to Ukraine's economic strength and showcases the incredible talent that 
              continues to innovate despite challenging circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

