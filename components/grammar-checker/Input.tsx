import { useState, useRef, useMemo, useContext } from 'react';
import axios from 'axios';
import { GrammarContext } from '../../context/Grammar';
import { usePreventRichText } from '../../helpers/usePreventRichText';
import { putCursorAtTheEndOf } from '../../helpers/helper';
import { RxSymbol } from 'react-icons/rx';

const MIN_LENGTH = 5;

const GrammarInput = () => {
  const [inputText, setInputText] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [errors, setErrors] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setOutputText } = useContext(GrammarContext);

  const inputRef = useRef<HTMLDivElement>(null);

  usePreventRichText(inputRef);

  const wordsCount = useMemo(() => inputText.split(' ').filter(i => i !== '').length, [inputText]);

  const editText = (errors: string[]) => {
    const currentText = inputRef.current!.innerText.split(' ');

    const markedWords = currentText?.map(word => {
      if (errors?.includes(word)) {
        return `<span class="text-red-700">${word}</span>`;
      } else {
        return word;
      }
    });

    const editedText = `<p>${markedWords!.join(' ')}</p>`;

    inputRef.current!.innerHTML = editedText;
    putCursorAtTheEndOf(inputRef);
  };

  const checkForErrors = async () => {
    if (inputText.trim().length < MIN_LENGTH) return;

    setIsChecking(true);

    try {
      const prompt = inputText;
      const response = await axios.post('/api/grammar-errors', { prompt });
      const data = response.data;
      const errorArr: string[] = data.response.words;

      editText(errorArr);
      setErrors(data.response.words);
    } catch (err) {
      console.log(err);
      setErrors([]);
    }

    setIsChecking(false);
  };

  const fixErrors = async () => {
    if (inputText.trim().length < MIN_LENGTH) return;

    setIsLoading(true);

    try {
      const prompt = inputText;
      const response = await axios.post('/api/correct-text', { prompt });
      const data = response.data;

      setOutputText(data.response);
    } catch (err) {
      setOutputText('Oops, an error occurred. Please try again later.');
      console.log(err);
    }

    setIsLoading(false);
  };

  const typingHandler = () => {
    if (!inputRef.current?.innerText.length) {
      setErrors([]);
    }

    setInputText(inputRef.current?.innerText!);
    clearTimeout(timer);
    setTimer(setTimeout(() => checkForErrors(), 2000));
  };

  return (
    <div className=" mb-12 rounded-2xl bg-white text-black text-sm mt-8 mx-auto shadow p-4" style={{ width: '80%' }}>
      <div
        ref={inputRef}
        className={`break-word custom-scroll ${
          !inputText.length && 'placeholder'
        } relative h-80 overflow-y-auto whitespace-pre-wrap px-4 pb-2 pt-4 focus:outline-none`}
        contentEditable={true}
        onKeyUp={typingHandler}
        placeholder="Write something cool..."
      />
      <div className="flex items-center gap-4 rounded-b-2xl bg-purple-500 py-2 px-4">
        <p>
          <span className="font-bold">{wordsCount}</span> <span>Words</span>
        </p>
        {!isChecking && (
          <p
            className={`
              ${errors.length && inputText.length > MIN_LENGTH && 'text-red-700'}
            `}
          >
            <span className="font-bold">
              {inputText.length > MIN_LENGTH ? errors.length : 0}{' '}
            </span>
            <span>Errors</span>
          </p>
        )}
        {isChecking && (
          <p className="flex items-center gap-2">
            <span>Checking for errors</span>{' '}
            <span>
              <RxSymbol className="animate-spin" />
            </span>
          </p>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button onClick={fixErrors} className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded focus:outline-none">
            Fix Me
          </button>
          {isLoading && <RxSymbol className="animate-spin" />}
        </div>
      </div>
    </div>
  );
};

export default GrammarInput;
