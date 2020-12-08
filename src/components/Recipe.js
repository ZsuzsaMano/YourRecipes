import React, {useEffect, useState} from 'react';
import apiKey from './apiKey';

const Recipe = ({query}) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, [query]);

 const id= 716320

  const getRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    setRecipe(data);
  };
  return(
    <div className="displayedRecipe">
        <h1> {recipe.title} </h1>
        <div className= "displayedRecipe__hero">
          <img src={recipe.image}/>
          <aside>
          <h4> Preparation Time: {recipe.readyInMinutes} min</h4>
            {recipe.vegetarian ? 'vegetarian, ' : ''}
            {recipe.vegan? 'vegan, ' : ''}
            {recipe.glutenFree? 'gluten Free, ' : ''}
            {recipe.dairyFree? 'dairy Free, ' : ''}
            {recipe.veryHealthy? 'very Healthy, ' : ''}
            {recipe.cheap? 'cheap, ':''}
            {recipe.veryPopular? 'very Popular, ' : ''}
            {recipe.sustainable? 'sustainable, ' : ''}

            <h4> Servings: {recipe.servings} </h4>
          </aside>
      </div>
    </div>
  )
}

export default Recipe;
