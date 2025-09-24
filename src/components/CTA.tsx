import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const features = [
    "15+ Language Support",
    "Real-time Market Prices",
    "AI-Powered Crop Diagnostics",
    "24/7 Voice Assistance",
    "Government Scheme Alerts"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Join over 50,000 farmers who are already using AgroMentorAi​ to increase yields, 
            reduce costs, and build sustainable agricultural practices.
          </p>

          <div className="grid md:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2 font-semibold">
              <span>Start</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all font-semibold">
              Schedule Demo
            </button>
          </div>

          <div className="text-sm opacity-75">
             this website are free 
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;