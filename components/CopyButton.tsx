import { forwardRef } from 'react';

type Props = {
  isDisabled: boolean;
};

const CopyButton = forwardRef(
  ({ isDisabled }: Props, ref: React.ForwardedRef<HTMLDivElement>) => {
    const handleCopyText = () => {
      if (!navigator) return;
      if (ref !== null && typeof ref !== 'function') {
        navigator.clipboard.writeText(ref?.current?.innerText || '');
      }
    };

    // TODO: Success state
    return (
      <button
        onClick={handleCopyText}
        disabled={isDisabled}
        className="button"
      >
        Copy text
      </button>
    );
  }
);

export default CopyButton;
