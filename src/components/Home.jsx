import React from "react";
import profile from "../assets/hero1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div>
                <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white py-4">Welcome to my portfolio!</h2>                    
                <p className="text-gray-500 py-4 max-w-md">
                    I am a passionate third-year computer science student at UNSW with a strong focus on front-end development. 
                    My expertise lies in creating engaging web experiences using HTML, CSS, JavaScript, React, and Tailwind CSS. 
                    As a freelance web developer, I take pride in delivering high-quality, responsive, and user-friendly websites to my clients. 
                    </p>
                    <div name="homeButtons" className="flex justify-center space-x-4">
                        <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-300 to-white">
                            Projects
                            <span className="group-hover:rotate-90 duration-300">                        
                            <MdKeyboardArrowRight />
                            </span>
                        </button>
                        <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-white to-gray-300">
                            Resume
                            <span className="group-hover:rotate-90 duration-300">                        
                            <MdKeyboardArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={profile} alt="my profile"
                    className="rounded-3xl mx-auto w-2/3 md:w-2/3"/>
                </div>
            </div>    
        </div>
    )
}
export default Home