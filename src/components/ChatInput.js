import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/ChatContext';
import { LoginContext } from '../context/LoginContext';

const ChatInput = (props) => {
  const { inputmessage, setInputmessage, ref } = useContext(ChatContext);
  const { name } = useContext(LoginContext);

  const sendMessage = e => {
    e.preventDefault();
    ref.add({
      name: name,
      message: inputmessage,
    });
  };

  const handleOnChangeInputMessage = e => {
    setInputmessage(e.target.value);};

  return (
    <form action="" className="chatinput">
      <textarea name="chatinput" id="chatinput" value={inputmessage} onChange={handleOnChangeInputMessage}></textarea>
      <button type="submit" onClick={sendMessage}>Send</button>
    </form>
  );
};

export default ChatInput;
