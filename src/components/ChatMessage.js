import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';

import moment from 'moment';

const ChatMessage = ({ message, chatName, date }) => {
  const { name } = useContext(LoginContext);
  const dateFrom = moment(date).fromNow();
  return (
    <div className={chatName === name ? 'mybubble bubble' : 'bubble'}>
      <p className="bubble__name">{chatName === name ? 'Me' : chatName}</p>
      <p className="bubble__text">{message}</p>
      <p className="bubble__time">{dateFrom}</p>
    </div>
  );
};

export default ChatMessage;
