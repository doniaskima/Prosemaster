"use client";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";


interface TitleProps {
  title: string;
  paragraph: string;
}

const Title = ({ title, paragraph }: TitleProps) => {
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
