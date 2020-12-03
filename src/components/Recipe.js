import React from 'react';
import Ingredient from './Ingredient';
import ToggleFavorite from './ToggleFavorite'
import ToggleBookmark from './ToggleBookmark'
import style from '../styles/recipe.module.css';

const Recipe = ({title, calories, image, ingredients, key}) => {
  return(
  <div className ={style.recipe}>
  <div className ={style.header}>

    <ToggleFavorite/>
   <ToggleBookmark/>
   </div>
    <section className ={style.about}>
    <div className ={style.recipe__fotos}>
  <div className ={style.flip_box}>
<div className ={style.flip_box__inner}>
<div className ={style.flip_box__front}>
<img src={image} alt="{title}" className ={style.image} />
</div>
<div className ={style.flip_box__back}>
    <h2 className ={style.title} >{title}</h2>
    <aside className ={style.nutrition}>
    <p>Calories per serving:{' '+Math.floor(calories)}</p>
    </aside>
<p>Click to view recipe:
</p>
<a href="" target="_blank">Recipe</a>
</div>
</div>
</div>
</div>


  </section>
<Ingredient
ingredients={ingredients}
/>
  </div>
);
};

export default Recipe;
