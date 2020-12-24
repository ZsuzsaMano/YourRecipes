import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import ChatMessage from './ChatMessage';

const ChatMainBox = (props) => {
    const { messages } = useContext(ChatContext);
    return (
      <div className="mainbox">
    <div className="mainbox__body">
      {messages.map(message=>
            <ChatMessage
              key = {message.id}
              name = {message.name}
              message = {message.message}/>
      )}

    </div>
    </div>
    );
  };

export default ChatMainBox;
