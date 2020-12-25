import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import moment from 'moment';

const ChatMessage = ({ message, name, date }) => {

  const dateFrom = moment(date).fromNow();
  return (
    <div className="bubble">
      <p className="bubble__name">{name}</p>
      <p className="bubble__text">{message}</p>
      <p className="bubble__time">{dateFrom}</p>
    </div>
  );
};

export default ChatMessage;
