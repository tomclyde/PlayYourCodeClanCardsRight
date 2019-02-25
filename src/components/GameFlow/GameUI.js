import React from "react";
import './CSS/GameUI.css';
import High_Low_Logic from ""

const GameUI = (props) => {

  function playerGuessHigh(){

  };

  function playerGuessLow(){

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
      <button type="button" onclick={() => {playerGuessHigh()}}>
        Higher
      </button>
      <button type="button" onclick={() => {playerGuessLow()}}>
        Lower
      </button>
      <button type="button" onclick={() => {handleFreezeClick()}}>
        Freeze
      </button>
      <button type="button" onclick={() => {handleNewClick()}}>
        New
      </button>
      </div>
    </div>
  );

};

export default GameUI;
