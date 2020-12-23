import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const ChatMessage = (props) => {
  const { messages } = useContext(ChatContext);
  console.log(messages);
  return (
    <div className="bubble">
      <p className="bubble__name">Zsuzsa</p>
      <p className="bubble__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit ducimus odit.</p>
      <p className="bubble__time">2 minutes ago</p>
    </div>
  );
};

export default ChatMessage;
