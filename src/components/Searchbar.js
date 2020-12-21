import React, { useState, useContext } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const Searchbar = () => {
  const { query, setQuery } = useContext(RecipeContext);
  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchbar">
    <button className="bookmarksBtn">Bookmarks</button>
     <form  className = "search-form">
      <input className = "search-bar" type ="text" placeholder = "search..." value={query} onChange={updateQuery}/>
     </form>
     <button className="favoritsBtn">Favorites</button>
     </div>

  );
};

export default Searchbar;
