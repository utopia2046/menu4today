import { union } from "underscore";
import fastFoods from "./recipes/fast";

export const getAllRecipes = () => {
    return union(fastFoods);
}
