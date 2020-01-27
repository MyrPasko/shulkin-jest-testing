import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  increaseCounterHandler = (e) => {
    e.preventDefault();
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  render() {
    const { counter } = this.state;


    return (
      <>
        <h1>The count is {counter}</h1>
        <button data-test="increment-button" onClick={(e) => this.increaseCounterHandler(e)}>Increment counter</button>
      </>
    );
  }
}

export default Counter;
