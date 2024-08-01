import React, { useState } from "react";

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess.toUpperCase());
    setTentativeGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        style={{textTransform: "uppercase"}}
        onChange={(event) => {
          const nextGuess = event.target.value;
          setTentativeGuess(nextGuess);
        }}
        value={tentativeGuess}
      />
    </form>
  );
}

export default GuessInput;
