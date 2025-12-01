import React from 'react';
import { Terminal, Layout, Server, Database, Code2, Wrench } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      skills: ["TypeScript", "Python", "Java", "C", "C++", "JavaScript (ES6+)", "Bash", "HTML/CSS"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      skills: ["Node.js", "Express.js", "tRPC", "Django", "WebSockets", "RESTful APIs"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Git", "Cypress", "JMeter", "Docker", "k6 (load testing)"]
    }
  ];

  return (
    <div className="mt-24 pt-16 border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Technical Proficiencies
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the languages, frameworks, and tools I use to build scalable full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.1)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-cyan-500/10 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-slate-800/60 text-cyan-200/80 border border-slate-700/50 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-all cursor-default"
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