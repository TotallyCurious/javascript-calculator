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



      return(
      <div>
          <ul style={{'backgroundColor':this.props.stuff[1]}}>
              {this.props.stuff.map((x)=><li>{x}</li>)}
          </ul>
          <button className="btn" onClick={this.props.stuffActions.addItem}>Add</button>
      </div>
      )









    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
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