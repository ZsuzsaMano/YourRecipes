import React, {
  useState
} from 'react';
import Ingredient from './Ingredient';
import ToggleFavorite from './ToggleFavorite'
import ToggleBookmark from './ToggleBookmark'
import style from '../styles/recipe.module.css';

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  key
}) => {

  const [showIngredients, setShowIngredients] = useState(false)

  return ( <
    div className = {
      style.recipe
    } >
    <
    div className = {
      style.header
    } >


    <
    /div> <
    section className = {
      style.about
    } >
    <
    div className = {
      style.recipe__fotos
    } >
    <
    div className = "flip_box" >
    <
    div className = "flip_box__inner" >
    <
    div className = "flip_box__front" >
    <
    img src = {
      image
    }
    alt = "{title}"
    className = {
      style.image
    }
    /> < /
    div > <
    div className = "flip_box__back" >
    <
    div className = {
      style.icons
    } >
    <
    ToggleFavorite / >
    <
    ToggleBookmark / >
    <
    /div> <
    h2 className = {
      style.title
    } > {
      title
    } < /h2> <
    aside className = {
      style.nutrition
    } >
    <
    p > Calories per serving: {
      ' ' + Math.floor(calories)
    } < /p> < /
    aside > <
    button className = "toggleIngredient"
    onClick = {
      () => setShowIngredients(!showIngredients)
    } > Ingredients < /button> <
    button className = "goToRecipe" > Recipes < /button> < /
    div > <
    /div> < /
    div > <
    /div>


    <
    /section> <
    Ingredient ingredients = {
      ingredients
    }
    showIngredients = {
      showIngredients
    }
    setShowIngredients = {
      setShowIngredients
    }
    /> < /
    div >
  );
};

export default Recipe;