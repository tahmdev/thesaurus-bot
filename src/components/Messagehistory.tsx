import React from "react";
import { Message } from "./Chatwindow";

interface Props {
  messages: Message[] | null;
}
export const MessageHistory: React.FC<Props> = ({ messages }) => {
  return (
    <div className="message-history-wrapper">
      {messages?.map((el, idx) => (
        <div key={idx}> {el.content} </div>
      ))}
    </div>
  );
};
