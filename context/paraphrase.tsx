'use client';

import { createContext, useState } from 'react';

type ParaphraseCtx = {
  paraMode: ParaphrasingModeType;
  paraphrased: string;
  setParaMode: React.Dispatch<React.SetStateAction<ParaphrasingModeType>>;
  setParaphrased: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

export const ParaphraseContext = createContext<ParaphraseCtx>(
  {} as ParaphraseCtx
);

export const ParaphraseProvider = ({ children }: Props) => {
  const [paraMode, setParaMode] = useState<ParaphrasingModeType>('standard');
  const [paraphrased, setParaphrased] = useState('');

  return (
    <ParaphraseContext.Provider
      value={{ paraMode, setParaMode, paraphrased, setParaphrased }}
    >
      {children}
    </ParaphraseContext.Provider>
  );
};
