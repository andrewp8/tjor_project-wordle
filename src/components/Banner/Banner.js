import React from 'react';

function SadMessage({ answer }) {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
}

function HappyMessage({ count }) {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {count} guesses</strong>.
    </p>
  </div>
}

function Banner({ isWon, count, answer }) {
  return <>
    {isWon ? <HappyMessage count={count} /> : <SadMessage answer={answer} />}
  </>;
}

export default Banner;
