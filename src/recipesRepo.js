import { nanoid } from 'nanoid';
import { isArray, map, union } from 'underscore';
import consts from './consts';
import { breakfast } from './recipes/breakfast';
import { homemade } from './recipes/home';
import { getRandomElementFromArray } from './utils';

function getAllRecipes() {
    return union(homemade);
}

function getRecipes(number, category, filters) {
    return [];
}

function getMeal(peopleSize, mealType, filters) {
    if (mealType === consts.mealType.breakfast) {
        return {
            key: 'menu-' + nanoid(),
            mealType: mealType,
            dishes: [getRandomElementFromArray(breakfast)],
        };
    }

    return {};
}

function getMeals(peopleSize, meals, filters) {
    if (meals && isArray(meals) && meals.length > 0 ) {
        const menus = map(meals, (meal) => {
            return getMeal(peopleSize, meal.type, filters);
        });

        return menus;
    }

    return [];
}

const RecipesRepo = {
    getAllRecipes,
    getRecipes,
    getMeal,
    getMeals
};

export default RecipesRepo;
