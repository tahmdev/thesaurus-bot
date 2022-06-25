import React, { useState } from "react";
import { Brainshop } from "./Brainshop";
import { ChatInput } from "./ChatInput";
import { MessageHistory } from "./Messagehistory";

export interface Message {
  content: string;
  author: string;
}
interface Props {}
export const Chatwindow: React.FC<Props> = () => {
  const [messages, setMessages] = useState<Message[] | null>(null);
  return (
    <div className="chatwindow-wrapper">
      <MessageHistory messages={messages} />
      <ChatInput setMessages={setMessages} />
      <Brainshop messages={messages} setMessages={setMessages} />
    </div>
  );
};
