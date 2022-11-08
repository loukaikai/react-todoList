import { useReducer } from 'react';
import {CHANG_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM} from './actionType'
const defaultState = {
    inputValue: '',
    list: [],
}

export const reducer = (state = defaultState, action) => {
    if (action.type === CHANG_INPUT_VALUE){
        const newStates = state;
        newStates.inputValue = action.value;
        return newStates;
    }

    if (action.type === ADD_LIST_ITEM) {
        const newState = state;
        newState.list.push(action.value);
        newState.inputValue = "";
        return newState;
    }

    if (action.type === DELETE_LIST_ITEM) {
        const newState = state;
        newState.list.splice(action.value, 1);
        return newState;
    }


    return state;
}