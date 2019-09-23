import React, {useContext} from 'react';
import Answer from './Answer';
import QuizContext from '../context/QuizContext';

function Answers() {
    const {state, dispatch} = useContext(QuizContext);
    const {currentAnswer} = state;

    return (
        <>
            <Answer
                letter="a"
                answer="True"
                dispatch={dispatch}
                selected={currentAnswer === 'True'}
            />
            <Answer
                letter="b"
                answer="False"
                dispatch={dispatch}
                selected={currentAnswer === 'False'}
            />
        </>
    );
}

export default Answers;
