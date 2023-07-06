
import { RefObject, useEffect } from 'react';
import { preventRichText } from './helper';

export const usePreventRichText = (ref: RefObject<HTMLDivElement>) => {
    useEffect(() => {
      if (ref.current) {
        ref.current.spellcheck = false;
        ref.current.addEventListener('paste', preventRichText);
      }
  
      return () => {
        if (ref.current) {
          ref.current.removeEventListener('paste', preventRichText);
        }
      };
    }, []);
  };
  