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
