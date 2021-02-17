import React, { useContext } from "react";
import RecipePreview from "../components/RecipePreview";
import { RecipeContext } from "../context/RecipeContext";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="home">
      <Searchbar />
      <div className="recipes">
        {" "}
        {recipes.map(recipe => (
          <RecipePreview
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            servings={recipe.servings}
            image={recipe.image}
            ingredients={recipe.extendedIngredients}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default Home;
