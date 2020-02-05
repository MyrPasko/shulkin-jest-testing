import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for the congratulatory message.
 * @function Congrats
 * @param {object} props - React element properties.
 * @returns {JSX.Element}
 * */
const Congrats = ({ success }) => {

  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">Congratulations! You guessed the word!</span>
      </div>
    )
  }
  return (
    <div data-test="component-congrats" />
  )
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
