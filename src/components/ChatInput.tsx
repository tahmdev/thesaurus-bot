import React, { Dispatch, SetStateAction, useState } from "react";
import { AutoResizingTextarea } from "./AutoResizingTextarea";
import { Message } from "./Chatwindow";

interface Props {
  setMessages: Dispatch<SetStateAction<Message[] | null>>;
}
export const ChatInput: React.FC<Props> = ({ setMessages }) => {
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages((prev) =>
      prev
        ? [...prev, { content: currentInput, author: "user" }]
        : [{ content: currentInput, author: "user" }]
    );
    setCurrentInput("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  return (
    <div className="chat-input-wrapper">
      <form onSubmit={handleSubmit}>
        <AutoResizingTextarea
          minRows={1}
          maxRows={4}
          className="aaaw"
          placeholder="Enter a message"
          onChange={handleChange}
          value={currentInput}
        />
        <button>send</button>
      </form>
    </div>
  );
};
