
import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import apiKey from '../apiKey';
import { RecipeContext } from '../context/RecipeContext';

const Recipe = () => {
  const { ingredients, setIngredients, recipe, setRecipe } = useContext(RecipeContext);
  const history = useHistory();
  const goBackHandle = ()=> {
    history.goBack();
  };

  let { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${apiKey}`);
      const data = await response.json();
      setRecipe(data);
    };

    getRecipe();
  }, []);

  useEffect(()=> {
    const getIngredients = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
      const data = await response.json();
      setIngredients(data.ingredients);
    };

    getIngredients();
  }, []);

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
      <div className="displayedRecipe__cook">
      <div className="displayedRecipe__ingredients">
      <h3>Ingredients</h3>
      <ol className="displayedRecipe__ingredientlist">
      {ingredients.map(ingredient=>
        <li key={ingredient.name}>{ ingredient.amount.metric.value + ' ' + ingredient.amount.metric.unit + ' ' + ingredient.name }</li>
      )}
      </ol>
      </div>
      <div className="displayedRecipe__preparation">
      <h3>Preparation</h3>
       <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </div>
      </div>
    </div>
  );
};

export default Recipe;
