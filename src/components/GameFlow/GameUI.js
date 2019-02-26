import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = ({players}) => {
  console.log(players);
  if (players.length === 0) return null; //add loading message


var currentPlayer=players[0]



  const newCardOption = true;

  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      handlePlayerChange();
    }
    console.log(currentPlayer.cardPosition);
  };

  function handleLowClick(card1, card2){
    if (playerGuessLow(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      handlePlayerChange();
    }
    console.log(currentPlayer.cardPosition);
  };

  function handleFreezeClick(){

  };

  function handleNewClick(){
    // To create new API draw one card but cannot yet access.
  };

  function handlePlayerChange(){
    if(currentPlayer === players[0]){
      currentPlayer=players[1];
      //playerName = "Player 2"
      //console.log(playerName);
    }
    else currentPlayer=players[0];
    //playerName = "Player 1"
  }

  return (
    <div className="ui-container">
      <div className="player-info">
        <h4 className="player-id">player #</h4>
        <button type="button">
          Home
        </button>
      </div>
      <div className="buttons">
      <button type="button" onClick={() =>
        handleHighClick(
          currentPlayer.cards[currentPlayer.cardPosition].value,
          currentPlayer.cards[(currentPlayer.cardPosition) + 1].value)}>
        Higher
      </button>
      <button type="button" onClick={() => {handleLowClick(
        currentPlayer.cards[currentPlayer.cardPosition].value,
        currentPlayer.cards[(currentPlayer.cardPosition) + 1].value)}}>
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
