import React from 'react';
import { range } from '../../utils.js'

/* {guesses.map(guess => (
  <p className="guess" key={crypto.randomUUID()}>
    {guess.split("").map(letter => (
      <span className="cell" key={crypto.randomUUID()}>{letter}</span>
    ))}
  </p>
))} */
function Guesses({ guesses }) {
  return <div className="guess-results">
    {range(6).map(guess =>(
      <p className="guess" key={crypto.randomUUID()}>
        {range(5).map(letter => (
          <span className="cell">{letter}</span>
        ))}
      </p>
    ))}
  </div >
}

export default Guesses;
