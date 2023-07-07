 
import { useContext, useRef } from 'react';
 
import { GrammarContext } from '../../context/Grammar';
import CopyButton from '../CopyButton';


const GrammarOutput = () => {
  const { outputText } = useContext(GrammarContext);

  const outputRef = useRef<HTMLDivElement>(null);


  return (
    <div className="mb-12 rounded-2xl bg-white text-black text-sm mt-8 mx-auto shadow p-4" style={{ width: '80%' }}>
      <div
        ref={outputRef}
        className="custom-scroll h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4"
      >
        {outputText}
      </div>
      <div className="mb-12 flex items-center justify-end rounded-b-2xl bg-[#c198fc] py-2 px-4 md:mb-0">
        <CopyButton isDisabled={!outputText} ref={outputRef} />
      </div>
    </div>
  );
};

export default GrammarOutput;
