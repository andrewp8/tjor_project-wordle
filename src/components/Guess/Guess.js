import React from 'react';

import { range } from '../../utils';
function Guess({guess}) {
  return <>
  {range(5).map((letter, index)=>{
    <span key={index}className="cell">{letter[index]}</span>
  })}
  </>;
}

export default Guess;
