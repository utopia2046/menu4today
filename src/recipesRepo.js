import { union } from "underscore";
import { homemade } from "./recipes/home";

function getAllRecipes() {
    return union(homemade);
}

function getRecipes(number, category, filters) {
    return [];
}

function getMeal(peopleSize, mealType, filters) {
    return [];
}

function getMeals(peopleSize, meals, filters) {
    return [];
}

const RecipesRepo = {
    getAllRecipes,
    getRecipes,
    getMeal,
    getMeals
};

export default RecipesRepo;
