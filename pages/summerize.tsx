
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import Input from "../components/summerize/Input";
import SummarizeOutput from "../components/summerize/Output";
import { SummarizeProvider } from "../context/Summarize";

const page = () => {
    return (
        <>
        <SummarizeProvider> 
          <div className="relative ">
          <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
            <img src="Group47.svg" className="relative top-[20rem]" />
          </div>
        </div>
        <Header
           name="Summarize"
         />
         <Title paragraph="Our powerful technology, powered by OpenAI, ensures that your sentences are rewritten with precision, preserving the original meaning while presenting them in a fresh and engaging manner." title="Summarize with Ease" />
         <Input/>
         <SummarizeOutput/>
        </SummarizeProvider>
        </>
      );
};

export default page;
