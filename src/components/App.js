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
    <div className="navbar">
    <Navbar/>
     <form onSubmit={getSearch} className = "search-form">
      <input className = "search-bar" type ="text" value={search} onChange={updateSearch}/>
      <button type="submit" className = "search-button"> Search </button>
     </form>
     <button className="favoritsBtn">My Favorites</button>
     </div>
      <div className="recipes">
     {recipes.map(recipe=>(
       <Recipe
                key={recipe.recipe.label}
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
