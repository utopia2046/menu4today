import { useState } from 'react';
import Details from './detail';

function Dish(props) {
    const [showDetails, setShowDetails] = useState(false);

    function clickToggleDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <div className='dish-container'>
            <div className='dish-title flex-container'>
                {props.showMoreInList && <span className='dish-id flex-expand'>{props.dish.id}</span>}
                <span className='dish-name flex-expand'>{props.dish.name}</span>
                {props.showMoreInList && <span className='dish-category flex-expand'>{props.dish.category}</span>}
                {props.showMoreInList && <span className='dish-utensil flex-expand'>{props.dish.utensil}</span>}
                {props.showMoreInList && <span className='dish-duration flex-expand'>{String(props.dish.prepDurInMin + props.dish.cookDurInMin) + ' 分钟'}</span>}
                <span className='toggle-detail-button flex-fixed link-button' onClick={clickToggleDetails}>{showDetails ? '折叠' : '显示详情'}</span>
            </div>
            {showDetails && <Details dish={props.dish} />}
        </div>
    );
}

export default Dish;
