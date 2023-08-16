import { nanoid } from 'nanoid';
import { isArray, map, union } from 'underscore';
import consts from './consts';
import { breakfast } from './recipes/breakfast';
import { homemade } from './recipes/home';
import { rice } from './recipes/rice';
import { getRandomElementFromArray, getRandomElementsFromArray } from './utils';

function getAllDishes() {
    return union(homemade);
}

function getRecipes(number, category, filters) {
    return [];
}

function getDishNumber(peopleSize) {
    switch (peopleSize) {
        case consts.peopleSize.single:
            return 1;
        case consts.peopleSize.small:
            return 2;
        case consts.peopleSize.medium:
            return 4;
        case consts.peopleSize.large:
            return 6;
        default:
            return 0;
    }
}

function getMealMenu(mealType, dishes) {
    return {
        key: 'menu-' + nanoid(),
        mealType: mealType,
        dishes: dishes,
    };
}

function getMeal(peopleSize, mealType, filters) {
    if (mealType === consts.mealType.breakfast) {
        return getMealMenu(mealType, [ getRandomElementFromArray(breakfast) ]);
    } else if (mealType === consts.mealType.lunch) {
        const dishNumber = getDishNumber(peopleSize);
        const dishes = [ getRandomElementFromArray(rice) ];

        return getMealMenu(mealType, dishes.concat(getRandomElementsFromArray(getAllDishes(), dishNumber)));
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
    getAllDishes,
    getRecipes,
    getMeal,
    getMeals
};

export default RecipesRepo;
