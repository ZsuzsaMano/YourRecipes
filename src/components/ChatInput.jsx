import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import { LoginContext } from '../context/LoginContext';
import firebase from '../firebase/firebase';

const ChatInput = (props) => {
  const { inputmessage, setInputmessage, ref } = useContext(ChatContext);
  const { name } = useContext(LoginContext);

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  const sendMessage = (e) => {
    const dateNow = new Date().toUTCString();
    e.preventDefault();
    ref.add({
      name: name,
      message: inputmessage,
      date: dateNow,
      sentAt: timestamp(),
    });
    setInputmessage('');
  };

  const handleOnChangeInputMessage = (e) => {
    setInputmessage(e.target.value);
  };

  return (
    <form action="" className="chatinput">
      <textarea
        name="chatinput"
        id="chatinput"
        value={inputmessage}
        onChange={handleOnChangeInputMessage}
      ></textarea>
      <button type="submit" onClick={sendMessage}>
        Send
      </button>
    </form>
  );
};

export default ChatInput;
