import React, { createContext, useState, useEffect } from 'react';
import firebase from '../firebase/firebase';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputmessage, setInputmessage] = useState('');

    const ref = firebase.firestore().collection('chat');

    //get messages from firestore for chat
    const getMessages = () => {
      setLoading(true);
      ref.orderBy('date').onSnapshot((querySnapshot)=> {
        const msgs = [];
        querySnapshot.forEach((doc)=> {
          msgs.push(doc.data());
        });
        setMessages(msgs);
        setLoading(false);
      });
    };

    useEffect(()=> {
      getMessages();
    }, []);

    return (
      <ChatContext.Provider value={{ ref, messages, inputmessage, setInputmessage }}>
        {props.children}
      </ChatContext.Provider>

    );
  };

export default ChatContextProvider;
