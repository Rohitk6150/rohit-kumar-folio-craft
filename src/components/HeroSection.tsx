
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full Stack Web Developer | Data Analytics Enthusiast';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              Rohit Kumar
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              {displayText}
              <span className="animate-pulse"> </span>
            </p>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-1000">
          Passionate about crafting beautiful and functional websites. I specialize in modern JavaScript stacks and love bringing digital ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animation-delay-2000">
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium"
          >
            Let's Connect
          </a>
        </div>

        <div className="flex items-center justify-center space-x-6 animate-fade-in animation-delay-3000">
          <a
            href="https://github.com/Rohitk6150"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/rohit-kumar-138201227"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/rohitk6150"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 transform hover:scale-110"
          >
            <ExternalLink size={24} />
          </a>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce relative">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
