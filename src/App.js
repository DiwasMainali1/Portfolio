import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';

import cramAndConquerImg from "./assets/cramandconquer.gif";
import gridBaseImg from "./assets/GridBase.png";
import piccioLabImg from "./assets/picciolab.png";
import gambitGuruImg from "./assets/gambitguru.png";
import heroImg from "./assets/hero1.png";

const projects = [
  { 
    name: "Cram and Conquer", 
    description: "A productivity platform designed for students, offering real-time group study sessions, customisable Pomodoro timers, and insightful user analytics. Used stripe for payment processing and authentication using CSRF-protected JWT tokens.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    image: cramAndConquerImg,
    demo: "https://cramandconquer.com" 
  },
  { 
    name: "GridBase", 
    description: "A full-stack Airtable clone featuring a high-performance virtualized data grid, real-time cell editing, and a dynamic, multi-filter query engine.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "tRPC", "Prisma"],
    image: gridBaseImg,
    demo: "https://gridbase-diwas.vercel.app/" 
  },
  {
    name: "Piccio Lab",
    description: "A clean and professional research lab website developed and deployed for a team at the University of Sydney, designed to be easily maintainable.",
    tech: ["React", "JavaScript", "CSS"],
    image: piccioLabImg,
    demo: "https://thepicciolab.netlify.app/"
  },
  { 
    name: "Gambit Guru", 
    description: "An interactive chess openings trainer built with a drag-and-drop interface that allows users to practice and master customisable opening lines.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: gambitGuruImg,
    demo: "https://diwasmainali1.github.io/Gambit-Guru/" 
  }
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'projects', 'about'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-lg z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <span className="text-lg font-bold text-slate-200">Diwas Mainali</span>
          <div className="hidden sm:flex items-center space-x-8">
            {['home', 'projects', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === section 
                    ? 'text-cyan-400' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Diwas_Mainali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight tracking-tighter">
              Diwas Mainali
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 mt-3 font-medium tracking-tight">
              Full-Stack Developer & Computer Science Student
            </h2>
            <p className="text-base text-slate-400 mt-6 max-w-xl leading-relaxed">
              A final-year student at UNSW with a passion for learning. Decently experienced in building full-stack web applications using modern frameworks.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-md hover:bg-cyan-400 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
              >
                Download Resume
              </button>
              <a
                href="https://github.com/DiwasMainali1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold rounded-md hover:bg-slate-800 hover:border-slate-700 transition-colors duration-300"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/diwasmainali/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-800 bg-slate-900/50 text-slate-300 font-semibold rounded-md hover:bg-slate-800 hover:border-slate-700 transition-colors duration-300"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <img 
                src={heroImg} 
                alt="Diwas Mainali" 
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 text-slate-300 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-slate-100">Featured Projects</h2>
          <p className="mt-3 text-slate-400">The projects that I'm most proud of :)</p>
        </div>
        <div className="mt-16 space-y-20">
          {projects.map((project, index) => (
            <div key={project.name} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={`relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/80 border border-slate-800 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`text-center lg:text-left ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-2xl font-semibold text-slate-100">{project.name}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group mt-6 hover:text-cyan-300 transition-colors duration-200"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-slate-300 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
             <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-slate-100">About Me</h2>
          </div>
          <div className="lg:col-span-2 space-y-5 text-base text-slate-400 leading-relaxed">
            <p>
              I'm a final-year Computer Science student at UNSW, with a genuine interest in full-stack development. I started coding to find a solution to practice chess openings as I was getting tired of learning them through YouTube videos. </p>
            <p>
              It was then that I learned HTML/CSS/JavaScript and built my first web app, Gambit Guru. Since then, I've been passionate about building web applications that solve real-world problems. My next massive project was Cram and Conquer, a productivity platform for students that I developed from scratch using React, Node.js, and MongoDB which is now live and being used by students around the world.
            </p>
            <p>
              Aside from coding, I enjoy reading, playing chess, and exploring new technologies. As I get older I realise that, being a developer is about adapting to change and always learning, and I love that aspect of this field.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-800/50">
          <h3 className="text-2xl font-bold text-center text-slate-200 mb-10">Technical Proficiencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 text-center md:text-left">Languages</h4>
              <p className="text-slate-400 leading-relaxed font-mono text-center md:text-left">Python • JavaScript (ES6+) • TypeScript • C • C++ • HTML5 • CSS3 • Bash</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 text-center md:text-left">Technologies & Frameworks</h4>
              <p className="text-slate-400 leading-relaxed font-mono text-center md:text-left">React.js • Next.js • Node.js • Express.js • MongoDB • PostgreSQL • Prisma • RESTful APIs • Tailwind CSS • Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Diwas Mainali. All rights reserved.</p>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      <NavBar />
      <main>
        <Home />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;