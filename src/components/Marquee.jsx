import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-[40px] text-[#222831] rounded-tr-[40px] bg-[#393E46]">
      <div className="text border-t-8 border-b-8 border-[#222831] flex overflow-hidden whitespace-nowrap">
    <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        className="uppercase text-[10vw] font-saira font-bold pt-3 pb-3"
    >My Journey with Google Summer of Code </motion.h1>
    <motion.h1
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        className="uppercase text-[10vw] font-saira font-bold pt-3 pb-3"
    > My Journey with Google Summer of Code</motion.h1>
</div>
    </div>
  );
}

export default Marquee;
