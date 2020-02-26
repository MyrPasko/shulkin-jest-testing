import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';


describe(`getSecretWord action creator`, () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test(`should add response word to state`, () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: secretWord,
      })

    });
    store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState();

        expect(newState.secretWord).toBe(secretWord);
      })
  });
});

// Old unnecessary tests.
// describe('correctGuess', () => {
//   test(`should return an action with type 'CORRECT_GUESS`, () => {
//     const action = correctGuess();
//
//     expect(action).toEqual({
//       type: actionTypes.CORRECT_GUESS,
//     });
//   });
// });



