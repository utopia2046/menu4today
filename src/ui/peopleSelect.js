function PeopleSelection(props) {

    function onSelectChange(evt) {
        if (evt && evt.target) {
            props.onPeopleChange(evt.target.value);
        }
    }

    return (
        <div className='people-select-container section-container'>
            <label className='section-label'>几个人？</label>
            <select name='people' className='people-select' defaultValue={props.people} onChange={onSelectChange}>
                <option value='single'>一人食：一个人也要好好吃饭</option>
                <option value='small'>小家日常 (2 ~ 4 人)： 一羹一饭见巧思</option>
                <option value='medium'>朋友小聚 (5 ~ 7 人)：秀出你的实力吧</option>
                <option value='large'>节庆家宴 (8 ~ 10 人)：家庭大厨的终极战场</option>
            </select>
        </div>
    );
}

export default PeopleSelection;
