'use client';

import { useState, useRef, useContext } from 'react';
import { RxSymbol } from 'react-icons/rx';
import { ArticleContext } from '../../context/Article';

const MIN_LENGTH = 5;

const ArticleInput = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setArticle } = useContext(ArticleContext);

  const topicRef = useRef<HTMLInputElement>(null);

  const getArticle = async (e: React.FormEvent) => {
    e.preventDefault();

    const topic = topicRef.current!.value;

    if (topic.trim().length < MIN_LENGTH) return;

    setIsLoading(true);

    try {
      const res = await fetch('/api/article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: topic }),
      });

      const data = await res.json();

      setArticle(data.response);
    } catch (err) {
      setArticle('Oops, an error occured. Please try again later!');
    }

    setIsLoading(false);
  };

  return (
    <div className="mb-12 text-black rounded-2xl bg-white text-sm mt-8 mx-auto shadow p-4" style={{ width: '80%' }}>
      <form
        onSubmit={getArticle}
        className="flex w-full items-center justify-center gap-4 sm:justify-start"
      >
        <input
          ref={topicRef}
          type="text"
          className="w-3/4 rounded-3xl px-2 py-1 pl-5 text-sm focus:outline-none"
          placeholder="RPG Video games"
        />
        <button
          onClick={getArticle}
          className="ml-auto rounded-full button font-semibold text-white"
        >
          Submit
        </button>
        {isLoading && <RxSymbol className="animate-spin" />}
      </form>
    </div>
  );
};

export default ArticleInput;