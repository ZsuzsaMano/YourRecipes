import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginPage = () => {
  return (
    <div className = "loginpage">
      <Switch>
        <Route exact path = '/login'>
          <Login/>
        </Route>
        <Route path= '/login/register'>
          <Register/>
        </Route>
      </Switch>
    </div>
  );

};

export default LoginPage;
