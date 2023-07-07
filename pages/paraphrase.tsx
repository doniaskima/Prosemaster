
import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import { ParaphraseProvider } from "../context/paraphrase";
import ParaphraseInput from "../components/paraphrase/Input";
import ParaphraserOutput from "../components/paraphrase/Output";


const page = () => {
    return (
        <>
          <ParaphraseProvider>
          <div className="relative ">
          <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
            <img src="Group47.svg" className="relative top-[20rem]" />
          </div>
        </div>
        <Header
           name="Paraphrase"
         /> 
        <Title paragraph="Your seamless solution for effortlessly rewriting sentences " title="Seamless Rewriting" />
    
          <ParaphraseInput/> 
          <ParaphraserOutput/>  
          </ParaphraseProvider>
        </>
      );
};

export default page;
