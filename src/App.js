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

    // meal functions
    function newMeal() {
        return {
            id: 'meal-' + nanoid(),
            type: 'lunch'
        }
    }

    function addMeal() {
        setMeals([...meals, newMeal()]);
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

    // filter functions
    function newFilter() {
        return {
            id: 'filter-' + nanoid(),
            by: 'byTitle',
            op: 'contains',
            value: ''
        }
    }

    function addFilter() {
        setFilters([...filters, newFilter()]);
    }

    function updateFilter(newFilter) {
        const updatedFilters = filters.map((filter) => {
            if (filter.id === newFilter.id) {
                return newFilter;
            }
            return filter;
        });
        
        setFilters(updatedFilters);
    }

    function removeFilter(id) {
        const remainingFilters = filters.filter((filter) => id !== filter.id);

        setFilters(remainingFilters);
    }

    // render
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
                    <FilterEdit
                        filters={filters}
                        onUpdateFilter={updateFilter}
                        onAddFilter={addFilter}
                        onRemoveFilter={removeFilter}
                    />
                </li>
            </ul>

            <button className="generate-button" onClick={generateMenu}>生成</button>

            <div className="menu-section">
            </div>

            <div className="shopping-list-section">
                
            </div>
        </div>
    );
}

export default App;
