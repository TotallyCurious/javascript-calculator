//* import Action definitions
import * as types from './actionTypes';

//* methods for corresponding declared actions

export function handleClick(e){
    let b = e.currentTarget.innerText;
    let operators = ['+','-','*','/'];
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
            case 'i':
            return {type:types.BTN_INFO};
            default:
            break;
        }
    }
}