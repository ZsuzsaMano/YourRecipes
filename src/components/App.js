import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Recipe from './Recipe';
import Navbar from './Navbar';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import MyRecipes from '../pages/MyRecipes';
import Register from './Register';

import '../styles/App.min.css';
import RecipeContextProvider from '../context/RecipeContext';
import { LoginContext } from '../context/LoginContext';
import ChatContextProvider from '../context/ChatContext';

function App() {
  const { isLoggedin } = useContext(LoginContext);
  return (
    <RecipeContextProvider>

    < div className = "App" >
<Router>
<Navbar/>
    <Switch>
    <Route exact path='/' component = {Home}/>
      <Route exact path={`/recipe/:id`}>
    <Recipe/>
    </Route>
      <Route exact path="/register"render = {() => {
      return !isLoggedin ? <Register/> : <Redirect to="/chat"/>; }
        }/>
      <Route exact path="/login" render = {() => {
      return !isLoggedin ? <LoginPage/> : <Redirect to="/chat"/>; }
        }/>
      <ChatContextProvider>
      <Route exact path="/chat"  render = {() => {
      return isLoggedin ? <Chat/> : <Redirect to="/login"/>; }
        }/>
        </ChatContextProvider>
        <Route path="/myrecipes" render = {() => {
        return isLoggedin ? <MyRecipes/> : <Redirect to="/login"/>; }
          }/>
    </Switch>
</Router>

       < /div >

     </RecipeContextProvider>);
}

export default App;
