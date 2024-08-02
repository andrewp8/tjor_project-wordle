import React from 'react';

import KeyboardRow from '../KeyboardRow'
import { keyboard } from '../../data';

function VisualKeyboard({guessResults}) {
  return <>{keyboard.map((row, index)=>
    <KeyboardRow key={index} row={row} guessResults={guessResults}/>
  )}</>;
}

export default VisualKeyboard;
