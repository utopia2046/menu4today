function MealSelection(props) {

    function addMeal() {
        props.onAddMeal();
    }

    const mealsList = props.meals.map(meal =>
        <div key={meal.id} className="meal-container query-line" >
            <span>
                <select defaultValue={meal.type} onChange={(evt) => props.onUpdateMeal(meal.id, evt.target.value)}>
                    <option value="breakfast">早饭</option>
                    <option value="lunch" >午饭</option>
                    <option value="dinner">晚饭</option>
                </select>
            </span>
            <span>
                <button className="query-button" onClick={() => props.onRemoveMeal(meal.id)}>取消</button>
            </span>
        </div>
    );

    return (
        <div className="meal-select-container section-container">
            <label className="section-label">计划几顿？</label>
            {mealsList}
            <button className="query-button" onClick={addMeal}>添加</button>
        </div>
    );
}

export default MealSelection;
