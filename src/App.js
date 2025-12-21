import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import TechStack from './Techstack';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'projects', 'tech'];
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
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'pt-4' : 'pt-0'}`}>
      <nav className={`transition-all duration-500 ease-in-out border ${isScrolled
        ? 'w-[90%] md:w-[70%] max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-full px-4 py-2 border-slate-200/60'
        : 'w-full bg-slate-50/95 backdrop-blur-sm px-6 py-4 border-transparent'
        }`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}>
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold font-outfit text-slate-900 tracking-tight transition-all duration-300">
              {isScrolled ? 'Diwas' : 'Diwas Mainali'}
            </span>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-1">
            {['home', 'projects', 'tech'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`relative px-4 py-2 text-sm font-medium font-outfit transition-all duration-300 rounded-full ${activeSection === section
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
              >
                {section === 'tech' ? 'Skills' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

const LinkPreview = ({ href, children, videoSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block font-semibold text-primary-600 no-underline transition-colors hover:text-primary-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isHovered && (
        <div
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-80 rounded-xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-4 ring-white bg-slate-950 transition-all duration-300 animate-in fade-in zoom-in-95"
          style={{ transform: `translateX(-50%)` }}
        >
          <div className="relative aspect-video w-full bg-slate-900">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl"></div>
          </div>
          <div className="px-3 py-2 bg-white flex items-center justify-between border-t border-slate-100">
            <span className="text-xs font-medium text-slate-600 truncate flex-1">cramandconquer.com</span>
            <span className="text-[10px] uppercase font-bold text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded ml-2">Live</span>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-4 h-4 rotate-45 bg-white border-b border-r border-slate-100"></div>
        </div>
      )}
    </a>
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(239,68,68,0.05),rgba(255,255,255,0))]"></div>
      <div className="max-w-4xl mx-auto px-6 w-full text-center">
        <div className="flex flex-col items-center">
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <img
              src={heroImg}
              alt="Diwas Mainali"
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl shadow-slate-200 ring-4 ring-white"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-slate-900 leading-tight tracking-tight mb-4">
            Diwas Mainali
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 font-medium tracking-tight mb-8">
            Full-Stack Developer & Computer Science Student
          </h2>

          <div className="max-w-2xl mx-auto space-y-5 text-base text-slate-600 leading-relaxed mb-10">
            <p>
              I am the creator of a growing productivity platform called <LinkPreview href="https://cramandconquer.com" videoSrc="https://pub-f967ed0c0484476e97ac883702ab3b3d.r2.dev/main.mp4">Cram & Conquer</LinkPreview>. I have always had an interest on deploying useful sites online. It started with a chess openings trainer and then it slowly progressed to a study app which I am managing today.
            </p>
            <p>
              Aside from coding, I enjoy reading, playing tennis, practicing chess and exploring new ways to improve my website.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 hover:-translate-y-0.5"
            >
              Download Resume
            </button>
            <a
              href="https://github.com/DiwasMainali1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-slate-200 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diwasmainali/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-slate-200 bg-white text-slate-700 font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-slate-700 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit tracking-tighter text-slate-900">Featured Projects</h2>
          <p className="mt-3 text-slate-600">The projects that I'm most proud of :)</p>
        </div>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover aspect-video"
                />
              </div>

              <div className={`text-center lg:text-left ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-3xl font-bold font-outfit text-slate-900 mb-4">{project.name}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-1.5 rounded-full border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-primary-600 group-hover:text-primary-500 transition-colors duration-200 hover:underline underline-offset-4"
                >
                  Live Demo
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
        <p className="font-medium">&copy; {new Date().getFullYear()} Diwas Mainali. All rights reserved.</p>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary-500/30 font-inter">
      <NavBar />
      <main>
        <Home />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
};

export default App;