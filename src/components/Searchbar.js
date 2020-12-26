import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const Searchbar = () => {
  const { query, setQuery } = useContext(RecipeContext);
  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchbar">
     <form  className = "search-form">
      <input className = "search-bar" type ="text" placeholder = "search..." value={query} onChange={updateQuery}/>
     </form>

     </div>

  );
};

export default Searchbar;
