import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";

const Projects = () => {
  const [animateProjects, setAnimateProjects] = useState(false);
  const projectsRef = useRef(null);
  const inView = useInView(projectsRef, { once: true, margin: "-50px" });

  // Trigger animation if the projects section is in view
  useEffect(() => {
    if (inView) {
      setAnimateProjects(true);
    }
  }, [inView]);

  const projects = [
    { name: "Yeld", image: proj5, github: "https://github.com/DiwasMainali1/yeld", demo: null },
    { name: "Piccio Lab", image: proj4, github: "https://github.com/DiwasMainali1/piccioLab", demo: "https://thepicciolab.netlify.app/" },
    { name: "Gambit Guru", image: proj1, github: "https://github.com/DiwasMainali1/Gambit-Guru", demo: "https://diwasmainali1.github.io/Gambit-Guru/" },
    { name: "Weather App", image: proj3, github: "https://github.com/DiwasMainali1/weather-app", demo: "https://diwasmainali1.github.io/weather-app/" },
    { name: "Task List", image: proj2, github: "https://github.com/DiwasMainali1/Task-List", demo: "https://diwasmainali1.github.io/Task-List/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // Optional: if user clicks the "Projects" heading, also trigger the animation.
  const handleActivate = () => {
    setAnimateProjects(true);
  };

  return (
    <div
      name="projects"
      ref={projectsRef}
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white font-inter py-10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={animateProjects ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          onClick={handleActivate}
          className="text-5xl font-bold text-center mb-5 underline underline-offset-8 decoration-blue-500 cursor-pointer"
        >
          Projects
        </motion.h2>
        {/* First row with 3 projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animateProjects ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 scale-[0.85]"
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={project.image} alt={project.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{project.name}</h3>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Second row with 2 centered projects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animateProjects ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto scale-[0.85]"
        >
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={project.image} alt={project.name} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-300">{project.name}</h3>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
