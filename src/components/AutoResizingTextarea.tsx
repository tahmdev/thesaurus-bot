import React, { TextareaHTMLAttributes, useEffect, useRef } from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows: number;
  maxRows: number;
}
export const AutoResizingTextarea: React.FC<Props> = ({
  minRows,
  maxRows,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const minHeight = useRef<number>(0);
  const maxHeight = useRef<number>(Infinity);
  const padding = useRef<number>(0);

  const handleResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${minHeight.current}px`;
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight - padding.current,
        maxHeight.current
      )}px`;
    }
  };

  useEffect(() => {
    handleResize();
    if (textareaRef.current) {
      const style = window.getComputedStyle(textareaRef.current);
      padding.current =
        parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      const unpaddedHeight = parseFloat(style.height) - padding.current;
      minHeight.current = unpaddedHeight * minRows;
      maxHeight.current = unpaddedHeight * maxRows;
    }
    handleResize();
  }, []);

  useEffect(() => {
    handleResize();
  }, [textareaRef.current?.value]);

  return <textarea ref={textareaRef} {...props}></textarea>;
};
