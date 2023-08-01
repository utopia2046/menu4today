import './App.css';
import FilterEdit from './filterEdit';
import MealSelection from './mealSelect';
import PeopleSelection from './peopleSelect';

function App() {
  function generateMenu() {}

  return (
    <div className="App">
      <h1>今天吃啥？</h1>

      <ul className="query-section">
        <li><PeopleSelection /></li>
        <li><MealSelection /></li>
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
