import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Login = () => {
  const { sendLogin, name, setName, setIsLoggedIn, loginEmail, setLoginEmail, loginPassword, setLoginPassword } = useContext(LoginContext);

  const handleOnChangeName = e =>
  setName(e.target.value);

  const handleOnChangeEmail = e =>
  setLoginEmail(e.target.value);

  const handleOnChangePassword = e =>
  setLoginPassword(e.target.value);

  return (
    <div className = "login">
    <h1>Please Login to continue </h1>
    <form action="" className='login__form'>
      <input type="text"  placeholder="username" value={name} onChange={handleOnChangeName} required/>
      <input type="text"  placeholder="email" value={loginEmail} onChange={handleOnChangeEmail} required/>
      <input type="password" placeholder="password" value={loginPassword} onChange={handleOnChangePassword} required/>
      <button type="submit" className="submit" onClick = {sendLogin}>Login</button>
    </form>
    <Link to= '/register'>
   <p>New here? Create an account. </p>
   </Link>
    </div>
  );

};

export default Login;
