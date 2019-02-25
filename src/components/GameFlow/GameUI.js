import React from "react";
import './CSS/GameUI.css';
import High_Low_Logic from '../models/high_low_logic.js';

const GameUI = (props) => {

  function playerGuessHigh(){
    playerGuessHigh();//pass card value
  };

  function playerGuessLow(){
    playerGuessLow();// pass card value
  };

  function handleFreezeClick(){

  };

  function handleNewClick(){

  };

  return (
    <div className="ui-container">
      <div className="player-info">
        <h4>Player #</h4>
        <button type="button">
          Home
        </button>
      </div>
      <div className="buttons">
      <button type="button" onClick={() => {playerGuessHigh()}}>
        Higher
      </button>
      <button type="button" onClick={() => {playerGuessLow()}}>
        Lower
      </button>
      <button type="button" onClick={() => {handleFreezeClick()}}>
        Freeze
      </button>
      <button type="button" onClick={() => {handleNewClick()}}>
        New
      </button>
      </div>
    </div>
  );

};

export default GameUI;
