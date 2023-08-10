import { useState } from 'react';

function Filter(props) {
    const [isText, setIsText] = useState(true);

    function filterByChange(evt) {
        if (evt && evt.target) {
            setIsText(evt.target.value !== 'byCookDur');
            props.onUpdateFilter({
                id: props.id,
                by: evt.target.value,
                op: props.op,
                value: props.value
            });
        }
    }

    function filterOpChange(evt) {
        if (evt && evt.target) {
            props.onUpdateFilter({
                id: props.id,
                by: props.by,
                op: evt.target.value,
                value: props.value
            });
        }
    }

    function filterValueChange(evt) {
        if (evt && evt.target) {
            props.onUpdateFilter({
                id: props.id,
                by: props.by,
                op: props.op,
                value: evt.target.value
            });
        }
    }

    return (
        <div key={props.id} className='filter-container query-line'>
            <span className='flex-fixed'>
                <select className='filter-by-select' defaultValue={props.by} onChange={(evt) => filterByChange(evt)}>
                    <option value='byTitle'>菜名</option>
                    <option value='byIngredient'>食材</option>
                    <option value='byCategory'>类别</option>
                    <option value='byTag'>标签</option>
                    <option value='byUtensil'>厨具</option>
                    <option value='byCookDur'>烹饪时长</option>
                </select>
            </span>
            <span className='flex-fixed'>
                <select className='filter-op-select' defaultValue={props.op} onChange={(evt) => filterOpChange(evt)}>
                    {isText && <option value='contains'>包含</option>}
                    {isText && <option value='notContain'>不包含</option>}
                    {!isText && <option value='lessThan'>少于</option>}
                </select>
            </span>
            <span className='flex-expand'>
                <input type='text' className='filter-value-input' value={props.value} onChange={(evt) => filterValueChange(evt)} />
            </span>
            <span className='flex-fixed'>
                <button className='query-button' onClick={() => props.onRemoveFilter(props.id)}>删除</button>
            </span>
        </div>
    );
}

function FilterEdit(props) {
    const filtersList = props.filters.map(filter => 
        <Filter
            key={filter.id}
            id={filter.id}
            by={filter.by}
            op={filter.op}
            value={filter.value}
            onUpdateFilter={props.onUpdateFilter}
            onRemoveFilter={props.onRemoveFilter}
        />
    );

    return (
        <div className='filter-edit-container section-container'>
            <label className='section-label'>有啥要求？</label>
            {filtersList}
            <button className='query-button' onClick={props.onAddFilter}>添加</button>
        </div>
    );
}

export default FilterEdit;
