import React from 'react'
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj3.png";
import proj3 from "../assets/proj2.png";

const Projects = () => {
  return (
    <div name="projects" className="py-10 w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="mb-8 z-2">
        <p className="text-5xl font-bold underline underline-offset-8">Projects</p>
      </div>
      <div name="ProjectList" className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 relative z-2">
        <div className="group relative cursor-pointer rounded-full shadow-lg aspect-square">
          <div className="overflow-hidden rounded-3xl">
            <img src={proj1} alt="" className="w-full h-full object-cover rounded-3xl" />
            <div name="proj1Details" className="absolute bottom-0 left-0 right-0 bg-gray-300 py-3 px-3 rounded-b-3xl">
              <p className="text-center text-2xl font-bold text-black">Gambit Guru</p>
              <div className="flex justify-center mt-2">
                <a href="https://github.com/DiwasMainali1/Gambit-Guru" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-blue-600 font-semibold py-2 px-4 rounded-2xl">View Code</button>
                </a>
                <a href="https://diwasmainali1.github.io/Gambit-Guru/" target="_blank" rel="noopener noreferrer">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-green-500 font-semibold py-2 px-4 rounded-2xl">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer rounded-full shadow-lg aspect-square">
          <div className="overflow-hidden rounded-3xl">
            <img src={proj2} alt="" className="w-full h-full object-cover rounded-3xl" />
            <div name="proj2Details" className="absolute bottom-0 left-0 right-0 box-border bg-gray-300 overflow-hidden py-3 px-3 rounded-b-3xl">
              <p className="text-center text-2xl font-bold text-black">Weather App</p>
              <div className="flex justify-center mt-2">
                <a href="https://github.com/DiwasMainali1/weather-app" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-blue-600 font-semibold py-2 px-4 rounded-2xl">View Code</button>
                </a>
                <a href="https://diwasmainali1.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-green-500 font-semibold py-2 px-4 rounded-2xl">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer rounded-full shadow-lg aspect-square">
          <div className="overflow-hidden rounded-3xl">
            <img src={proj3} alt="" className="w-full h-full object-cover rounded-3xl" />
            <div name="proj3Details" className="group absolute bottom-0 left-0 right-0 box-border bg-gray-300 py-3 px-3 rounded-b-3xl">
              <p className="text-center text-2xl font-bold text-black">Task List</p>
              <div className="flex justify-center mt-2">
                <a href="https://github.com/DiwasMainali1/Task-List" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-blue-600 font-semibold py-2 px-4 rounded-2xl">View Code</button>
                </a>
                <a href="https://diwasmainali1.github.io/Task-List/" target="_blank" rel="noopener noreferrer">
                  <button className="text-white bg-gradient-to-r from-gray-800 to-black hover:scale-110 duration-300 hover:text-green-500 font-semibold py-2 px-4 rounded-2xl">Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects