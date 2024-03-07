import { motion } from 'framer-motion'
import React, { useState } from 'react'

function About() {
  const [cursor, setCursor] = useState(false);
  return (
    <div id='about' className='bg-[#393E46]'>
      <div className='w-full py-10 bg-zinc-600 flex gap-5 text-zinc-100 rounded-tl-[40px] rounded-tr-[40px] text-black'>
        <div className='w-[60vw] py-5 px-10'>
            <h1 className='font-bold text-[3.5vw]  text-zinc-900'>AYUSH SAHU &lt;Murdock9803/&gt;</h1>
            <div className='w-full h-[2px] bg-zinc-900'></div>
            <a onMouseEnter={()=> setCursor(true)} onMouseLeave={()=> setCursor(false)} className='rounded-full inline-block my-5' target='_blanc' href="https://murdock9803.github.io/Ayush-Portfolio/">
                <button className='uppercase h-[43px] w-[200px] text-[15px] bg-zinc-900 rounded-full flex items-center text-white'><div className='w-[175px] h-full flex pl-[25px] items-center rounded-l-full'>More About Me</div>
                <div className='w-[45px] h-full flex justify-center items-center'><div className={`bg-zinc-100 transition-all ease-in-out duration-100ms ${cursor ? "w-5 h-5" : "w-2 h-2"} rounded-full`}></div></div>
            </button>
            </a>
            <p className='text-[20px] my-5 px-5 py-4 text-[#A2B29F] font-md'>Hello! I am Ayush, a developer based in India, currently pursuing my Bachelors and Masters degrees from IIT(BHU), Varanasi. As my username suggests, I'm a big fan of Daredevil [Matt Murdock]. This website serves as my documentation for Google Summer of Code 2024. I created this platform to share not only the technical aspects of my journey but also the challenges, learnings, and everything in between. Building and developing is my passion, and transforming my GSoC journey into a cool site instead of plain text was an exciting idea. Let's explore this journey together, diving deep into the code, struggles, and insights, ensuring newcomers get the most out of this site!</p>

        </div>
        <div className="w-[22vw] mt-20 ml-20 h-[22vw] rounded-full bg-red-400 overflow-hidden bg-cover bg-center bg-[url('/src/assets/daredevil-square-wallpaper.jpg')]"><img src="./src/assets/ayush.png" className={`transition-opacity duration-[0.8s] ease-in-out ${cursor ? "opacity-100" : "opacity-0"}`} alt="" /></div>
    </div>
    </div>
  )
}

export default About
