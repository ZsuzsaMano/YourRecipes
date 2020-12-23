
import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import apiKey from '../apiKey';
import { RecipeContext } from '../context/RecipeContext';

const Recipe = () => {
  const { recipe, setRecipe } = useContext(RecipeContext);
  const history = useHistory();
  const goBackHandle = ()=> {
    history.goBack();
  };

  useEffect(() => {
    getRecipe();
  }, []);

  let { id } = useParams();

  const getRecipe = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
    setRecipe(data);
  };

  return (
    <div className="displayedRecipe">

        <button className="back" onClick={goBackHandle}>X</button>
        <h1> {recipe.title} </h1>
        <div className= "displayedRecipe__hero">
          <img src={recipe.image} alt={recipe.title}/>
          <aside>
          <h4> Preparation Time: {recipe.readyInMinutes} min</h4>
            {recipe.vegetarian ? 'vegetarian, ' : ''}
            {recipe.vegan ? 'vegan, ' : ''}
            {recipe.glutenFree ? 'gluten Free, ' : ''}
            {recipe.dairyFree ? 'dairy Free, ' : ''}
            {recipe.veryHealthy ? 'very Healthy, ' : ''}
            {recipe.cheap ? 'cheap, ' : ''}
            {recipe.veryPopular ? 'very Popular, ' : ''}
            {recipe.sustainable ? 'sustainable, ' : ''}

            <h4> Servings: {recipe.servings} </h4>
          </aside>
      </div>
    </div>
  );
};

export default Recipe;
