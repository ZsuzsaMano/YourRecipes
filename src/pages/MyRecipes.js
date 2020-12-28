import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import RecipePreview from '../components/RecipePreview';

const MyRecipes = (props) => {
  const { myBookmarkedRecipies } = useContext(LoginContext);

  return (
  <div className = "myrecipes">
    < div className = "recipes" > {
    myBookmarkedRecipies.map((recipe) => (< RecipePreview
       key={recipe.id}
       id={recipe.id}
        title = {recipe.title}
        image = {recipe.image}
        ingredients ={[]}
        />))
      } < /div>
      </div>

  );
};

export default MyRecipes;
