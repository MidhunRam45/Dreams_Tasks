import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext,ThemeProvider } from './context/Context';
import './recipemanager.css';

const RecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (storedRecipes) {
      setRecipes(storedRecipes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = () => {
    if (title.trim() && description.trim()) {
      setRecipes([...recipes, { title, description }]);
      setTitle('');
      setDescription('');
    }
  };

  const removeRecipe = (index) => {
    const newRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(newRecipes);
  };

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);

  return (
    <div className={`App ${theme}`}>
      <div className='header'>
        <h1>Recipe Manager</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Recipe Title"
        />
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Recipe Description"
        />
        <button onClick={addRecipe}>Add Recipe</button>

      <main>
 
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeRecipe(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

const WrappedApp = () => (
  <ThemeProvider>
    <RecipeManager/>
  </ThemeProvider>
);

export default WrappedApp;
