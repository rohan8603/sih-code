import React from 'react';
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Sprout className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">AgroMentorAi​</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering farmers worldwide with AI-powered insights, multilingual support, 
              and comprehensive agricultural solutions for sustainable farming success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-green-500 transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-green-500 transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-green-500 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">support@AgroMentorAi​.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">Global Agricultural Hub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 AgroMentorAi​. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;