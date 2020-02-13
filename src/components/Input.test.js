import * as React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttribute, storeFactory } from '../../test/testUtils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  console.log('[DEBUG]', wrapper.debug());
};

setup();

let wrapper;
beforeEach(() => {
  // wrapper = setup();
});

describe(`render`, () => {
  describe(`word has not been guessed`, () => {
    test(`should render component without error`, () => {

    });

    test(`should render input box`, () => {

    });

    test(`should render submit button`, () => {

    });
  });

  describe(`word has been guessed`, () => {
    test(`should render component without error`, () => {

    });

    test(`should not render input box`, () => {

    });

    test(`should not render submit button`, () => {

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


