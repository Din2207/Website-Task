import React from 'react';
import './App.css';
import Meal from './Components/Meal';
import { Route,Routes } from 'react-router-dom';
import './Components/style.css';
import Recipe from './Components/Recipe';

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </>
  );
}

export default App;
