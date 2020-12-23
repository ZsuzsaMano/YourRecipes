import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [name, setName] = useState('');
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <LoginContext.Provider value={{ name, setName, isLoggedin, setIsLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
