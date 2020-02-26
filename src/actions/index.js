import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
}

export function sendGuessWord(guessedWord, letterMatchCount) {
  return {
    type: actionTypes.GUESS_WORD,
    payload: {
      guessedWord,
      letterMatchCount,
    }
  }
}

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch(sendGuessWord(guessedWord, letterMatchCount));

    if (guessedWord === secretWord) {
      dispatch(correctGuess());
    }
  };
};

export const getSecretWord = () => {
    return (dispatch) => {
        axios.get('http://localhost:3030');
    }
}
