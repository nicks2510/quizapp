import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
    START_QUIZ,
    CORRECT_ANS_COUNT
} from './types.js';

function quizReducer(state, action) {
    switch (action.type) {
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                currentAnswer: action.currentAnswer,
            };
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case SET_SHOW_RESULTS:
            return {
                ...state,
                showResults: action.showResults,
            };
        case SET_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            };
        case RESET_QUIZ:
            return {
                ...state,
                answers: [],
                currentQuestion: 0,
                currentAnswer: '',
                showResults: false,
                error: '',
            };
        case START_QUIZ:
            return {
                ...state,
                startQuizFlag: action.startQuizFlag,
            };
        case CORRECT_ANS_COUNT:
            return {
                ...state,
                correctAnsCount: action.correctAnsCount,
            };
        default:
            return state;
    }
}

export default quizReducer;
