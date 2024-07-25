import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({guesses, setGuesses}) {
  const [value, setValue] = React.useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newGuess = event.target.elements[0].value.toUpperCase();
    const newGuesses = [...guesses, newGuess]
    setGuesses(newGuesses);
    setValue("");
    console.info({ guess: newGuess});
  }
  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" value={value} onChange = {event=>setValue(event.target.value)} pattern="[A-Za-z]{5}"/>
  </form>;
}

export default Game;
