import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    showError: false,
  };

  incrementCounterHandler = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
      showError: false,
    }));
  };

  decrementCounterHandler = () => {
    this.setState(({ counter }) => {
      if (counter > 0) {
        return {
          counter: counter - 1,
          showError: false,
        }
      } else {
        return { showError: true }
      }
    });
  };

  render() {
    const { counter, showError } = this.state;

    return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">The count is {counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => this.incrementCounterHandler()}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          disabled={showError}
          onClick={() => this.decrementCounterHandler()}
        >Decrement button
        </button>
        {counter === 0 && showError && <h1
          data-test="error-message"
          style={{color: 'red'}}
        >
          Counter cannot be less than {counter}
        </h1>}
      </div>
    );
  }
}

export default App;
