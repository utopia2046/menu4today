import { useState } from 'react';
import _ from 'underscore';

import Dish from './dish';
import Nav from './nav';

import { breakfast } from '../recipes/breakfast';
import { feast } from '../recipes/feast';
import { homemade } from '../recipes/homemade';
import { porridge } from '../recipes/porridge';
import { preCooked } from '../recipes/precooked';
import { rice } from '../recipes/rice';
import { wheat } from '../recipes/wheat';

export default function List() {

    const categories = [{
        key: 'homemade',
        items: homemade,
        text: '家常',
    }, {
        key: 'feast',
        items: feast,
        text: '大餐',
    }, {
        key: 'breakfast',
        items: breakfast,
        text: '早餐',
    }, {
        key: 'rice',
        items: rice,
        text: '米饭',
    }, {
        key: 'wheat',
        items: wheat,
        text: '面食',
    }, {
        key: 'porridge',
        items: porridge,
        text: '粥',
    }, {
        key: 'precooked',
        items: preCooked,
        text: '半成品',
    }];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const catElements = categories.map(category =>
        <span key={category.key}
            className={(selectedCategory.key === category.key) ? 'category-item is-selected' : 'category-item'}
            onClick={(evt) => changeCategory(category.key, evt)}>
            {category.text}
            </span>);

    const dishElements = selectedCategory.items.map(dish => 
        <Dish key={dish.id} dish={dish} showMoreInList={true} />
    );

    function changeCategory(key, evt) {
        const clickedCategory = _.find(categories, (item) => {return item.key === key});
        
        setSelectedCategory(clickedCategory);
    }

    return (
        <div className='list'>
            <Nav />

            <div className='categories'>
                {catElements}
            </div>

            <div>{dishElements}</div>
        </div>
    );
}
