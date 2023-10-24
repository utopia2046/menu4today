import { nanoid } from 'nanoid';
import _ from 'underscore';
import consts from './consts';
import { breakfast } from './recipes/breakfast';
import { homemade } from './recipes/homemade';
import { porridge } from './recipes/porridge';
import { rice } from './recipes/rice';
import { wheat } from './recipes/wheat';
import { noodle } from './recipes/noodle';
import { soup } from './recipes/soup';
import { getRandomElementFromArray, getRandomElementsFromArray } from './utils';

function getDishesList(sourceList, filters = []) {
    const filteredList = [];

    sourceList.forEach((dish) => {
        let isFit = !dish.disabled;

        if (filters && (filters.length > 0)) {
            let testResults = _.map(filters, filter => {return testDishWithFilter(dish, filter)}, this);
            let result = _.reduce(testResults, (memo, test) => { return memo && test }, true);
            isFit = isFit && result;
        }
        
        if (isFit) {
            filteredList.push(dish);
        }
    });

    return filteredList;
}

function hasIngredInDish(dish, ingredientName) {
    const ingreds = _.union(dish.ingrds0, dish.ingrds1);

    for (let i = 0; i < ingreds.length; i++) {
        if (ingreds[i].name.includes(ingredientName)) {
            return true;
        }
    }

    return false;
}

function testDishWithFilter(dish, filter) {
    switch(filter.by) {
        case consts.filterBy.title:
            return ((filter.op === consts.filterOp.contains) && dish.name.includes(filter.value))
                || ((filter.op === consts.filterOp.notContain) && !dish.name.includes(filter.value));
        case consts.filterBy.ingredient:
            return ((filter.op === consts.filterOp.contains) && hasIngredInDish(dish, filter.value))
                || ((filter.op === consts.filterOp.notContain) && !hasIngredInDish(dish, filter.value));
        case consts.filterBy.category:
            return ((filter.op === consts.filterOp.contains) && dish.category.includes(filter.value))
                || ((filter.op === consts.filterOp.notContain) && !dish.category.includes(filter.value));
        case consts.filterBy.tag:
            return ((filter.op === consts.filterOp.contains) && _.contains(dish.tags, filter.value))
                || ((filter.op === consts.filterOp.notContain) && !_.contains(dish.tags, filter.value));
        case consts.filterBy.utensil:
            return ((filter.op === consts.filterOp.contains) && dish.utensil.includes(filter.value))
                || ((filter.op === consts.filterOp.notContain) && !dish.utensil.includes(filter.value));
        case consts.filterBy.byCookDur:
            return (dish.cookDurInMin + dish.prepDurInMin) < parseInt(filter.value);
        default:
            return false;
    }
}

function getDishNumber(peopleSize, mealType = consts.mealType.lunch) {
    switch (peopleSize) {
        case consts.peopleSize.single:
            return 1;
        case consts.peopleSize.small:
            return mealType === consts.mealType.lunch ? 2 : 1;
        case consts.peopleSize.medium:
            return mealType === consts.mealType.lunch ? 4 : 2;
        case consts.peopleSize.large:
            return mealType === consts.mealType.lunch ? 6 : 3;
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
    } else {
        const dishNumber = getDishNumber(peopleSize, mealType);
        let mainCandidates;

        if (mealType === consts.mealType.lunch) {
            mainCandidates = getDishesList(_.union(rice, wheat));

        } else if (mealType === consts.mealType.dinner) {
            mainCandidates = getDishesList(_.union(porridge, noodle));
        }

        const main = getRandomElementFromArray(mainCandidates);
        const caiCandidates = getDishesList(homemade, filters);
        const cai = getRandomElementsFromArray(caiCandidates, dishNumber);
        const dishes = _.union([main], cai);
        if ((peopleSize === consts.peopleSize.single) && (mealType === consts.mealType.lunch) {
            const soup = getRandomElementsFromArray(getDishesList(soup), 1);
            dishes = _.union(dishes, soup);
        }

        return getMealMenu(mealType, dishes);
    }
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
    getDishesList,
    getMeal,
    getMeals,
    getMenusIngredients,
};

export default RecipesRepo;
