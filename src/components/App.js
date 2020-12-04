import React, {
  useEffect,
  useState
} from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import apiKey from './apiKey';
import '../styles/App.min.css';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('vegetarian')


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian&apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data.recipes);
    setRecipes(data.recipes);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return ( <
    div className = "App" >
    <
    Navbar getSearch = {
      getSearch
    }
    search = {
      search
    }
    updateSearch = {
      updateSearch
    }
    />

    <
    div className = "recipes" > {
      recipes.map((recipe) => ( <
        Recipe id = {
          recipe.id
        }
        title = {
          recipe.title
        }
        // calories = {
        //   recipe.calories
        // }
        image = {
          recipe.image
        }
        // ingredients = {
        //   recipe.ingredients
        // }
        />
      ))
    } <
    /div> < /
    div >
  );
}

export default App;