import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div 
      name="about" 
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white font-inter py-20" // Changed to py-20 to match Projects
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-center mb-12 underline underline-offset-8 decoration-blue-500">About</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 text-lg text-gray-300 leading-relaxed"
        >
<p>
  Hi! I'm Diwas Mainali, a driven final-year Computer Science student at UNSW with a passion for full-stack development. My hands-on experience includes successfully deploying a research lab website for the University of Sydney, demonstrating my ability to deliver real-world solutions. I specialize in web development and enjoy building applications that solve practical problems.
</p>
<p>
  Beyond coding, I'm an avid chess player and tennis enthusiast, activities that have sharpened my strategic thinking and competitive spirit. I thrive in collaborative environments and constantly seek opportunities to learn new technologies and best practices. I'm currently looking for opportunities to contribute my technical skills and fresh perspectives to innovative projects. Let's connect at <a href="mailto:diwas.mainali1@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-300">diwas.mainali1@gmail.com</a> to discuss how I can add value to your team.
</p>
        </motion.div>
      </div>
    </div>
  )
}

export default About