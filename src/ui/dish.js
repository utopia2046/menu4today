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
                <span className='dish-name flex-expand'>{props.dish.name}</span>
                <span className='toggle-detail-button flex-fixed link-button' onClick={clickToggleDetails}>{showDetails ? '折叠' : '显示详情'}</span>
            </div>
            {showDetails && <Details dish={props.dish} />}
        </div>
    );
}

export default Dish;
