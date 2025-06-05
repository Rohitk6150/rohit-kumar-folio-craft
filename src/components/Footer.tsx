
import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Rohit Kumar
            </h3>
            <p className="text-slate-400">
              Full Stack Web Developer passionate about creating beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-slate-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-slate-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-slate-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-slate-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rohitk6150"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rohit-kumar-138201227"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/rohitk6150"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
              >
                <img src="/lovable-uploads/2d53488d-2c3e-499e-b4c7-74286fada834.png" alt="LeetCode" className="w-5 h-5" />
              </a>
              <a
                href="https://www.codingninjas.com/studio/profile/rohitk6150"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
              >
                <img src="/lovable-uploads/b8c9063e-b737-40cf-b8e9-fa4ebb7b992e.png" alt="Coding Ninjas" className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Open for opportunities and collaboration
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Rohit Kumar. Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
