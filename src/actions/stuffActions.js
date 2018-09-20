//* import Action definitions
import * as types from './actionTypes';

//* methods for corresponding declared actions

export function addItem(e){
    e.preventDefault();
    return {type:types.ADD_ITEM,stuff:'orange'};
}
export function handleClick(e){
    let b = e.currentTarget.id;
    let operators = ['+','-','*','/'];
    console.log(b >=0);

    if (b >=0){
        return {type:types.BTN_NUMBER, btn:b};
    }
    else if(operators.includes(b)){
        return {type:types.BTN_OPERATOR, btn:b};
    }
    else{
        switch(b){
            case 'C':
            return {type:types.BTN_CLEAR};
            case '.':
            return {type:types.BTN_DECIMAL};
            case '<-':
            return {type:types.BTN_BACKSPACE};
            case '=':
            return {type:types.BTN_EVALUATE};
            default:
            break;
        }
    }
}