import React, {useState, useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import apiKey from '../apiKey';
import RecipePreview from '../components/RecipePreview';
import {RecipeContext} from '../context/RecipeContext';


const Home = () => {
  const {query, setQuery} = useContext(RecipeContext);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=20&tags=${query}&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data.recipes);
    setRecipes(data.recipes);
  };


  return ( < div className = "recipes" > {
    recipes.map((recipe) => ( < RecipePreview id = {recipe.id}
        title = {recipe.title}
        servings = {recipe.servings}
        image = {recipe.image}
        ingredients = {recipe.extendedIngredients}
        />))
      } < /div>

  )
}

export default Home;
