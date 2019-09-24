import React, { useContext } from 'react';
import Answer from './Answer';
import QuizContext from '../context/QuizContext';

function Answers() {
    const { state, dispatch } = useContext(QuizContext);
    const { currentAnswer } = state;

    return (
        <div className="options">
            <Answer
                answer="True"
                dispatch={dispatch}
                selected={currentAnswer === 'True'}
            />
            <Answer
                answer="False"
                dispatch={dispatch}
                selected={currentAnswer === 'False'}
            />
        </div>
    );
}

export default Answers;
