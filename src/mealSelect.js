function Meal() {
    return (
        <div className="meal-container">
            <span>
                <label>计划几顿？</label>
            </span>
            <span>
                <select defaultValue={"lunch"}>
                    <option value="breakfast">早饭</option>
                    <option value="lunch" >午饭</option>
                    <option value="dinner">晚饭</option>
                </select>
            </span>
            <span>
                <button>取消</button>
            </span>
        </div>
    );
}

function MealSelection() {
    return (
        <div className="meal-select-container">
            
            <Meal></Meal>
            <button>添加</button>
        </div>
    );
}

export default MealSelection;
