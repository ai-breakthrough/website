import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqItems = [
    {
      question: "What makes CoreAI different from other AI consultancies?",
      answer: "Our unique Danish-Ukrainian partnership combines Nordic business acumen with exceptional technical talent. We focus exclusively on B2B solutions and understand the Danish market intimately. Our team brings together Danish leadership in business development with Ukrainian excellence in AI and machine learning, creating solutions that are both technically advanced and culturally appropriate for Danish businesses."
    },
    {
      question: "How long does a typical AI implementation take?",
      answer: "Project timelines vary based on complexity and scope. Standard implementations typically take 3-6 months, while complex custom solutions may require 12+ months. We provide detailed timelines during our initial consultation, including milestone deliverables and regular progress updates. Our agile approach allows for iterative development and early value delivery."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, system updates, and continuous optimization of your AI solutions. Our support includes performance monitoring, bug fixes, feature enhancements, and training for your team. We believe in long-term partnerships and ensure your AI systems continue to deliver value as your business grows."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across various sectors including manufacturing, retail, healthcare, finance, logistics, and professional services. Our particular expertise lies in understanding Danish market dynamics, regulatory requirements, and business culture. Whether you're a traditional Danish company looking to modernize or a tech-forward business seeking advanced AI capabilities, we tailor our solutions to your industry's specific needs."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We follow GDPR compliance strictly and implement enterprise-grade security measures throughout all our solutions. All data processing can be done locally in Denmark if required, ensuring complete data sovereignty. Our security protocols include end-to-end encryption, secure API development, regular security audits, and compliance with Danish and EU data protection regulations."
    },
    {
      question: "What is your approach to AI ethics?",
      answer: "We prioritize transparent, fair, and responsible AI development. Our solutions are designed to be explainable and free from bias. We conduct regular bias audits, ensure algorithmic transparency, and provide clear documentation on how our AI systems make decisions. We believe AI should augment human capabilities, not replace human judgment, especially in critical business decisions."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating AI solutions with existing business systems and workflows. Our team has extensive experience with various enterprise platforms, databases, and APIs commonly used in Danish businesses. We ensure seamless integration that enhances your current operations without disrupting your established processes."
    },
    {
      question: "What languages do your AI solutions support?",
      answer: "Our AI solutions support Danish, English, and Ukrainian languages natively, with the capability to extend to other languages as needed. This multilingual support is particularly valuable for Danish companies with international operations or those working with Ukrainian partners. Our natural language processing solutions are trained on Danish business contexts and terminology."
    },
    {
      question: "How do you measure the success of AI implementations?",
      answer: "We establish clear KPIs and success metrics before project initiation, including ROI measurements, efficiency gains, accuracy improvements, and user adoption rates. We provide regular reporting and analytics dashboards to track performance. Our success is measured by your business outcomes, not just technical metrics."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training programs for your team, including technical training for IT staff and business training for end-users. Our training covers AI fundamentals, system operation, best practices, and ongoing optimization techniques. We believe in empowering your team to maximize the value of your AI investment."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-source-sans">
            Get answers to common questions about our AI consultancy services, 
            implementation process, and Danish-Ukrainian partnership.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset bg-transparent"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white pr-4 font-inter">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openItems.has(index) ? (
                          <ChevronUp className="w-5 h-5 text-orange-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openItems.has(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed font-source-sans">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-inter">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6 font-source-sans">
              Our team is here to help. Get in touch for a personalized consultation 
              about your AI needs.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="orange-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 border-0"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

