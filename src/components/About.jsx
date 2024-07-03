import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white font-inter py-16">
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
            Hi there! I'm Diwas Mainali, a passionate third-year student at the University of New South Wales (UNSW), 
            pursuing my dream of becoming a full stack software engineer. With experience in web development, 
            including deploying a website for a research lab at the University of Sydney (USYD), I have honed my technical 
            skills and gained valuable insights into software development. Beyond academics, I enjoy challenging myself through 
            chess, staying active with tennis, and creating web applications that simplify everyday tasks.
          </p>
          <p>
            I am a strong believer in continuous learning and collaboration, thriving on acquiring new knowledge and 
            working alongside like-minded individuals. I am always eager to engage with others, learn from their 
            experiences, and contribute my own perspectives to any project. If you'd like to connect, discuss opportunities, 
            or share ideas, please reach out to me at <a href="mailto:diwas.mainali1@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-300">diwas.mainali1@gmail.com</a> or through the social media links provided above.
            I am excited about the possibilities ahead and look forward to embarking on new challenges and collaborations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About