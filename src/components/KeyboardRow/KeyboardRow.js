import React from "react";

function KeyboardRow({ row, guessResults }) {
  function getStatusByLetter() {
    const statusObj={};
  
    guessResults.forEach(({letter, status})=>{
      const currentStatus = statusObj[letter];
      if(currentStatus === undefined){
        statusObj[letter] = status;
        return
      }
      const STATUS_RANKS = {
        correct: 1,
        misplaced: 2,
        incorrect: 3,
      };
  
      const currentStatusRank = STATUS_RANKS[currentStatus];
      const newStatusRank = STATUS_RANKS[status];
      console.log("letter: "+letter)
      console.log("currentStatusRank: " + currentStatusRank)
      console.log("newStatusRank: " + newStatusRank)
      if(newStatusRank < currentStatusRank){
        statusObj[letter] = status;
      }
    })
    return statusObj;
  }
  const statusByLetter = getStatusByLetter();
  return (
    <div className="guess">
      {row.map((letter, index) => (
        <span key={index} className={`cell ${statusByLetter[letter] ? statusByLetter[letter] : "unused"}`}>{letter}</span>
      ))}
    </div>
  );
}

export default KeyboardRow;
