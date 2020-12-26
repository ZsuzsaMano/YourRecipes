import React, { createContext, useState, useEffect } from 'react';
import apiKey from '../apiKey';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const [query, setQuery] = useState('vegetarian');
    const [recipes, setRecipes] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
      getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&tags=${query}&apiKey=${apiKey}`);
      const data = await response.json();
      console.log(data.recipes);
      setRecipes(data.recipes);
    };

    return (
      <RecipeContext.Provider value={{ ingredients, setIngredients, sidebar, setSidebar, recipe, setRecipe, recipes, setRecipes, query, setQuery }}>
    {props.children}
    </RecipeContext.Provider>
    );
  };

export default RecipeContextProvider;
