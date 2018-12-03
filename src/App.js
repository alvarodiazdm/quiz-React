import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Game from "./Game";

class App extends Component {
  render() {
    return (
        <div>
            <Game question = {this.props.questions[this.props.currentQuestion]}/>
        </div>
    );
  }
}
function mapStateToProps(state){
    return {
      ...state
    }
}
export default connect(mapStateToProps)(App);
