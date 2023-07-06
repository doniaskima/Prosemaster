'use client';

import { createContext, useState } from 'react';

type SummarizerCtx = {
  summarized: string;
  setSummarized: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

export const SummarizeContext = createContext<SummarizerCtx>(
  {} as SummarizerCtx
);

export const SummarizeProvider = ({ children }: Props) => {
  const [summarized, setSummarized] = useState('');

  return (
    <SummarizeContext.Provider value={{ summarized, setSummarized }}>
      {children}
    </SummarizeContext.Provider>
  );
};
