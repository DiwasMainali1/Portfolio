import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div>
                <p className="text-5xl py-9 px-4 font-bold underline underline-offset-8">About</p>
            </div>
            <div>
                <p className="text-2xl py-4 px-4">
                    I started my coding journey in 2019, when I first meddled around with python. That's when I created basic games
                    such as guessing the word, etc. After that I progressively got more into making silly word games and messing 
                    more and more with python. I knew I wanted to be a software engineer in the future. Thus, I ventured into UNSW and
                    started my journey to learn more about coding.
                </p>
                <br />
                <p className="text-2xl py-4 px-4">
                    I think learning web development got me into programming more than anything as after deploying my first chess website, 
                    I started
                </p>
            </div>
    </div>
  )
}

export default About