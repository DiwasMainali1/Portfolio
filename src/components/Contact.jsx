import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div 
      name="contact" 
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white font-inter py-20" // Changed to py-20 to match Projects
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold inline-block border-b-4 border-blue-500 pb-2">Contact</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-2xl font-semibold mb-4">Let's connect.</p>
            <p className="text-xl text-gray-300">Feel free to reach out to me!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form method="POST" action="https://getform.io/f/pagxmmdb" className="flex flex-col space-y-4">
              <input
                className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <textarea
                className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition duration-300 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg"
              >
                Let's Collaborate
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;