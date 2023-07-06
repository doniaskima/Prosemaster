"use client";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const Title = ({title ,paragraph}) => {
    const [hover, setHover] = useState(false);
    
    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  return (
    <>
         <div className="flex justify-center align-items-center text-5xl font-bold cursor-pointer mt-8">
         <RoughNotation
            type="highlight"
            color="	#9370DB"
            show={hover}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
             {title}
         </RoughNotation>
       
     </div>
     <div className="flex justify-center align-items-center">
      <p className="text-gray w-2/4 flex justify-center align-items-center">
        {paragraph}
      </p>
     </div>
     
    </>
 
  )
};

export default Title;
