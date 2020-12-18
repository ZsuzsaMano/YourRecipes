import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import RecipePreview from '../components/RecipePreview';
import {RecipeContext} from '../context/RecipeContext';


const Home = () => {
  const {recipes, setRecipes, query, setQuery} = useContext(RecipeContext);


  return ( < div className = "recipes" > {
    recipes.map((recipe) => ( < RecipePreview
       key={recipe.id}
       id = {recipe.id}
        title = {recipe.title}
        servings = {recipe.servings}
        image = {recipe.image}
        ingredients = {recipe.extendedIngredients}
        />))
      } < /div>

  )
}

export default Home;
