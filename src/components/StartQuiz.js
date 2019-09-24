import React from 'react'
import {START_QUIZ} from '../reducers/types.js';

export default function StartQuiz(props) {

    const handleClick = _ => {
        props.dispatch({
            type: START_QUIZ,
            startQuizFlag: false,
        });
    };
    return (
        <div className="container">
            <h1>WELCOME TO THE OPEN TRIVIA QUIZ</h1>
            <button className="btn btn-primary" onClick={handleClick}>StartQuiz</button>
        </div>
    )
}
