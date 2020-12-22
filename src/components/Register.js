import React from 'react'
import PropTypes from 'prop-types'

const Register = (props) => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form className= "register__form" action="">
        <input type="text" placeholder = "name" required/>
        <input type="email" placeholder = "email" required/>
        <input type="password" placeholder = "password" required/>
        <input type="password" placeholder = "repeat password" required/>
        <button className="register__button">Save</button>
      </form>
    </div>
  )
}

export default Register;
