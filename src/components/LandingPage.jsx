import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="selection:bg-transparent selection:text-slate-100 w-full h-[600px] sm:h-[700px] xl:h-screen -mb-20 bg-zinc-900 text-[#AD88C6] pt-1">
      <div className="textstruc mt-12 sm:pt-20 px-8 sm:px-20">
        {["Murdock9803's", "GSoC'24", "Documentation"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "17vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className='mr-[1vw] ml-[0.35vw] w-[9vw] h-[8.5vw] rounded md:mr-[1vw] md:ml-[0.35vw] md:w-[9vw] md:h-[5.5vw] md:rounded-md relative top-0 bg-red-500 bg-[url("/src/assets/gsoc-cc-centered.png")] bg-cover bg-center'
                  ></motion.div>
                )}
                <h1 className="text-[13vw] md:text-[7.5vw] font-saira font-bold tracking-tight leading-[1]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-saira border-t-[1px] sm:border-t-[2px] text-[#AD88C6] text-[11px] sm:text-[1.5vw] border-[#AD88C6] mt-12 sm:mt-20 flex flex-col gap-4 sm:flex-row  justify-between items-start sm:items-center py-5 px-8 sm:px-20">
 
        <div className="relative start flex items-center gap-1 rounded-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <a
            target="_blank"
            className="absolute w-full h-full rounded-full z-[1]"
            href="https://opensource.creativecommons.org/blog/authors/Murdock9803/"></a>
          <div
            className={` ${isHovered ? "bg-[#000] text-[#fff] border-[#000000] transition-colors duration-300" : "bg-[#AD88C6] text-[#000000] transition-colors duration-300"} px-[2vw] py-[0.5vw] font-semibold uppercase rounded-full`}
          >
            GSoC&apos;24 Blogs Published!
          </div>
          <div
            className={` ${isHovered ? "bg-[#000] text-[#fff] border-[#000000] transition-colors duration-300" : "bg-[#AD88C6] text-[#000000] transition-colors duration-300"} w-[3vw] h-[3vw] flex items-center justify-center rounded-full`}
          >
            <span className="rotate-[-45deg]">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
