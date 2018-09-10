import initialState from './initialState';
import {ADD_ITEM} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case ADD_ITEM:
      newState = state.slice();
      newState.unshift(action.stuff)
      return newState;
    default:
      return state;
  }
}