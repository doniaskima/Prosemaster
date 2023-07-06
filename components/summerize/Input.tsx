'use client';
import React from "react";
import { RxSymbol } from 'react-icons/rx';
import { useState, useRef, useContext } from 'react';
import { SummarizeContext } from "../../context/Summarize";
import { usePreventRichText } from "../../helpers/usePreventRichText";


const Input = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState('');

    const { setSummarized } = useContext(SummarizeContext);
    const inputRef = useRef<HTMLDivElement>(null);
    usePreventRichText(inputRef);

    const summarizeIt = async () => {
        if (inputText.trim().length === 0) return;
    
        setIsLoading(true);
    
        try {
          const res = await fetch('/api/summarize-it', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: inputText }),
          });
    
          const data = await res.json();
    
          setSummarized(data.response);
        } catch (err) {

          setSummarized('Oops, an error occured. Please try again later!');
          console.log(err);
        }
    
        setIsLoading(false);
      };
    
  return (
    <div className="mb-12 text-black rounded-2xl bg-white text-sm mt-8 mx-auto shadow p-4" style={{ width: '80%' }}>
      <div
        ref={inputRef}
        className={`break-word custom-scroll ${
          !inputText.length && 'placeholder'
        } relative h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4 focus:outline-none`}
        contentEditable={true}
        onKeyUp={() => setInputText(inputRef.current?.innerText!)}
        placeholder="Write something cool..."
      />
      <div className="flex items-center justify-end gap-4 rounded-b-2xl bg-[#c198fc] py-2 px-4">
        <button
          onClick={summarizeIt}
          className="button"
        >
          Summarize
        </button>
        {isLoading && <RxSymbol className="animate-spin" />}
      </div>
    </div>
  )
};

export default Input;
