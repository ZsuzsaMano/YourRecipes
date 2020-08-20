import React from 'react';

const Ingredient = ({ingredients}) => {

  return(
  <ul className="ingredients">{ingredients.map((ingredient, index)=>(
  <li key={index} className="ingredient"><input type="checkbox" id={index}className="checkbox"/><label htmlFor={index}>{ingredient.text}</label></li> ))}
  </ul>
);
};

export default Ingredient;
