import React from 'react';
import { Download, Camera, MessageCircle, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download & Setup",
      description: "Install AgriAssist Pro and complete your farm profile in your preferred language",
      step: "01"
    },
    {
      icon: Camera,
      title: "Capture & Analyze",
      description: "Take photos of your crops or ask voice questions about farming challenges",
      step: "02"
    },
    {
      icon: MessageCircle,
      title: "Get Expert Advice",
      description: "Receive instant AI-powered recommendations and treatment suggestions",
      step: "03"
    },
    {
      icon: TrendingUp,
      title: "Implement & Grow",
      description: "Apply the insights to improve yields, reduce costs, and maximize profits",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How AgroMentorAi​ Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes and transform your farming operations with our simple, 
            intuitive platform designed for farmers of all technical backgrounds.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-green-200 via-green-400 to-green-600"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 bg-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                See AgroMentorAi​ in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Watch how farmers around the world are using our platform to make smarter 
                decisions, increase yields, and build sustainable agricultural practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Real-time crop disease detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Voice-activated farming advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Market price optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Farmer using mobile app in field"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Disease Detection</div>
                    <div className="font-semibold text-gray-900">Tomato Blight Identified</div>
                  </div>
                  <div className="text-green-600 font-bold">98% Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;