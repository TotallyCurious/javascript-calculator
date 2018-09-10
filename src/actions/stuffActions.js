//* import Action definitions
import * as types from './actionTypes';

//* methods for corresponding declared actions

export function addItem(e){
    e.preventDefault();
    return {type:types.ADD_ITEM,stuff:'orange'};
}
export function handleClick(e){
    //e.preventDefault();
    let b = e.currentTarget.id;

    if (b == /[0-9]/g){
        return {type:types.BTN_NUMBER, btn:b};
    }
    else{
        return {type:types.BTN_ACTION, btn:b};
    }
}