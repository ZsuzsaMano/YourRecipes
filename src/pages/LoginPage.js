import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className = "loginpage">
      <Switch>
        <Route exact path = '/login'>
          <Login/>
        </Route>
      </Switch>
    </div>
  );

};

export default LoginPage;
