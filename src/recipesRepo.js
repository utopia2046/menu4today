import { nanoid } from 'nanoid';
import _ from 'underscore';
import consts from './consts';
import { breakfast } from './recipes/breakfast';
import { homemade } from './recipes/home';
import { rice } from './recipes/rice';
import { getRandomElementFromArray, getRandomElementsFromArray } from './utils';

function getDishesFromList(sourceList) {
    return _.chain(sourceList)
    .union()
    .filter(dish => { return !dish.disabled; })
    .value();
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
        const fanCandidates = getDishesFromList(rice);
        const fan = getRandomElementFromArray(fanCandidates);
        const caiCandidates = getDishesFromList(homemade);
        const cai = getRandomElementsFromArray(caiCandidates, dishNumber);
        const dishes = _.union([fan], cai);

        return getMealMenu(mealType, dishes);
    }

    return {};
}

function getIngredients(dishes) {
    let ingredList = [];

    dishes.forEach(dish => {
        let ingrds = _.union(dish.ingrds0, dish.ingrds1);
        const dishIngrds = _.map(ingrds, (ingrd) => {
            return {...ingrd, 'dishName': dish.name};
        }, dish);
        ingredList = _.union(ingredList, dishIngrds);
    });

    return ingredList;
}

function getMenusIngredients(menus, sortByName = true) {
    const ingreds = _.reduce(menus, (memo, menu) => {
        return _.union(memo, getIngredients(menu.dishes));
    }, []);

    if (sortByName) {
        return _.sortBy(ingreds, 'name');
    }

    return ingreds;
}

function getMeals(peopleSize, meals, filters) {
    if (meals && _.isArray(meals) && meals.length > 0 ) {
        const menus = _.map(meals, (meal) => {
            return getMeal(peopleSize, meal.type, filters);
        });

        return menus;
    }

    return [];
}

const RecipesRepo = {
    getDishesFromList,
    getRecipes,
    getMeal,
    getMeals,
    getMenusIngredients,
};

export default RecipesRepo;
