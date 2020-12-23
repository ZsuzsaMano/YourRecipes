import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase/firebase';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection('chat');

    const getMessages = () => {
      setLoading(true);
      ref.onSnapshot((querySnapshot)=> {
        const msgs = [];
        querySnapshot.forEach((doc)=> {
          msgs.push(doc.data());
        });
        setMessages(msgs);
        setLoading(false);
      });
    };

    useEffect(()=> {
      setMessages();
    }, []);
    return (
      <ChatContext.Provider value={{ messages }}>
        {props.children}
      </ChatContext.Provider>

    );
  };

export default ChatContextProvider;
