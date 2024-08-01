import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isOver, setIsOver] = React.useState(false);
  const [isWon, setIsWon] = React.useState(false)

  const handleSubmitGuess = (tentativeGuess) => {
    setGuesses([...guesses, tentativeGuess]);
    if ((guesses.length === 5) && (tentativeGuess != answer)) {
      setIsOver(true);
      setIsWon(false)
    };
    if(tentativeGuess === answer) {
      setIsOver(true);
      setIsWon(true)
  }
}
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isOver={isOver} />
      {isOver ? <Banner count={guesses.length} answer={answer} isWon={isWon}/> : ""}
    </>
  );
}

export default Game;
