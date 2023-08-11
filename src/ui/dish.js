import { useState } from 'react';
import Details from './detail';

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
