import * as React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttribute, storeFactory } from '../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  // const wrapper = shallow(<Input store={store} />).dive().dive();
  const element = shallow(<Input store={store} />).dive().dive();

  return element;
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


// test(`should render correctly`, () => {
//  const wrapper = setup();
//  const component = findByTestAttribute(wrapper, 'component-input');
//
//  expect(component.length).toBe(1);
// });


