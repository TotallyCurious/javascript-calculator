import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import StuffList from './stuffList';

class App extends Component {
  render() {
      return (
        <div id="app">
          <StuffList />
        </div>
      );
    }
} 
export default App;
