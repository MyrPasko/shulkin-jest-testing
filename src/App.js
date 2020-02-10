import React, { Component } from 'react';
import './App.css';
import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats';

class App extends Component {
  state = {
    counter: 0,
    showError: false,
  };

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>JOJO!!!!!</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 2,
          }
        ]} />
      </div>
    );
  }
}

export default App;
