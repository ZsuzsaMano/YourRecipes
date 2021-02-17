import React from "react";
import ChatMainBox from "../components/ChatMainBox";
import ChatInput from "../components/ChatInput";

const Chat = props => {
  return (
    <div className="chatpage">
      <ChatMainBox />
      <ChatInput />
    </div>
  );
};

export default Chat;
