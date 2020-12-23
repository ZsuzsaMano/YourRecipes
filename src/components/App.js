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
    <Route exact path="/login" component= {LoginPage}/>
      <Route exact path= "/register">
        <Register/>
      </Route>
      <ChatContextProvider>
      <Route exact path="/chat"  render = {() => {
      return isLoggedin ? <Chat/> : <Redirect to="/login"/>; }
        }/>
        </ChatContextProvider>
        <Route path="/myrecipes" render = {() => {
        return isLoggedin ? <MyRecipes/> : <Redirect to="/login"/>; }
          }/>
        <Route exact path={`/recipe/:id`}>
      <Recipe/>
      </Route>

    </Switch>
</Router>

       < /div >

     </RecipeContextProvider>);
}

export default App;
