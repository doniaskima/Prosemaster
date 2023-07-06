"use client";
import React from 'react';

export default function Boost() {
  const data = [
    {
      title: 'grammar checker',
      text:
        'Our grammar checker is a powerful tool that helps you enhance your writing by identifying and correcting grammar mistakes in your text.',
      link: '/correct-text',
    },
    {
      title: 'rephrase sentences',
      text:
        'Our rephrase tool provides an efficient way to rephrase sentences, allowing you to express ideas in alternative ways and improve the clarity and variety of your writing.',
      link: '/paraphrase',
    },
    {
      title: 'summarize lengthy texts',
      text:
        'Our text summarizer simplifies the task of summarizing lengthy texts by condensing the main points and key information, saving you time and effort in extracting the essential content from large documents.',
      link: '/summerize',
    },
    {
      title: 'generate captivating articles',
      text:
        'Our article writer generates captivating articles, providing you with unique and engaging content tailored to your specific needs, helping you save time and produce high-quality articles effortlessly.',
      link: '/writeArticle',
    },
  ];

  return (
    <div className="flex flex-col py-10 justify-center items-center">
      <div className="py-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold leading-none">
          Want to Boost your Business?
        </h1>
         <div className="flex justify-center align-items-center">
         <p className="text-[#61646B] text-xl max-w-[70%] mt-4">
          Whether you need to enhance your writing with our grammar checker, rephrase sentences with our paraphrasing tool, summarize lengthy texts with our text summarizer, or generate captivating articles with our article writer, we've got you covered. Unlock the potential of your writing and explore the possibilities with our comprehensive suite of language utilities.
        </p>
         </div>
      </div>
      <style jsx>{`
        .card {
          max-height: 360px;
          background: #ffffff;
          box-shadow: 0px 10px 50px 5px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
        }
        .card:hover {
          box-shadow: 0px 65px 150px 10px rgba(125, 131, 252, 0.25);
        }
      `}</style>
      <div className="grid gap-10 items-center md:grid-cols-1 lg:grid-cols-2">
        {data.map((n, index) => {
          return (
            <a key={index} href={n.link} rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer card py-10 max-w-[360px] sm:w-[360px] hover:border-[#3E3FD8] hover:border-2">
                <div className="max-w-xs px-5 mt-10">
                  <h1 className="font-jostBold text-xl sm:text-2xl text-[#2E323B]">
                    {n.title}
                  </h1>
                  <p className="font-jostRegular text-[#61646B] py-2">
                    {n.text}
                  </p>
                  <h2 className="font-jostMedium text-lg sm:text-xl text-[#3E3FD8] flex items-center">
                    {' '}
                    Try it{' '}
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      className="ml-2 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L8 0.226497V11.7735L18 6ZM0 7H9V5H0V7Z"
                        fill="#3E3FD8"
                      />
                    </svg>
                  </h2>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
