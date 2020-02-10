import * as React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const { guessedWords } = props;
  let contents;
  const guessedWordsMap = guessedWords.map((word, index) => (
    <tr data-test="guessed-word" key={index}>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ))

  if (!guessedWords.length) {
    contents = (
      <span data-test="guess-instructions">Find the word, you bastard!!!</span>
    )
  } else {
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
          <tr>
            <th>Guess</th>
            <th>Matching letters</th>
          </tr>
          </thead>
          <tbody>
          {guessedWordsMap}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  )
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
