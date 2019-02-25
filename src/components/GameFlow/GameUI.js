import React from "react";
import High_Low_Logic from '../models/high_low_logic.js';

const GameUI = (props) => {

  function handleClick(){

  }

if (!props.handinfo) return null

  return (
    <div>
      <h2>Controls here</h2>
      <button type="button" onclick={() => {handleClick()}}>
      Higher</button>
    </div>
  );


};



export default GameUI;
