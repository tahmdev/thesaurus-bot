import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { UserContext } from "../App";
import { Message } from "./Chatwindow";

interface Props {
  messages: Message[] | null;
  setMessages: Dispatch<SetStateAction<Message[] | null>>;
}
export const Brainshop: React.FC<Props> = ({ messages, setMessages }) => {
  const uid = useContext(UserContext);
  useEffect(() => {
    if (messages?.at(-1)?.author === "user") {
      fetch(
        `https://saurus-bot.herokuapp.com/brainshop/${uid}/${
          messages?.at(-1)?.content
        }`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((json) => {
          setMessages((prev) =>
            prev
              ? [...prev, { content: json.cnt, author: "bot" }]
              : [{ content: json.cnt, author: "bot" }]
          );
        });
    }
  }, [messages]);
  return null;
};
