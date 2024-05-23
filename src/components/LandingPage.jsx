import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="selection:bg-transparent selection:text-slate-100 w-full h-screen -mb-20 bg-zinc-900 text-[#AD88C6] pt-1">
      <div className="textstruc mt-20 px-20">
        {["Murdock9803's", "GSoC'24", "Documentation"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className='mr-[1vw] ml-[0.35vw] w-[9vw] rounded-md h-[5.5vw] relative top-0 bg-red-500 bg-[url("/src/assets/gsoc.png")] bg-cover bg-center'
                  ></motion.div>
                )}
                <h1 className="text-[7.5vw] font-saira font-bold tracking-tight leading-[1]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="font-saira border-t-[2px] text-[#AD88C6] text-[1.5vw] border-[#AD88C6] mt-20 flex justify-between items-center py-5 px-20">
        <a target="_blank" href="https://github.com/possumbilities" className="hover:underline uppercase font-semibold tracking-light leading-none">Mentor : Sara Lovell (Possumbilities)</a>
        <a target="_blank" href="https://github.com/Murdock9803" className="hover:underline uppercase font-semibold tracking-light leading-none">Contributer : Ayush Sahu (Murdock9803)</a>
 
        <div className="relative start flex items-center gap-1 rounded-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <a
            target="_blank"
            className="absolute w-full h-full rounded-full z-[1]"
            href="https://drive.google.com/file/d/1Qr8k1Q-PhjAOvfxfasAJ-lAiRakFuUWB/view?usp=drive_link"></a>
          <div
            className={` ${isHovered ? "bg-[#000] text-[#fff] border-[#000000] transition-colors duration-300" : "bg-[#AD88C6] text-[#000000] transition-colors duration-300"} px-[2vw] py-[0.5vw] font-semibold uppercase rounded-full`}
          >
            My Project Proposal
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
