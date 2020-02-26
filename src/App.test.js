import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { storeFactory } from '../test/testUtils';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();

  return wrapper;
}

describe(`redux props`, () => {
  test(`has 'success' piece of store as props`, () => {
    const success = true;
    const wrapper = setup({ success });

    const successProps = wrapper.instance().props.success;

    expect(successProps).toBe(success);
  });

  test(`has 'secretWord' piece of store as props`, () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });

    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
    ;
  });

  test(`has 'guessedWords' piece of store as props`, () => {
    const guessedWords = [
      {
        guessedWord: 'train',
        letterMatchCount: 3,
      }
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test(`has 'getSecretWord' action creator as props`, () => {
    const wrapper = setup();
    const getSecretWordProps = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProps).toBeInstanceOf(Function);
  });
});
// /**
//  * Factory function to create a ShallowWrapper for the App component
//  * @function setup
//  * @param {object} props - Component props specific to this setup.
//  * @param {object} state - Initial state for setup.
//  * @returns {ShallowWrapper}
//  * */
// const setup = (props = {}, state = null, initialState = {}) => {
//     const store = storeFactory(initialState);
//   const wrapper = shallow(<App {...props} store={store} />);
//
//   if (state) {
//     wrapper.setState(state);
//   }
//   return wrapper;
// };
//
// // const storeSetup = (initialState = {}) => {
// //     const wrapper = shallow(<App store={store} />).dive().dive();
// //
// //     return wrapper;
// // }
//
// /**
//  * Return ShallowWrapper containing mode(s) with the given data-test value.
//  * @function findByTestAttr
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
//  * @param {string} val - Value of data-test attribute for search.
//  * @returns {ShallowWrapper}
//  * */
// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };
//
// /**
//  * Find and setup button and return options to be tested
//  * @function getButtonSetupOptions
//  * @param {string} searchVal - Value of data-test attribute for search.
//  * @param {number} counter - State value "counter".
//  * @param {boolean} showError - State value "showError".
//  * @returns {object} counterDisplay, wrapper, counter - values setup tests.
//  * */
// const getButtonSetupOptions = (searchVal, counter = 0, showError = false) => {
//   const wrapper = setup(null, { counter, showError });
//   const button = findByTestAttr(wrapper, searchVal);
//
//   button.simulate('click');
//   wrapper.update();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//
//   return { counterDisplay, wrapper, counter };
// };
//
// test('renders without error', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, 'component-app');
//
//   // expect(component).toBeTruthy();
//   expect(appComponent.length).toBe(1);
// });


// test('renders counter display', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, 'counter-display');
//
//   expect(counterDisplay.length).toBe(1);
// });
//
// test('renders increment button', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'increment-button');
//
//   expect(button.length).toBe(1);
// });
//
// test('renders decrement button', () => {
//   const wrapper = setup();
//   const button = findByTestAttr(wrapper, 'decrement-button');
//
//   expect(button.length).toBe(1);
// });
//
// test('counter starts at 0', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('counter');
//
//   expect(initialCounterState).toBe(0);
// });
//
// test('showError starts at false', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('showError');
//
//   expect(initialCounterState).toBe(false);
// });
//
// test('clicking button increments the counter display', () => {
//   const { counterDisplay, counter } = getButtonSetupOptions('increment-button', 7);
//
//   expect(counterDisplay.text()).toContain(counter + 1);
// });
//
// test('clicking increment button set "showError" to false', () => {
//   const { wrapper } = getButtonSetupOptions('increment-button', 2);
//
//   expect(wrapper.state().showError).toBe(false);
// });
//
// test('clicking decrement button with "counter" > 0 is decrementing the counter display', () => {
//   const {
//     counterDisplay,
//     wrapper,
//     counter,
//   } = getButtonSetupOptions('decrement-button', 1);
//
//   expect(counterDisplay.text()).toContain(counter - 1);
//   expect(wrapper.state().showError).toBe(false);
//
// });
//
// test('clicking decrement button with "counter === 0" do not decrement counter', () => {
//   const {
//     counterDisplay,
//     counter,
//   } = getButtonSetupOptions('decrement-button', 0);
//
//   expect(counterDisplay.text()).toContain(counter);
// });
//
// test('clicking decrement button with "counter === 0" set "showError" to true', () => {
//   const { wrapper } = getButtonSetupOptions('decrement-button', 0);
//
//   expect(wrapper.state().showError).toBe(true);
// });
//
// test('renders error message', () => {
//   const counter = 0;
//   const showError = true;
//   const wrapper = setup(null, { counter, showError });
//   const button = findByTestAttr(wrapper, 'error-message');
//
//   expect(button.length).toBe(1);
// });

// test('renders without crashing', () => {
//     const wrapper = shallow(<App />);
//
//     expect(wrapper).toBeTruthy();
// });

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/hello world/i);
//
//   expect(linkElement).toBeInTheDocument();
// });
