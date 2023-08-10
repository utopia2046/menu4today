import { isArray } from 'underscore';

export function getRandomElementFromArray(arr) {
    if (arr && isArray(arr) && arr.length > 0) {
        const index = Math.floor(Math.random() * arr.length);

        return arr[index];
    }

    return null;
}

export function getRandomElementWithWeights(arr, weights) {
    return null;
}
