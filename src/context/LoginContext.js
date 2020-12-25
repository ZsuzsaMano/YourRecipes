import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const history = useHistory();
  const auth = firebase.auth();

  const [name, setName] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [regname, setRegname] = useState('');
  const [regemail, setRegemail] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [regpassword2, setRegpassword2] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const sendRegistration = e => {
      e.preventDefault();
      if (regpassword === regpassword2) {
        auth.createUserWithEmailAndPassword(regemail, regpassword);
      }else {
        console.log('passwords dont match');
      }
    };

  const sendLogin = e => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(res=>
        setIsLoggedIn(true)
      ).catch(
        console.log('error, wrong password')
      );

    };

  return (
    <LoginContext.Provider value={{ sendLogin,  loginEmail, setLoginEmail, loginPassword, setLoginPassword, sendRegistration, name, setName, isLoggedin, setIsLoggedIn, regname, setRegname, regemail, setRegemail, regpassword, setRegpassword, regpassword2, setRegpassword2 }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
