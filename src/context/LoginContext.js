import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const history = useHistory();
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [name, setName] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [regname, setRegname] = useState('');
  const [regemail, setRegemail] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [regpassword2, setRegpassword2] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const sendRegistration = e => {
      e.preventDefault();
      if (regpassword === regpassword2) {
        auth.createUserWithEmailAndPassword(regemail, regpassword).then(function (result) {
          return result.user.updateProfile({
            displayName: regname,
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        console.log('passwords dont match');
      }
    };

  auth.onAuthStateChanged(user=> {
    if (user) {
      setIsLoggedIn(true);
      setName(user.displayName);
    }else {
      setIsLoggedIn(false);
    }});

  const sendLogin = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(loginEmail, loginPassword);
    };

  const signOut = e => {
      e.preventDefault();
      firebase.auth().signOut();
    };

  return (
    <LoginContext.Provider value={{ signOut, sendLogin,  loginEmail, setLoginEmail, loginPassword, setLoginPassword, sendRegistration, name, setName, isLoggedin, setIsLoggedIn, regname, setRegname, regemail, setRegemail, regpassword, setRegpassword, regpassword2, setRegpassword2 }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
