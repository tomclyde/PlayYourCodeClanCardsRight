import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = ({players, activePlayer, handlePlayerChange, allocateNewCard, newCard}) => {

  if (players.length === 0) return null; //add loading message


  var currentPlayer=players[activePlayer]
  var playerName=activePlayer;
  var playerNameLiteral = null;
  if (playerName === 0){
    playerNameLiteral = "Player 1";
  }
  else {
    playerNameLiteral = "Player 2";
  }


  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      handlePlayerChange();
    }
  };

  function handleLowClick(card1, card2){
    if (playerGuessLow(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      handlePlayerChange();
    }
  };

  function handleFreezeClick(){

  };

  function handleNewClick(){
    if(currentPlayer.cardPosition === 0)
      {
        if (currentPlayer.newCardOption)
        {
        allocateNewCard();
        if (!newCard.cards) return null;
        currentPlayer.cards["0"] = newCard.cards["0"];
        currentPlayer.newCardOption = false;
        }
        else {
          alert("New Card Option Already Used")
        }
      }
  };


  return (
    <div className="ui-container">
      <div className="player-info">
        <h4 className="player-id">{playerNameLiteral}</h4>
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
