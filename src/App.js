import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Game from "./Game";
import {questionAnswer} from "./redux/actions";

class App extends Component {
  render() {
      console.log(this.props)
    return (
        <div>
            <Game question = {this.props.questions[this.props.currentQuestion]}
                  onQuestionAnswer = {(answer) => {
                      this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                  }} />
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
