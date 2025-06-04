import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Event Guidance and Inventory Management",
      description: "A comprehensive event planning platform designed for event planners to track events, manage inventory, and handle budget cost management. Features real-time tracking, resource allocation, and financial oversight for seamless event coordination.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "Full Stack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "CryptoScan - Crypto Exchange Platform",
      description: "A secure and user-friendly cryptocurrency exchange site offering real-time market data, interactive charts, and intuitive trading features. Built with a full-stack MERN architecture.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSocket"],
      category: "Full Stack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Myntra Clone",
      description: "A React + Redux-based e-commerce site mimicking Myntra, complete with product fetching, cart system, and dynamic total calculation. Focused on UX and responsiveness.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "CSS", "JavaScript"],
      category: "Frontend",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Blogging Social Media App",
      description: "A lightweight blogging platform with hashtags, reactions, and post management using vanilla HTML, CSS, and JavaScript. Great for hobbyists and micro-bloggers.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      category: "Frontend",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Sales Dashboard",
      description: "A fully interactive dashboard showcasing sales KPIs, trends, and revenue stats using Power BI and Python for data processing and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Power BI", "Pandas", "Matplotlib", "NumPy"],
      category: "Python",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Sales Dashboard",
      description: "A fully interactive dashboard showcasing sales KPIs, trends, and revenue stats using Power BI and Excel for comprehensive data analysis and business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Power BI", "Excel", "DAX", "SQL", "Data Modeling"],
      category: "Data Analytics",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'Python', 'Data Analytics'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="font-medium">Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
