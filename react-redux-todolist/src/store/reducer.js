import { useReducer } from 'react';
import { CHANGE_INPUT_VALUE_REDUX } from "./actionType";
const defaultState = {
    inputValue: "1111",
    list: []
}

const reducer = (state = defaultState, action) =>{
    if(action.type === CHANGE_INPUT_VALUE_REDUX){
        const newState = state;
        newState.inputValue = action.inputValue;
        return newState;
    }
    return state;
}

export default reducer;