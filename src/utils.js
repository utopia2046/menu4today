import { isArray } from 'underscore';

export function getRandomElementFromArray(arr) {
    if (arr && isArray(arr) && arr.length > 0) {
        const index = Math.floor(Math.random() * arr.length);

        return arr[index];
    }

    return null;
}

export function getRandomElementsFromArray(arr, number) {
    if (arr && isArray(arr) && arr.length > 0 && number > 1 && number <= arr.length) {
        const randomArr = [];
        const arrCopy = [...arr];
        let index, element;

        for (let i = 0; i < number; i++) {
            index = Math.floor(Math.random() * arrCopy.length);
            element = arrCopy.splice(index, 1);
            randomArr.push(...element);
        }

        return randomArr;
    }

    return null;
}


export function getRandomElementWithWeights(arr, weights) {
    return null;
}
