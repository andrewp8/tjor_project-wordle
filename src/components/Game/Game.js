import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  //running || lost || won
  const [gameStatus, setGameStatus] = React.useState("running")
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuess = [...guesses, tentativeGuess]
    setGuesses(nextGuess);
    if(nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }else if(nextGuess === answer){
      setGameStatus('won')
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
