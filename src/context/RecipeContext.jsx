import React, { createContext, useState, useEffect } from "react";
import apiKey from "../apiKey";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [query, setQuery] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [nrOfRecipes, setNrOfRecipes] = useState(20);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, nrOfRecipes]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=${nrOfRecipes}&tags=${query}&apiKey=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <RecipeContext.Provider
      value={{
        ingredients,
        setIngredients,
        sidebar,
        setSidebar,
        recipe,
        setRecipe,
        recipes,
        setRecipes,
        query,
        setQuery,
        setNrOfRecipes,
        nrOfRecipes
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
