function IngredientsList(props) {
    const ingredsEls = props.ingreds.map((ingrd, index) => 
        <div key={index} className='ingred-line flex-container'>
            <input type='checkbox' defaultChecked={true} className='flex-fixed' />
            <span className='ingrd-name flex-expand'>{ingrd.name}</span>
            <span className='ingrd-amount flex-fixed'>{(ingrd.amount || '') + (ingrd.optional ? ' (可选)': '')}</span>
            <span className='ingrd-dishname flex-fixed'>{'[' + ingrd.dishName + ']'}</span>
        </div>
    );
    return (
        <div>
            <div className='menu-title'>食材清单</div>
            {ingredsEls}
        </div>
    );
}

export default IngredientsList;
