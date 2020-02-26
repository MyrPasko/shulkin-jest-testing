import { actionTypes } from '../actions';
const initialState = [];

const guessedWords = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default guessedWords;
