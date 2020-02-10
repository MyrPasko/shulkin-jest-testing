import * as React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';
import { findByTestAttribute, checkProps } from '../../test/testUtils';

const defaultProps = {
  guessedWords: [{
    guessedWord: 'train',
    letterMatchCount: 3,
  }],
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<GuessedWords {...setupProps} />)
};

test(`does not throw a warning with expected props`, () => {
  checkProps(GuessedWords, defaultProps);
});

describe(`if there are no words guessed`, () => {
  let wrapper;
  beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
  });

  test(`should render without an error`, () => {
    const component = findByTestAttribute(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  test(`should render instructions to guess the words`, () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions');

    expect(instructions.text().length).not.toBe(0);
  });
});

describe(`if there are words guessed`, () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: 'one',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'two',
      letterMatchCount: 2,
    },
    {
      guessedWord: 'three',
      letterMatchCount: 3,
    },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  });

  test(`should render without an error`, () => {
    const component = findByTestAttribute(wrapper, 'component-guessed-words');

    expect(component.length).toBe(1);
  });

  test(`should render "guessed word" sections`, () => {
    const guessedWords = findByTestAttribute(wrapper, 'guessed-words');

    expect(guessedWords.length).toBe(1);
  });

  test(`should render correct number of guessed words`, () => {
    const guessedWordsNodes = findByTestAttribute(wrapper, 'guessed-word');

    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});
