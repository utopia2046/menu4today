import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import FilterEdit from './filterEdit';
import MealSelection from './mealSelect';
import PeopleSelection from './peopleSelect';

function App() {
    const [people, setPeople] = useState('small');
    const [meals, setMeals] = useState([newMeal()]);
    const [filters, setFilters] = useState([]);

    function generateMenu() {}

    function getPeople(option) {
        setPeople(option);
    }

    function newMeal() {
        return {
            id: 'meal-' + nanoid(),
            type: 'lunch'
        }
    }

    function addMeal() {
        setMeals([...meals, newMeal()])
    }

    function updateMeal(id, newType) {
        const updatedMeals = meals.map((meal) => {
            if (id === meal.id) {
                return { ...meal, type: newType };
            }
            return meal;
        });
        setMeals(updatedMeals);
    }

    function removeMeal(id) {
        const remainingMeals = meals.filter((meal) => id !== meal.id);
        setMeals(remainingMeals);
    }

    return (
        <div className="App">
            <h1>今天吃啥？</h1>

            <ul className="query-section">
                <li>
                    <PeopleSelection
                        people={people} 
                        onPeopleChange={getPeople} 
                    />
                </li>
                <li>
                    <MealSelection 
                        meals={meals} 
                        onAddMeal={addMeal} 
                        onRemoveMeal={removeMeal} 
                        onUpdateMeal={updateMeal}
                    />
                </li>
                <li>
                    <FilterEdit />
                </li>
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
