
import React from 'react';
import { Award, Trophy, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Top 30 Ranking",
      description: "Ranked 30th out of 1600 in Coding Ninjas Studio leaderboard"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "3rd Place Winner",
      description: "Secured 3rd place in AI/ML Quiz by GFG Student Chapter"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "150+ Problems Solved",
      description: "Active problem solver on LeetCode, Coding Ninjas, and GFG"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Strong communication and adaptability skills"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Hello! I'm Rohit 👋
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                A passionate full stack web developer from Rupnagar, Punjab, India. I love crafting beautiful and functional websites that solve real-world problems. My journey in tech has been driven by curiosity and a constant desire to learn and grow.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I specialize in modern JavaScript stacks including React, Node.js, and MongoDB, along with data visualization tools like Power BI. Whether it's building platforms, dashboards, or interactive applications, I enjoy bringing digital ideas to life.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Currently pursuing B.Tech in Computer Science & Engineering and always excited about new opportunities in web development, open-source collaboration, and freelance projects.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-slate-800 dark:text-slate-200">
                    B.Tech - Computer Science & Engineering
                  </h5>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Chandigarh Engineering College | 2021-2025 | CGPA: 7.26
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-slate-800 dark:text-slate-200">
                    12th - CBSE (2021): 72%
                  </h5>
                </div>
                <div>
                  <h5 className="font-medium text-slate-800 dark:text-slate-200">
                    10th - CBSE (2019): 81.4%
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
              Achievements & Highlights
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
