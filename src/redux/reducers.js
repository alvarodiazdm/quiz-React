import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from "./actions";
import { CHANGE_QUESTION } from "./actions";
import { SUBMIT } from "./actions";
import { INIT_QUESTIONS } from "./actions";

let last = false;

function score(state = 0, action = {}){
    switch(action.type){
        default:
            return state;
    }
}
function finished(state = false, action={}){
    switch (action.type){
        default:
            return state;
    }
}
function currentQuestion(state = 0, action={}){
    switch (action.type){
        case CHANGE_QUESTION:
            //action.payload = action.payload + 1

            if(action.payload === 0){
                document.getElementById("anterior").disabled = true;
            }else{
                document.getElementById("anterior").disabled = false;
            }
            if(action.payload === 9){ //CAMBIAR ESTO POR INIT_QUESTIONS CUANDO LO IMPLEMENTEMOS
                document.getElementById("siguiente").disabled = true;
            }else {
                document.getElementById("siguiente").disabled = false;
            }
            return action.payload;
        default:
            return state;
    }
}
function questions(state = [], action={}){
    switch (action.type){
        case QUESTION_ANSWER:
            return state.map((question, i)=>{
                return {...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;
