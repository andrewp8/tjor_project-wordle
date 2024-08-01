import React from 'react';
import Game from '../Game';
import Header from '../Header';
import Guesses from '../Guesses';

function App() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Guesses guesses={guesses}/>
        <Game guesses={guesses} setGuesses={setGuesses}/>
      </div>
    </div>
  );
}

export default App;
