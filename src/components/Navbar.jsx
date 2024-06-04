import React from 'react'

function Navbar() {
  
  return (
    <div className='selection:bg-transparent selection:text-slate-100 z-[999] w-full h-20 px-8 sm:px-20 pt-8 sm:pt-12'>
        

        <div className='text-[#AD88C6] links flex flex-col sm:flex-row gap-4 justify-between'>
            <a className='font-saira uppercase font-semibold tracking-light leading-none hover:underline text-[11px] sm:text-[1.5vw]' target="_blanc" href="https://summerofcode.withgoogle.com/programs/2024/organizations/creative-commons">Org: Creative Commons</a>
            <a className='font-saira uppercase font-semibold tracking-light leading-none hover:underline text-[11px] sm:text-[1.5vw]' target="_blanc" href="https://summerofcode.withgoogle.com/programs/2024/projects/ZIhUmKRN">Project: Modernize CC Resource Archive</a>
        </div>
    </div>
  )
}

export default Navbar
