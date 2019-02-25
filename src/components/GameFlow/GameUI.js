import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = (props) => {
  console.log(props);
  if (props.player1.length === 0) return null; //add loading message
  if (props.player2.length === 0) return null;

  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (props.player1.cardPosition < 4)) {
      props.player1.cardPosition +=1;
    } else {
      props.player1.cardPosition = 0;
    }
    console.log(props.player1.cardPosition);
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
<<<<<<< HEAD
      <button type="button" onClick={() => {playerGuessHigh()}}>
        Higher
      </button>
      <button type="button" onClick={() => {playerGuessLow()}}>
=======
      <button type="button" onClick={() =>
        handleHighClick(
          props.player1.cards[props.player1.cardPosition].value,
          props.player1.cards[(props.player1.cardPosition) + 1].value)}>
        Higher
      </button>
      <button type="button" onClick={() => {handleLowClick()}}>
>>>>>>> master
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
