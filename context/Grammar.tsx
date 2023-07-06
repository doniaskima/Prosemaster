'use client';

import { createContext, useState } from 'react';

type GrammarCtx = {
  outputText: string;
  setOutputText: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

export const GrammarContext = createContext<GrammarCtx>({} as GrammarCtx);

export const GrammarProvider = ({ children }: Props) => {
  const [outputText, setOutputText] = useState('');

  return (
    <GrammarContext.Provider value={{ outputText, setOutputText }}>
      {children}
    </GrammarContext.Provider>
  );
};
