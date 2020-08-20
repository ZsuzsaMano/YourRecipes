import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import '../styles/App.min.css';

function App() {
  const APP_ID = '2c15a1a3';
  const APP_KEY = 'ea62895795633e11ae58be941c08bf0d';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('vegetarian')

  useEffect(()=> {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&calories=591-722`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

    const updateSearch= e =>{
      setSearch(e.target.value)
    }

    const getSearch = e =>{
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }
  return (
    <div className="App">
    <Navbar
        getSearch = {getSearch}
        search = {search}
        updateSearch = {updateSearch}/>

      <div className="recipes">
     {recipes.map((recipe,index)=>(
        <Recipe
                key={'Recipe' + index}
                title={recipe.recipe.label}
                calories= {recipe.recipe.calories}
                image= {recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}/>
     ))}
     </div>
    </div>
  );
}

export default App;
