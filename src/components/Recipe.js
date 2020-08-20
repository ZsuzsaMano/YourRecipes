import React from 'react';
import Ingredient from './Ingredient';
import ToggleFavorite from './ToggleFavorite'
import ToggleBookmark from './ToggleBookmark'
import style from '../styles/recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return(
  <div className={style.recipe}>
    <h1>{title}</h1>
    <ToggleFavorite/>
   <ToggleBookmark/>
    <section className={style.about}>
  <img src={image} alt="{title}" className={style.image} />
  <aside className={style.nutrition}>
  <p>Calories per serving:{' '+Math.floor(calories)}</p>
  </aside>
  </section>
<Ingredient
ingredients={ingredients}/>
  </div>
);
};

export default Recipe;
