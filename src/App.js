import React, { useState } from 'react';

import cramAndConquerImg from "./assets/cramandconquer.gif";
import piccioLabImg from "./assets/picciolab.png";
import gambitGuruImg from "./assets/gambitguru.png";
import heroImg from "./assets/hero1.png";

const projects = [
  { 
    name: "Cram and Conquer", 
    description: "Full-stack productivity platform with real-time group study sessions, Pomodoro timers, and user analytics",
    tech: "React • Node.js • MongoDB",
    image: cramAndConquerImg,
    github: "https://github.com/DiwasMainali1/cram-and-conquer", 
    demo: "https://cramandconquer.com" 
  },
  { 
    name: "Piccio Lab", 
    description: "Research lab website deployed for University of Sydney",
    tech: "React • Web Development",
    image: piccioLabImg,
    github: "https://github.com/DiwasMainali1/piccioLab", 
    demo: "https://thepicciolab.netlify.app/" 
  },
  { 
    name: "Gambit Guru", 
    description: "Chess openings trainer with drag-and-drop interface and customizable training ranges",
    tech: "JavaScript • HTML5 • CSS3",
    image: gambitGuruImg,
    github: "https://github.com/DiwasMainali1/Gambit-Guru", 
    demo: "https://diwasmainali1.github.io/Gambit-Guru/" 
  }
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium text-white">Diwas Mainali</div>
          <div className="flex space-x-8">
            {['home', 'projects', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                  activeSection === section ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {section}
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
    link.click();
  };

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white leading-tight">
              Diwas Mainali
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
              Computer Science Student & Full-Stack Developer
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
              Final-year CS student at UNSW passionate about building scalable web applications. 
              Experience in React, Node.js, and MongoDB with a focus on clean, functional design.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Download Resume
              </button>
              <a
                href="https://github.com/DiwasMainali1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 text-white hover:border-gray-500 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/diwasmainali/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-700 text-white hover:border-gray-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src={heroImg} 
              alt="Diwas Mainali" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-16 text-center">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-200 border border-gray-800">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                <p className="text-xs text-gray-500 mb-6 font-mono">{project.tech}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200 underline underline-offset-4"
                  >
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors duration-200 underline underline-offset-4"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
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
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-16 text-center">About</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I'm a final-year Computer Science student at UNSW with hands-on experience in full-stack development. 
              Currently founder of Cram and Conquer, a productivity platform built with React, Node.js, and MongoDB.
            </p>
            <p>
              My professional experience includes working as an AI Frontend Development Trainer at Outlier, 
              where I help train AI systems to improve frontend development capabilities, and as a Retention Specialist 
              at Volkswagen Financial Services.
            </p>
            <p>
              I specialize in modern web technologies including React.js, Node.js, MongoDB, and have experience 
              with Python, C++, and various other technologies. I'm passionate about creating clean, scalable 
              applications that solve real-world problems.
            </p>
            <p>
              When I'm not coding, you'll find me playing chess or tennis – activities that have helped me 
              develop strategic thinking and problem-solving skills that I bring to my development work.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-medium mb-6 text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-gray-300 mb-2 font-medium">Languages</h4>
                <p className="text-gray-500">Python • JavaScript • TypeScript • C • C++ • HTML • CSS • Bash</p>
              </div>
              <div>
                <h4 className="text-gray-300 mb-2 font-medium">Technologies</h4>
                <p className="text-gray-500">React.js • Node.js • MongoDB • Express.js • Tailwind CSS • Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <Home />
      <Projects />
      <About />
    </div>
  );
};

export default App;