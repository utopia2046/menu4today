import consts from '../consts';
import Dish from './dish';

function MealMenu(props) {
    const dishElements = props.mealMenu.dishes.map(dish => 
        <Dish key={dish.id} dish={dish} showMoreInList={false} />
    );

    return (
        <div>
            <div className='menu-title'>{consts.mealTypeDisplay[props.mealMenu.mealType]}</div>
            <div>{dishElements}</div>
        </div>
    );
}

function Menu(props) {
    const mealMenuElements = props.menus.map(mealMenu => 
        <MealMenu key={mealMenu.key} mealMenu={mealMenu} />
    );

    return (
        <div>{mealMenuElements}</div>
    );
}

export default Menu;
