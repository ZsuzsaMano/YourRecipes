import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className = "login">
    <h1>Please Login to continue </h1>
    <form action="" className='login__form'>
    <input type="text"  placeholder="username" required/>
    <input type="password" placeholder="password" required/>
    <button className="submit">Login</button>
    </form>
    <Link to= 'login/register'>
   <p>New here? Create an account. </p>
   </Link>
    </div>
  );

};

export default Login;
