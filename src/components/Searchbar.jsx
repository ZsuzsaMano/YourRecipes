import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Searchbar = () => {
  const { query, setQuery, nrOfRecipes, setNrOfRecipes } = useContext(
    RecipeContext
  );
  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchbar">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="search recipe"
          value={query}
          onChange={updateQuery}
        />
        <input
          className="search-nr"
          type="number"
          placeholder="nr"
          value={nrOfRecipes}
          onChange={e => {
            setNrOfRecipes(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
