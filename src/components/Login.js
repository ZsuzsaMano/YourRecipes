import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Login = () => {
  const { name, setName, setIsLoggedIn } = useContext(LoginContext);

  const handleOnChangeName = e=>
  setName(e.target.value);

  const handleOnClickLogin = e => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className = "login">
    <h1>Please Login to continue </h1>
    <form action="" className='login__form'>
    <input type="text"  placeholder="username" value={name} onChange={handleOnChangeName} required/>
    <input type="password" placeholder="password" required/>
    <button className="submit" onClick = {handleOnClickLogin}>Login</button>
    </form>
    <Link to= '/register'>
   <p>New here? Create an account. </p>
   </Link>
    </div>
  );

};

export default Login;
