import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';

export const storeFactory = (initialState) => {
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);

  return createStoreWithMiddlewares(rootReducer, initialState);
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


