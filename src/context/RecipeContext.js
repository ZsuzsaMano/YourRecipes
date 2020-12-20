import React, {createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import apiKey from '../apiKey';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const [query, setQuery] = useState('vegetarian')
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
      const [sidebar, setSidebar]=useState(false);
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
    <RecipeContext.Provider value={{sidebar, setSidebar,recipe,setRecipe, recipes, setRecipes, query, setQuery}}>
    {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;
