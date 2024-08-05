import React from "react";

function KeyboardRow({ row, guessResults }) {
  const checkStatus = (iteratingLetter) => {
    const letterIndex = guessResults.findIndex(item=> item.letter === iteratingLetter);
    return letterIndex !== -1 ? guessResults[letterIndex].status : "unused";
   }
  function KeyboardCell({letter}){
    const className = checkStatus(letter)
    if(className === "correct"){
      
    }
    console.log(className === 'unused' ? "" : `letter ${letter} \t${className}`)
    return (
      <span className={`cell ${className}`}>
        {letter}
      </span>
    );
  }
  return (
    <div className="guess">
      {row.map((letter, index) => (
        <KeyboardCell key={index} letter={letter}/>
      ))}
    </div>
  );
}

export default KeyboardRow;
