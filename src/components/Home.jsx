import React from "react";
import profile from "../assets/hero.jpg";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div>
                   <h2>Welcome to my porfolio!</h2> 
                    <p>
                        I enjoy working on web applications using technologies like React, HTML5 and Next JS. 
                    </p>
                    <div>
                        <button>
                            Portfolio
                            <span>                        
                                <BsArrowRightSquareFill />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={profile} alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>    
        </div>
    )
}
export default Home