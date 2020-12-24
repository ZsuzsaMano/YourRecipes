import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const ChatMessage = ({ message, name }) => {
  return (
    <div className="bubble">
      <p className="bubble__name">{name}</p>
      <p className="bubble__text">{message}</p>
      <p className="bubble__time">2 minutes ago</p>
    </div>
  );
};

export default ChatMessage;
