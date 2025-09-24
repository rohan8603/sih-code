import React from 'react';
import { Globe, TrendingUp, Brain, Camera, Mic } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Voice and chat assistance in 15+ local languages, breaking down barriers and ensuring accessibility for all farmers regardless of literacy levels.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Market & Schemes Intelligence",
      description: "Live crop prices from major markets, government subsidies information, and step-by-step guidance for scheme applications to maximize profits.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Brain,
      title: "Smart Advisory System",
      description: "AI-powered recommendations based on weather patterns, soil conditions, and crop stages for optimal planting, irrigation, and fertilization.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Camera,
      title: "Photo-Based Diagnostics",
      description: "Instant identification of diseases, pests, and nutrient deficiencies through crop images with detailed treatment recommendations.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Mic,
      title: "Voice-Activated Solutions",
      description: "Ask questions and receive expert answers through voice commands in local languages, perfect for hands-free fieldwork assistance.",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Farming Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five powerful features working together to create an integrated farming ecosystem 
            that empowers farmers with data-driven insights and localized expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* Integration Feature */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Integrated Farming Ecosystem
              </h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto">
                These features work synergistically to create a comprehensive farming support system. 
                Market data informs crop selection, weather insights guide advisory recommendations, 
                photo diagnostics connect with treatment suggestions, and voice functionality ensures 
                information remains accessible during critical farming moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;