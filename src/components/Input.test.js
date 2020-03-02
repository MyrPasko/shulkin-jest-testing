import * as React from 'react';
import { shallow } from 'enzyme';

import Input, { UnconnectedInput } from './Input';
import { findByTestAttribute, storeFactory } from '../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();

  return wrapper;
};

describe(`render`, () => {
  describe(`word has not been guessed`, () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false };

      wrapper = setup(initialState);
    });

    test(`should render component without error`, () => {
      const component = findByTestAttribute(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test(`should render input box`, () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');

      expect(inputBox.length).toBe(1);
    });

    test(`should render submit button`, () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');

      expect(submitButton.length).toBe(1);
    });
  });

  describe(`word has been guessed`, () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: true };

      wrapper = setup(initialState);
    });

    test(`should render component without error`, () => {
      const component = findByTestAttribute(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test(`should not render input box`, () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box');

      expect(inputBox.length).toBe(0);
    });

    test(`should not render submit button`, () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button');

      expect(submitButton.length).toBe(0);
    });
  });
});

describe(`update state`, () => {

});

describe(`redux props`, () => {
  /** This is test to check, if Input element connected to redux has
   * 'success' piece of global store equals to correct hardcoded value */
  test(`has success piece of state as props`, () => {
    const success = true;
    const wrapper = setup({ success });

    const successProps = wrapper.instance().props.success;

    expect(successProps).toBe(success);
  });

  /** Is 'guessWord' action creator exists as a prop of 'Input' container */
  test(`'guessWord' action creator is a function prop`, () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe(`'guessWord' action creator call`, () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      success: false,
    };
    wrapper = shallow(<UnconnectedInput {...props} />);
    const submitButton = findByTestAttribute(wrapper, 'submit-button');

    // add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord };

    // Follow this order of simulating and getting of mock calls, cause of errors ))
    submitButton.simulate('click', {
      preventDefault() {
      }
    });

  });

  test(`should call 'guessWord' when the Submit button is click`, () => {
    const guessWordMockCount = guessWordMock.mock.calls.length;

    expect(guessWordMockCount).toBe(1);
  });

  test(`should call 'guessWord' wit input value as argument`, () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];

    expect(guessWordArg).toBe(guessedWord);
  });

  test(`should input box clears on submit`, () => {
    expect(wrapper.instance().inputBox.current.value).toBe('');
  });
});


// test(`should render correctly`, () => {
//  const wrapper = setup();
//  const component = findByTestAttribute(wrapper, 'component-input');
//
//  expect(component.length).toBe(1);
// });


