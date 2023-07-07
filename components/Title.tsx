import React, { useState } from "react";


interface TitleProps {
  title: string;
  paragraph: string;
}

const Title = ({ title, paragraph }: TitleProps) => {
  return (
    <>
      <div className="flex justify-center align-items-center text-5xl font-bold cursor-pointer mt-8">
        <div className="content mb-8">
          <h2>{title}</h2>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="flex justify-center align-items-center">
        <p className="text-gray w-2/4 flex justify-center align-items-center text-center">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default Title;