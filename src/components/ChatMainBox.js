import React from 'react';
import PropTypes from 'prop-types';
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
