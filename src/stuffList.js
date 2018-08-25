import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from './actions/stuffActions';
import PropTypes from 'prop-types';
import React from 'react';


class stuffList extends React.Component {  
  constructor(props){
    super(props);
  }
  renderData() {
  return <div style={{"background-color":"green", "width":"200px", "height":"100px","font-size":"2em"}}>Hello World!{this.props.stuffs}</div>;
  }
  render() {
    return (
      <div className="">
          {this.renderData()}
      </div>
    );
  }
}       
stuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuffs
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