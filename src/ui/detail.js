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

function Comments(props) {
    return (
        <div>
            <div className='dish-detail-label'>附注</div>
            <div className='dish-detail-text'>{props.comments}</div>
        </div>
    );
}

function Tags(props) {
    const tagsList = props.tags.map((tag, index) => {
        return {
            'text': tag,
            'key': 'tag-' + index,
        };
    });
    const warningList = props.warnings.map((warning, index) => {
        return {
            'text': warning,
            'key': 'warning-' + index,
            'isWarning': true,
        };
    });
    const combinedList = union(tagsList, warningList);
    const tagElements = combinedList.map(tag =>
        <span key={tag.key} className={'dish-tag' + (tag.isWarning ? ' tag-warning': '')}>{tag.text}</span>
    );

    return (
        <div>
            <div className='dish-detail-label'>标签</div>
            <div className='dish-detail-text'>{tagElements}</div>
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
    const hasTags = props.dish.tags || props.dish.warning;

    return (
        <div className='dish-details'>
            <div className='dish-detail-label'>食材</div>
            <ul>
                {ingrdsEls}
            </ul>

            {(props.dish.prepDurInMin > 0) && (props.dish.prepSteps.length > 0) && 
            <Steps title={preStepsTitle} steps={props.dish.prepSteps} />}

            <Steps title={cookStepsTitle} steps={props.dish.cookSteps}/>

            {(props.dish.comments) && <Comments comments={props.dish.comments} />}

            {hasTags && <Tags tags={props.dish.tags} warnings={props.dish.warnings} />}
        </div>
    );
}

export default Details;
