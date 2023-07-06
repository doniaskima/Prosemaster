'use client';
 
import { useContext, useRef } from 'react';
import CopyButton from '../CopyButton';
import { ParaphraseContext } from '../../context/paraphrase';
 

const ParaphraserOutput = () => {
  const { paraphrased } = useContext(ParaphraseContext);

  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-12 text-black rounded-2xl bg-white text-sm mt-8 mx-auto shadow p-4" style={{ width: '80%' }}>
      <div
        ref={outputRef}
        className="custom-scroll h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {paraphrased}
      </div>
      <div className="mb-12 flex items-center justify-end rounded-b-2xl bg-[#c198fc] py-2 px-4 md:mb-0">
        <CopyButton isDisabled={!paraphrased} ref={outputRef} />
      </div>
    </div>
  );
};

export default ParaphraserOutput;
