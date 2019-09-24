import React, { useContext } from 'react';
import { SET_CURRENT_ANSWER, SET_ERROR, CORRECT_ANS_COUNT } from '../reducers/types.js';
import QuizContext from '../context/QuizContext';

function Answer(props) {
    let classes = ['answer'];
    const { state } = useContext(QuizContext);
    const { currentQuestion, questions } = state;
    var { correctAnsCount } = state;
    const question = questions[currentQuestion];

    const handleClick = e => {
        props.dispatch({
            type: SET_CURRENT_ANSWER,
            currentAnswer: e.target.value,
        });
        props.dispatch({ type: SET_ERROR, error: '' });
        if (question.correct_answer === e.target.value)
            props.dispatch({ type: CORRECT_ANS_COUNT, correctAnsCount: ++correctAnsCount })
    };

    if (props.selected) {
        classes.push('selected');
    }
    return (
        <button value={props.answer}
            className={classes.join(' ')}
            onClick={handleClick} > {props.answer} </button>
    );
}

export default Answer;