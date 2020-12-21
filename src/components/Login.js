import React from 'react';

const Login = () => {
  return (
    <div className = "login">
    <h1>Please Login to continue </h1>
    <form action="" className='login__form'>
    <input type="text"  placeholder="username" required/>
    <input type="password" placeholder="password" required/>
    <button className="submit">Login</button>
    </form>
   <p>New here? Create an account. </p>
    </div>
  );

};

export default Login;
