import moxios from 'moxios';

describe(`getSecretWord action creator`, () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    test(`should add response word to state`, () => {

    });
});
