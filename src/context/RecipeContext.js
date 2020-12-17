import React, {createContext, useState} from 'react'
import PropTypes from 'prop-types';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const [query, setQuery] = useState('vegetarian')

  return (
    <RecipeContext.Provider value={{query, setQuery}}>
    {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeContextProvider;
