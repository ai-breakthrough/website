import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, User, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I'm OP, CoreAI's AI assistant. I'm here to help you learn about our AI solutions for Danish businesses. How can I assist you today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you offer')) {
      return "We offer comprehensive AI solutions including Machine Learning Implementation, Natural Language Processing, Computer Vision, AI Strategy Consulting, Custom AI Development, and Data Analytics & Insights. Our Danish-Ukrainian team specializes in B2B solutions tailored for Danish businesses.";
    }
    
    if (message.includes('cost') || message.includes('price') || message.includes('budget')) {
      return "Our pricing varies based on project scope and complexity. We offer flexible packages starting from 100,000 DKK for basic implementations up to 1,000,000+ DKK for comprehensive enterprise solutions. We'd be happy to provide a customized quote based on your specific needs. Would you like to schedule a consultation?";
    }
    
    if (message.includes('time') || message.includes('long') || message.includes('implementation')) {
      return "Implementation timelines depend on project complexity. Simple AI integrations typically take 1-3 months, while comprehensive custom solutions may require 3-6 months. Our agile approach ensures you see value quickly with iterative deliveries throughout the project.";
    }
    
    if (message.includes('team') || message.includes('who') || message.includes('people')) {
      return "Our team is a unique blend of Danish business expertise and Ukrainian technical excellence. We have dedicated professionals in Copenhagen handling business development and client relations, while our world-class Ukrainian developers bring cutting-edge AI and ML expertise. This partnership allows us to deliver both cultural understanding and technical innovation.";
    }
    
    if (message.includes('ukraine') || message.includes('support') || message.includes('danish')) {
      return "We're proud of our Danish-Ukrainian partnership! Our collaboration not only delivers exceptional AI solutions but also supports Ukrainian talent during challenging times. Every project contributes to Ukraine's economic resilience while bringing Nordic design thinking together with Eastern European technical excellence.";
    }
    
    if (message.includes('contact') || message.includes('meeting') || message.includes('consultation')) {
      return "I'd be happy to help you get in touch with our team! You can reach us at hello@coreai.dk, call us at +45 12 34 56 78, or fill out our contact form. We're located in Copenhagen and typically respond within 24 hours. Would you like me to help you schedule a consultation?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn about CoreAI's AI solutions for Danish businesses. What would you like to know about our services, team, or how we can help transform your business with AI?";
    }
    
    return "That's a great question! I'd recommend speaking with our team directly for detailed information. You can contact us at hello@coreai.dk or +45 12 34 56 78. Our Danish-Ukrainian team of AI experts would be happy to discuss your specific needs and how we can help transform your business with AI solutions.";
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { sender: 'bot', text: getBotResponse(inputMessage) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How much does it cost?",
    "How long does implementation take?",
    "Tell me about your team"
  ];

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        id="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 orange-gradient rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'scale-110' : 'hover:scale-105'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 dark-card rounded-lg shadow-2xl border border-orange-500/20 flex flex-col">
          {/* Header */}
          <div className="orange-gradient p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">OP - AI Assistant</h3>
                  <p className="text-xs text-white/80">CoreAI.dk</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-900">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'orange-gradient' : 'bg-gray-700'}`}>
                    {message.sender === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-300" />
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${message.sender === 'user' ? 'orange-gradient text-white' : 'bg-gray-800 text-gray-200'}`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 bg-gray-900">
              <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputMessage(question);
                      setTimeout(handleSendMessage, 100);
                    }}
                    className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full transition-colors border border-gray-600"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700 bg-gray-900 rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                className="orange-gradient hover:opacity-90 p-2 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

