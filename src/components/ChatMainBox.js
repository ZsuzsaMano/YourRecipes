import React from 'react';
import ChatMessage from './ChatMessage';

const ChatMainBox = (props) => {
  return (
    <div className="mainbox">
    <div className="mainbox__body">
    <ChatMessage/>
    </div>
    </div>
  )
}

export default ChatMainBox;
