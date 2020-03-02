import React, { Component } from 'react';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './components/Input';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;

    return (
      <div data-test="component-app" className="container">
        <h1>JOJO!!!!!</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;

  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
