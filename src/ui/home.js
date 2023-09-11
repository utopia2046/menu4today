import { nanoid } from 'nanoid';
import { useState } from 'react';
import RecipesRepo from '../recipesRepo';
import FilterEdit from './filterEdit';
import IngredientsList from './ingredientsList';
import MealSelection from './mealSelect';
import Menu from './menu';
import Nav from './nav';
import PeopleSelection from './peopleSelect';

export default function Home() {
    const [people, setPeople] = useState('small');
    const [meals, setMeals] = useState([newMeal()]);
    const [filters, setFilters] = useState([]);
    const [menus, setMenus] = useState([]);
    const [ingreds, setIngreds] = useState([]);

    function generateMenu() {
        const newMenus = RecipesRepo.getMeals(people, meals, filters);

        setMenus(newMenus);

        const newIngreds = RecipesRepo.getMenusIngredients(newMenus);

        setIngreds(newIngreds);
    }

    function getPeople(option) {
        setPeople(option);
    }

    // #region meal functions
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
    // #endregion meal functions

    // #region filter functions
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
    // #endregion filter functions

    // render
    return (
        <div className='App'>
            <Nav />

            <h1>今天吃啥？</h1>

            <ul className='query-section'>
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

            <button className='generate-button' onClick={generateMenu}>生成</button>

            <div className='menu-section'>
                <Menu menus={menus} />
            </div>

            <div className='ingredients-list-section'>
                <IngredientsList ingreds={ingreds} />
            </div>
        </div>
    );
}
