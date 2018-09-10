//* import Action definitions
import * as types from './actionTypes';

//* methods for corresponding declared actions

export function addItem(e){
    e.preventDefault();
    return {type:types.ADD_ITEM,stuff:'orange'};
}