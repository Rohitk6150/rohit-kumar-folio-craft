
import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "SASS", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "SQL", level: 75 },
        { name: "Git", level: 88 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "Core Java", level: 80 },
        { name: "C", level: 75 },
        { name: "C++", level: 78 },
        { name: "Python", level: 70 },
        { name: "Redux Toolkit", level: 75 }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Excel", level: 90 },
        { name: "NumPy", level: 70 },
        { name: "Pandas", level: 75 },
        { name: "Matplotlib", level: 68 }
      ]
    }
  ];

  const softSkills = [
    "Problem-solving", "Adaptability", "Time Management", 
    "Team Collaboration", "Clear Communication", "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-slate-200">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
