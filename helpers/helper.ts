export const preventRichText = (e: ClipboardEvent): void => {
    e.preventDefault();
    const plainText = e.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, plainText);
  };
  
  export const putCursorAtTheEndOf = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.focus();
  
    const range = document.createRange();
    range.selectNodeContents(ref.current!);
    range.collapse(false);
  
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };
  
  export const trimNewLines = (str: string): string => {
    if (!str.startsWith('\n')) return str;
    else return trimNewLines(str.slice(1));
  };
  