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
    }
    componentWillUpdate(){
    }
    componentWillReceiveProps(){
    }
    render() {
      let handlers = this.props.stuffActions;

      let buttons = ['7', '8', '9', 'C', '<-', '4', '5', '6', '*', '/', '1', '2', '3', '+', '-', '00', '0', '.', '=','i']

      return(
      <div>
        <div className='calculator'>
          <div className='display'>
            <p>{this.props.stuff.display}</p>
          </div>
          <div className='keypad'>
            {buttons.map((b)=><button className='btn' id={b} onClick={handlers.handleClick}>{b}</button>)}
          </div>
        
        </div>
      
      
      
      
        <div className='test'>
          <ul style={{'backgroundColor':this.props.stuff[1]}}>
              {this.props.stuff[0].map((x)=><li>{x}</li>)}
          </ul>
          <button className="btn" onClick={handlers.addItem}>Add</button>
        
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