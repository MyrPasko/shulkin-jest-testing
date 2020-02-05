import * as React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttribute, checkProps } from '../../test/testUtils';

const defaultProps = {
  success: false,
};
/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<Congrats {...setupProps} />)
};

test(`should render without error`, () => {
  const wrapper = setup({success: false });
  const component = findByTestAttribute(wrapper, 'component-congrats');

  expect(component.length).toBe(1);
});

test(`should render no text when 'success' prop is false`, () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttribute(wrapper, 'component-congrats');

  expect(component.text()).toBe('');
});

test(`should render non-empty congrats message when 'success' prop is true`, () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, 'congrats-message');

  expect(message.text().length).not.toBe(0);
});

test(`does not throw a warning with expected props`, () => {
  const expectedProps = { success: false };

  checkProps(Congrats, expectedProps);
});
