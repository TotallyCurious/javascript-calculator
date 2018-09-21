import initialState from './initialState';
import {BTN_NUMBER,BTN_OPERATOR,BTN_CLEAR,BTN_DECIMAL,BTN_BACKSPACE,BTN_EVALUATE,BTN_INFO} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
      
        case BTN_NUMBER:
            if (newState.display.length >= 14 && !newState.startFlag){
                return newState;
            }
            if ((action.btn === '00'|| action.btn==='0') && newState.startFlag) {
                return newState;
            }
            else if(newState.startFlag){
                newState.display = '';
                newState.startFlag = false;
            }
            newState.operatorFlag = false;
            newState.display += action.btn;
            return newState;
                
        case BTN_OPERATOR:
            if(newState.operatorFlag){
                newState.display = newState.display.slice(0,-1);
                newState.display += action.btn;
                
            }
            if(newState.display.slice(-1)==='.'){
                newState.display = newState.display.slice(0,-1);
            }
            newState.decimalFlag =false;        
            if (newState.startFlag) {
                    newState.startFlag = false;
                }

            if(newState.operatorFlag){
                return newState;
            }
            else{
                newState.display += action.btn;
                newState.operatorFlag = true;
                return newState;              
            }
            
        case BTN_CLEAR:
            newState.startFlag = true;
            newState.operatorFlag = false;
            newState.decimalFlag = false;
            newState.display = '0';
            return newState;  
            
        case BTN_DECIMAL: 
            if (newState.startFlag) {
                newState.startFlag = false;
            }
            if (newState.display.length >= 13 || (newState.display.length>0 && newState.display.indexOf('.') >= 0 && newState.decimalFlag === true)) {
                return newState;
            }
            else{
                newState.display += '.';  
                newState.decimalFlag = true;
                return newState;
            }
            case BTN_BACKSPACE:
            if (newState.display.length <= 1){
                newState.startFlag = true;
                newState.display = '0';            
            }
            else{
                newState.display = newState.display.slice(0,-1);
            }
            return newState;
        case BTN_EVALUATE:
            newState.startFlag = true;
            newState.operatorFlag = false;
            try{
                newState.display =  eval(newState.display).toString().slice(0,14);
            }
            catch(e){
                newState.display = 'Syntax Error! ';
            }
            return newState;
        case BTN_INFO:
            if(newState.infoFlag){
                newState.infoFlag = false;
            }
            else{
                newState.infoFlag = true;
            }
            return newState;
        default:
            return state;

  }
}