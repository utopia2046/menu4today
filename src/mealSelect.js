function Meal() {
    return (
        <div className="meal-container">
            <select defaultValue={"lunch"}>
                <option value="breakfast">早饭</option>
                <option value="lunch" >午饭</option>
                <option value="dinner">晚饭</option>
            </select>
            <button>取消</button>
        </div>
    );
}

function MealSelection() {
    return (
        <div className="meal-select-container">
            <label>计划几顿？</label>
            <Meal></Meal>
            <button>添加</button>
        </div>
    );
}

export default MealSelection;
