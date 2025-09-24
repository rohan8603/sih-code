import React from 'react';
import { CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Crop Yields",
      description: "Data-driven insights and personalized recommendations help farmers achieve 25-40% higher yields",
      stat: "35% Average Yield Increase"
    },
    {
      icon: Shield,
      title: "Reduce Crop Losses",
      description: "Early detection of diseases and pests prevents significant crop damage and financial losses",
      stat: "60% Reduction in Crop Loss"
    },
    {
      icon: Clock,
      title: "Save Time & Effort",
      description: "Instant answers and automated monitoring reduce time spent on manual crop inspection",
      stat: "10+ Hours Saved Weekly"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "karnatak, India",
      quote: "AgriAssist Pro helped me identify wheat rust disease early and saved my entire crop. The voice feature in Punjabi makes it so easy to use.",
      image: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "sanjay kumar",
      location: "karnatak, india",
      quote: "The market price alerts helped me sell my rice at the best time. I earned 20% more than last season!",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "vikas kumar",
      location: "punjab, india",
      quote: "The weather-based irrigation advice reduced my water usage by 30% while maintaining excellent crop quality.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results for Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of farmers who have transformed their agricultural operations 
            and achieved sustainable success with AgriAssist Pro.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>
              <div className="text-2xl font-bold text-green-600">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Farmers Are Saying
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;