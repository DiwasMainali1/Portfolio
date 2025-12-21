import React from 'react';
import { Terminal, Layout, Server, Database, Code2, Wrench } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-primary-600" />,
      skills: ["TypeScript", "Python", "Java", "C", "C++", "JavaScript (ES6+)", "Bash", "HTML/CSS"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-primary-600" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-primary-600" />,
      skills: ["Node.js", "Express.js", "tRPC", "Django", "WebSockets", "RESTful APIs"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6 text-primary-600" />,
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Git", "Cypress", "JMeter", "Docker", "k6 (load testing)"]
    }
  ];

  return (
    <div id="tech" className="pt-16 pb-24 border-t border-slate-200/60 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-4">
            Technical Proficiencies
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of the languages, frameworks, and tools I use to build scalable full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-500/30 hover:bg-slate-50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-primary-500/10 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-slate-100/60 text-primary-700/80 border border-slate-200/50 hover:bg-primary-500/10 hover:border-primary-500/30 hover:text-primary-700 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;