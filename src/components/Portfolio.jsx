import React from 'react'
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";

const Portfolio = () => {
  return (
    <div name="Projects" className="py-10 w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="mb-8">
        <p className="text-5xl font-bold underline underline-offset-8">Projects</p>
      </div>
      <div name="ProjectList" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="rounded-full shadow-lg">
          <img src={proj1} alt="" className="w-full h-auto" />
        </div>
        <div className="rounded-full shadow-lg">
          <img src={proj2} alt="" className="w-full h-auto" />
        </div>
        <div className="rounded-full shadow-lg">
          <img src={proj3} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio