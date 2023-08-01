function Filter() {
    return (
        <div className="filter-container">
            <span><label>有啥要求？</label></span>
            <span>
                <select>
                    <option value="byTitle">菜名</option>
                    <option value="byIngredient">食材</option>
                    <option value="byCategory">类别</option>
                    <option value="byTag">标签</option>
                    <option value="byUtensil">厨具</option>
                    <option value="byCookDur">烹饪时长：实际操作时长</option>
                </select>
            </span>
            <span>
                <select>
                    <option value="includes">包含</option>
                    <option value="notIncl">不包含</option>
                    <option value="lessThan">少于</option>
                </select>
            </span>
            <span>
                <input type="text"></input>
            </span>
            <span>
                <button>删除</button>
            </span>
        </div>
    );
}

function FilterEdit() {
    return (
        <div className="filter-edit-container">
            <Filter />
            <button>添加</button>
        </div>
    );
}

export default FilterEdit;
