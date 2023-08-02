import { useState } from 'react';
import './App.css';
import FilterEdit from './filterEdit';
import MealSelection from './mealSelect';
import PeopleSelection from './peopleSelect';

function App() {
  const [people, setPeople] = useState('small');
  const [meals, setMeals] = useState([{id: 0, type: 'lunch'}]);
  const [filters, setFilters] = useState([]);

  function generateMenu() {}

  function getPeople(option) {
    setPeople(option);
  }

  function getMeals(meals) {
    setMeals(meals);
  }

  return (
    <div className="App">
      <h1>今天吃啥？</h1>

      <ul className="query-section">
        <li><PeopleSelection people={people} onPeopleChange={getPeople} /></li>
        <li><MealSelection meals={meals} onMealsChange={getMeals} /></li>
        <li><FilterEdit /></li>
      </ul>

      <div><button onClick={generateMenu}>生成</button></div>

      <div className="menu-section">
      </div>

      <div className="shopping-list-section">
        
      </div>
    </div>
  );
}

export default App;
