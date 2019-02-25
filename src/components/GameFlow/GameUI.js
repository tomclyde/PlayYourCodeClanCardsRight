import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = (props) => {
  console.log(props);
  if (props.player1.length === 0) return null; //add loading message
  if (props.player2.length === 0) return null;


  function handleHighClick(card1, card2){
    playerGuessHigh(card1, card2);//pass card value
  };

  function handleLowClick(){
    // playerGuessLow();// pass card value
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
      <button type="button" onClick={() =>
        handleHighClick(
          props.player1.cards[props.player1.cardPosition].value,
          props.player1.cards[(props.player1.cardPosition) + 1].value)}>
        Higher
      </button>
      <button type="button" onClick={() => {handleLowClick()}}>
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
