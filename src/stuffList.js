//* import connect method for connecting map-methods to main React component
import {connect} from 'react-redux';
//* import method to connect actions between react and redux
import {bindActionCreators} from 'redux';
//* Action list
import * as stuffActions from './actions/stuffActions';
import PropTypes from 'prop-types';
//* import React library
import React from 'react';

// * Main React Component here

// * This file connects to redux files.


class stuffList extends React.Component {
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;
        document.body.appendChild(script);
    }
    componentWillUpdate(){
    }
    componentWillReceiveProps(){
    }
    render() {
      let handlers = this.props.stuffActions;

      let buttons = [['7','seven'], ['8','eight'], ['9','nine'], ['C','clear'], ['<-','backspace'], ['4','four'], ['5','five'], ['6','six'], ['*','multiply'], ['/','divide'], ['1','one'], ['2','two'], ['3','three'], ['+','add'], ['-','subtract'], ['00','double-zero'], ['0','zero'], ['.','decimal'], ['=','equals'] ,['i','info']];

      return(
      <div>
        <div className='calculator'>
          <div className='display'>
            <p id='display'>{this.props.stuff.display}</p>
          </div>
          <div className='keypad'>
            {buttons.map((b)=><button className='btn' id={b[1]} onClick={handlers.handleClick}>{b[0]}</button>)}
          </div>
          <div className='info' style={{'display':this.props.stuff.infoFlag?'block':'none'}} >
            <p> Coded by TotallyCurious </p>
            <p> <a target='blank' href="https://twitter.com/totally_curious">Twitter</a> | <a target='blank' href="https://github.com/TotallyCurious/">Github</a> | <a target='blank' href="https://codepen.io/TotallyCurious/">Codepen</a> </p>
          </div>
        </div>
      </div>
      )
    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.objct
};

function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
       stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);