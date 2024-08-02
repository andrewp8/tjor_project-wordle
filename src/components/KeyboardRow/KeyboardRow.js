import React from 'react';

function KeyboardRow({row, guessResults}) {
  console.log("guessReuslt = " + guessResults)
  return <div className="guess">
    {row.map((letter, index)=>
      <span key={index} className="cell">{letter}</span>
    )}
  </div>;
}

export default KeyboardRow;
