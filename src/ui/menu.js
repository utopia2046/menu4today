import consts from '../consts';
import Dish from './dish';

function MealMenu(props) {
    const dishElements = props.mealMenu.dishes.map(dish => 
        <Dish dish={dish} />
    );

    return (
        <div>
            <div>{consts.mealTypeDisplay[props.mealMenu.mealType]}</div>
            <div>{dishElements}</div>
        </div>
    );
}

function Menu(props) {
    const mealMenuElements = props.menus.map(mealMenu => 
        <MealMenu mealMenu={mealMenu} />
    );

    return (
        <div>{mealMenuElements}</div>
    );
}

export default Menu;
