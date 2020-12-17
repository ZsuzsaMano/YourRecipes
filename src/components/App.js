import React, {useEffect,  useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecipeDetailed from './RecipeDetailed';
import Navbar from './Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import '../styles/App.min.css';
import RecipeContextProvider from '../context/RecipeContext'


function App() {
  return (
    <RecipeContextProvider>
    < div className = "App" >
    < Navbar/>
<Router>

    <Switch>
    <Route exact path='/' component = {Home}/>
    <Route path="/login" component= {Login}/>
    </Switch>
</Router>

       < /div >
     </RecipeContextProvider>);
  }

  export default App;
