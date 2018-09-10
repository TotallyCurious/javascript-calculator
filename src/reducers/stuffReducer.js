import initialState from './initialState';
import {ADD_ITEM,BTN_NUMBER,BTN_ACTION} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_ITEM:
        newState[0].push(action.stuff)
        return newState;

    case BTN_NUMBER:
        console.log(action);
        newState[0][0]=action.btn;
        return newState;

    case BTN_ACTION:
        newState.display += action.btn;
        return newState;  

    default:
        return state;
  }
}