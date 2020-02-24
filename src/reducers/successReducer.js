import { actionTypes } from '../actions';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}
