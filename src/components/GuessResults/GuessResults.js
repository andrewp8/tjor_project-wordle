import React from "react";

import Guess from "../Guess";
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessResults({ guesses }) {
  console.log("NOG", NUM_OF_GUESSES_ALLOWED);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index)=>{
        <p className="guess">
          <Guess guess={guess[index]}/>
        </p>
      })}
    </div>
  );
}

export default GuessResults;
