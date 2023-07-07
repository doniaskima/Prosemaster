
import React from "react";
import Title from "../components/Title";
import ArticleInput from "../components/WriteArticle/Input";
import ArticleOutput from "../components/WriteArticle/Output";
import Header from "../components/Header";
import { ArticleProvider } from "../context/Article";

const page = () => {
    return (
        <>
        <ArticleProvider>
        <div className="relative ">
          <div className="absolute  -z-10 top-[-50rem] -left-[40rem] ">
            <img src="Group47.svg" className="relative top-[20rem]" />
          </div>
        </div>
        <Header
           name="Write.Article"
         />
          <Title paragraph="Unleash the Power of Expressive Writing" title="Revolutionize Articles" />
         <ArticleInput/>
         <ArticleOutput/>
        </ArticleProvider>
        </>
      );
};

export default page;
