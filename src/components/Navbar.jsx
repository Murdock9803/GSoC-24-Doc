import React from 'react'

function Navbar() {
  
  return (
    <div className='selection:bg-transparent selection:text-slate-100 z-[999] w-full h-20 px-32  flex justify-between items-center'>
        <div className='logo h-full flex items-center'>
            <img className='h-[65px]' src="/src/assets/website.png" alt="" />
        </div>

        <div className='text-[#AD88C6] links flex gap-24'>
            <a className='font-saira font-light capitalize text-2xl' target="_blanc" href="https://summerofcode.withgoogle.com/programs/2024">GSoC'24 OFFICIAL SITE</a>
            <a className='mr-40 font-saira font-light capitalize text-2xl' target="_blanc" href="https://github.com/Murdock9803">MY GITHUB</a>
        </div>
    </div>
  )
}

export default Navbar