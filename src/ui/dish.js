import { useState } from 'react';
import { union } from 'underscore';

function Details(props) {
    const ingredients = union(props.dish.ingrds0, props.dish.ingrds1);
    const ingrdsEls = ingredients.map(ingrd => 
        <li>
            <span>{ingrd.name + (ingrd.optional ? ' (可选)': '')}</span>
            <span>{ingrd.amount}</span>
        </li>
    );
    const preStepsEls = props.dish.prepSteps.map(step =>
        <li>{step}</li>
    );
    const cookStepEls = props.dish.cookSteps.map(step =>
        <li>{step}</li>
    );

    return (
        <div className='dish-details'>
            <div>食材</div>
            <ul>
                {ingrdsEls}
            </ul>

            <div>预处理 (约 {props.dish.prepDurInMin} 分钟)</div>
            <ul>
                {preStepsEls}
            </ul>

            <div>操作步骤 (约 {props.dish.cookDurInMin} 分钟)</div>
            <ul>
                {cookStepEls}
            </ul>
        </div>
    );
}

function Dish(props) {
    const [showDetails, setShowDetails] = useState(false);

    function clickToggleDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <div className='dish-container'>
            <div className='dish-title'>
                <span className='dish-name'>{props.dish.name}</span>
                <span className='toggle-detail-button' onClick={clickToggleDetails}>{showDetails ? '折叠' : '显示详情'}</span>
            </div>
            {showDetails && <Details dish={props.dish} />}
        </div>
    );
}

export default Dish;
