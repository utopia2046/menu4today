import { union } from 'underscore';

function Steps(props) {
    const stepsList = props.steps.map((step, index) => {
        return {
            'text': step,
            'index': index,
        };
    });
    const stepsElements = stepsList.map(step =>
        <li key={step.index} className='dish-step'>{step.text}</li>
    );

    return (
        <div>
            <div className='dish-detail-label'>{props.title}</div>
            <ol>
                {stepsElements}
            </ol>
        </div>
    );
}

function Details(props) {
    const ingredients = union(props.dish.ingrds0, props.dish.ingrds1);
    const ingrdsEls = ingredients.map((ingrd, index) => 
        <li key={index} className='ingrd-item'>
            <span>{ingrd.name + (ingrd.optional ? ' (可选)': '')}</span>
            <span>{ingrd.amount}</span>
        </li>
    );
    const preStepsTitle = '预处理 (约 ' + props.dish.prepDurInMin + ' 分钟)';
    const cookStepsTitle = '操作步骤 (约 ' + props.dish.cookDurInMin + ' 分钟)';

    return (
        <div className='dish-details'>
            <div className='dish-detail-label'>食材</div>
            <ul>
                {ingrdsEls}
            </ul>

            {(props.dish.prepDurInMin > 0) && (props.dish.prepSteps.length > 0) && 
            <Steps title={preStepsTitle} steps={props.dish.prepSteps} />}

            <Steps title={cookStepsTitle} steps={props.dish.cookSteps}/>
        </div>
    );
}

export default Details;
