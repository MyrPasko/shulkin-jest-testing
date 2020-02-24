import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';

describe('guessWord actions dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';

  describe(`no guessed words`, () => {
    let store;
    const initialState = { secretWord };

    beforeEach(() => {
      store = storeFactory(initialState);
    });


    test(`updates state correctly for unsuccessful guess`, () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          guessWord: unsuccessfulGuess,
          letterMatchCount: 3,
        }]
      };
      const newState = store.getState();

      // console.log('[Expected state]', expectedState);
      // console.log('[Get state]', store.getState());

      expect(newState).toEqual(expectedState);
    });
    test(`updates state correctly for successful guess`, () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: []
      };
      const newState = store.getState();

      console.log('[Expected state]', expectedState);
      console.log('[Get state]', store.getState());

      expect(newState).toEqual(expectedState);
    });
  });

  describe(`some guessed words`, () => {
    test(`updates state correctly for unsuccessful guess`, () => {

    });
    test(`updates state correctly for successful guess`, () => {

    });
  });
});
