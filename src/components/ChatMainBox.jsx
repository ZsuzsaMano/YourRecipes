import React, { useContext, useRef, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import ChatMessage from "./ChatMessage";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";

const ChatMainBox = props => {
  const { messages, loading } = useContext(ChatContext);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <div className="mainbox">
      <div className="mainbox__body">
        {loading ? (
          <Loader />
        ) : (
          messages &&
          messages.map(message => (
            <ChatMessage
              key={uuidv4()}
              chatName={message.name}
              message={message.message}
              date={message.date}
            />
          ))
        )}
      </div>
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatMainBox;
