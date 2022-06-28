import React, { useEffect, useRef } from "react";
import { Message } from "./Chatwindow";

interface Props {
  messages: Message[] | null;
}
export const MessageHistory: React.FC<Props> = ({ messages }) => {
  const historyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    historyRef.current?.scrollTo({ top: historyRef.current.scrollHeight });
  }, [messages]);
  return (
    <div className="message-history-wrapper" ref={historyRef}>
      {messages?.map((el, idx) => (
        <div
          key={idx}
          className={`${el.author === "user" ? "user-msg" : "bot-msg"} msg`}
        >
          {el.content}
        </div>
      ))}
    </div>
  );
};
