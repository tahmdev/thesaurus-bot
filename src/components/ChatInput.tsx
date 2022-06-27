import React, {
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  ChangeEventHandler,
  KeyboardEventHandler,
  FormEventHandler,
} from "react";
import { AutoResizingTextarea } from "./AutoResizingTextarea";
import { Message } from "./Chatwindow";

interface Props {
  setMessages: Dispatch<SetStateAction<Message[] | null>>;
}
export const ChatInput: React.FC<Props> = ({ setMessages }) => {
  const [currentInput, setCurrentInput] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (currentInput.trim().length > 0) {
      setMessages((prev) =>
        prev
          ? [...prev, { content: currentInput, author: "user" }]
          : [{ content: currentInput, author: "user" }]
      );
    }
    setCurrentInput("");
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="chat-input-wrapper">
      <form onSubmit={handleSubmit} ref={formRef}>
        <AutoResizingTextarea
          minRows={1}
          maxRows={6}
          className="aaaw"
          placeholder="Enter a message"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={currentInput}
        />
        <button>send</button>
      </form>
    </div>
  );
};
