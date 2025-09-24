import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Complete
              <span className="text-green-600 block">Digital Farming</span>
              Companion
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your agricultural operations with AI-powered insights, multilingual support, 
              and real-time market intelligence. Empowering farmers with cutting-edge technology 
              and localized expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">Start</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-600 hover:text-green-600 transition-all flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Active Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Farmer using digital technology in field"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Smart Crop Monitoring</h3>
                <p className="text-gray-600 mt-2">Real-time insights for better yields</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;