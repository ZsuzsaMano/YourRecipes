import React, { useEffect,  useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import RecipePreview from './RecipePreview';
import Recipe from './Recipe';
import Navbar from './Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import MyRecipes from '../pages/MyRecipes';

import '../styles/App.min.css';
import RecipeContextProvider from '../context/RecipeContext';

function App() {
  return (
    <RecipeContextProvider>
    < div className = "App" >

<Router>
<Navbar/>
    <Switch>
    <Route exact path='/' component = {Home}/>
    <Route path="/login" component= {Login}/>
      <Route path="/chat" component= {Chat}/>
        <Route path="/myrecipes" component= {MyRecipes}/>
      <Route path={`/recipe/:id`}>
      <Recipe/>
      </Route>
    </Switch>
</Router>

       < /div >
     </RecipeContextProvider>);
}

export default App;
