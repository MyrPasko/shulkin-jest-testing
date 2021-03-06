import successReducer from './successReducer';
import { actionTypes } from '../actions';

test(`should return default initial state of "false" when no action passed`, () => {
  const newState = successReducer(undefined, {});

  expect(newState).toBe(false);
});

test(`should return state of "true" upon receiving an action of type "CORRECT_GUESS"`, () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });

  expect(newState).toBe(true);
});
