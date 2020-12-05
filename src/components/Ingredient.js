import React from 'react';

const Ingredient = ({
  ingredients,
  setShowIngredients,
  showIngredients
}) => {


  const ulStyle = {
    display: showIngredients ? 'block' : 'none',
  }

  return ( <ul className = "ingredients"
    style = {ulStyle}
    onClick = {() => setShowIngredients(!showIngredients)
    } > {ingredients.map((ingredient, index) => ( <
        li key = {index}
        className = "ingredient" > {
          /* < input type = "checkbox"
                        id = {
                          index
                        }
                        className = "checkbox" / > < label htmlFor = {
                          index
                        } >


         < /label>*/
}
{ingredient.originalString}
 < /li > ))
    } </ul>
  );
};

export default Ingredient;
