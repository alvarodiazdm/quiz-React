import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import Game from "./Game";
import Result from "./Result"
import {questionAnswer} from "./redux/actions";
import {changeQuestion} from "./redux/actions";
import {submit} from "./redux/actions";
import {initQuestions} from "./redux/actions";

class App extends Component {
    render() {
        console.log(this.props);
        if (this.props.finished === false) {
        return (
            <div className="center">

                <Game question={this.props.questions[this.props.currentQuestion]}
                      image={this.props.questions[this.props.currentQuestion].attachment.url}
                      tips={this.props.questions[this.props.currentQuestion].tips}
                      onQuestionAnswer={(answer) => {
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                      onChangeQuestion={(a) => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion + a))
                      }}
                      score={this.props.score}
                      submit={() => {
                          this.props.dispatch(submit(this.props.questions))
                      }}
                />
            </div>
        );
        } else {
            return (
                <div>
                    <h1>You have finished the game!</h1>
                    Final score: {this.props.score}
                    <p>
                        <button onClick={()=>{
                            console.log("Try again!")
                            this.props.dispatch(initQuestions(this.props.questions))
                        }}>Try again</button>
                    </p>
                </div>
            );
        }
    }
}
function mapStateToProps(state){ //Con esta función recibimos el estado de Redux y lo tenemos en forma de props
    return {
        ...state
    }
}
export default connect(mapStateToProps)(App);
