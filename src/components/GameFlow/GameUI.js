import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from "../models/high_low_logic";

const GameUI = (props) => {

  function handleHighClick(){

  };

  function handleLowClick(){

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
