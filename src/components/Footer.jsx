import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-600'>
        <div className='pl-[8px] pr-[8px] sm:pl-[2vw] sm:pr-[2.5vw] md:pl-[3.5vw] md:pr-[4.5vw] pt-[1.5vw] pb-[1.5vw] bg-gray-800 rounded-t-[40px] overflow-hidden flex justify-between items-center'>
            <p className='font-bold font-saira tracking-[0.4vw] text-[15px] md:text-[25px]'>LICENSE :</p>
            <p className='font-light font-saira [word-spacing:0.3vw] tracking-[1px] w-[240px] sm:w-fit text-[10px] md:text-[18px] mt-[2px]'><a className='hover:underline text-sky-400' href="https://murdock9803.github.io/GSoC-24-Doc/">Murdock9803&apos;s GSoC-24-Doc</a> © 2024 by <a className='hover:underline text-sky-400' href="https://murdock9803.github.io/Ayush-Portfolio/">Ayush Sahu</a> is licensed under <a className='hover:underline text-sky-400' href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">CC BY 4.0 </a><img className='inline h-[25px]' src="https://mirrors.creativecommons.org/presskit/icons/cc.png" alt="" /> <img className='inline h-[25px]' src="https://mirrors.creativecommons.org/presskit/icons/by.png" alt="" /></p>
        </div>
    </div>
  )
}

export default Footer
