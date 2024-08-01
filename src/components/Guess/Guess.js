import React from 'react';

import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return <>
    <p className="guess">
      {range(5).map(index =>
        <span key={index} className={`cell ${value ? result[index].status : ""}`}>
          {value ? value[index] : undefined}
          </span>
      )}
    </p>
  </>;
}

export default Guess;
