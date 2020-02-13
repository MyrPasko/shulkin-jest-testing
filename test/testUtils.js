import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} attrVal - Value of data-set attribute for search.
 * @returns {ShallowWrapper}
 * */
export const findByTestAttribute = (wrapper, attrVal) => {
  return wrapper.find(`[data-test='${attrVal}']`)
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmingProps,
    confirmingProps,
    'prop',
    component.name,
  );

  expect(propError).toBeUndefined();
};


