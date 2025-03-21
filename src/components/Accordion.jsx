import React, { useState } from "react";

const Accordion = (props) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full rounded-lg h-fit mb-4">
      <div className="bg-[#222831] rounded-lg overflow-hidden text-gray-400">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className=" px-4 sm:px-8 py-3 flex justify-between w-full"
        >
          <span className="font-bold text-[21px] tracking-wide font-saira">{props.title}</span>
          <svg
            className="fill-indigo-500 shrink-0 ml-8 mt-[4px]"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className=
            {`grid overflow-hidden transition-all duration-300 ease-in-out text-black text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div 
            className=
              {`border-t-[3px] border-[#393E46] bg-gray-950 text-sky-400 font-light leading-7 tracking-wider px-4 sm:px-8 overflow-hidden text-[18px] ${
                accordionOpen? "py-8 transition-all duration-400 ease-all":"transition-all duration-300 ease-all"
              }`}><pre className="text-wrap font-saira">{props.desc}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
