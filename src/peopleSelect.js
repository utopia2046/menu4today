function PeopleSelection() {
    return (
        <div className="people-select-container">
            <label for="people-select">几个人？</label>
            <select name="people" id="people-select" defaultValue={"small"}>
                <option value="single">一人食：一个人也要好好吃饭</option>
                <option value="small">小家日常 (2 ~ 4 人)： 一羹一饭见巧思</option>
                <option value="medium">朋友小聚 (5 ~ 7 人)：秀出你的实力吧</option>
                <option value="large">节庆家宴 (8 ~ 10 人)：家庭大厨的终极战场</option>
            </select>
        </div>
    );
}

export default PeopleSelection;
