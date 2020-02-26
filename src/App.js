import React, { Component } from 'react';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './components/Input';

class App extends Component {
  state = {
    counter: 0,
    showError: false,
  };

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>JOJO!!!!!</h1>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const { success, guessedWords, secretWord } = state;

  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
