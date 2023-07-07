"use client";

import React from "react";
import { GrammarProvider } from "../context/Grammar";
import GrammarOutput from "../components/grammar-checker/Output";
import GrammarInput from "../components/grammar-checker/Input";
import Header from "../components/Header";
import Title from "../components/Title";


const Page: React.FC = () => {
  return (
    <>
    <GrammarProvider>
      <div className="relative bg-white">
        <div className="absolute -z-10 top-[-50rem] -left-[40rem]">
          <img src="Group47.svg" className="relative top-[20rem]" alt="Background" />
        </div>
      </div>
      <Header name="GrammarChecker" />
      <Title paragraph="Improve your writing with the power of AI" title="Grammar Checker" />
      <GrammarInput/>
      <GrammarOutput/>
    </GrammarProvider>
    </>
  );
};

export default Page;
