import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = ({players, activePlayer, handlePlayerChange, allocateNewCard, newCard, handleFreeze, handleButtonBackClick}) => {

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

var availableFreeze = true; // Only one FREEZE option permitted each game per player

  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
      if(currentPlayer.cardPosition === 4){
        gameOver();
      }
    }
    else {
          currentPlayer.cardPosition = 0;
          handlePlayerChange();
          }
  };

  function handleLowClick(card1, card2){
    if (playerGuessLow(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
      if(currentPlayer.cardPosition === 4){
        gameOver();
      }
    }
    else {
          currentPlayer.cardPosition = 0;
          handlePlayerChange();
          }
  };

  function handleFreezeClick(){
    if (!currentPlayer.cardPosition > 0) {
      document.getElementById("noFreeze").showModal();
      // alert("FREEZE option not permitted on 1st card!");
    } else if (!availableFreeze) {
      document.getElementById("myDialog").showModal();

      // alert("Only one FREEZE option per player per game!");
    } else {
    availableFreeze = false;

    for (var i = 0; i < currentPlayer.cardPosition; i++) {
      currentPlayer.cards[i].image = "images/playing-card-back.png";
    };
    // console.log(currentPlayer.cards[currentPlayer.cardPosition].image);
    }
    //unsure how to actually SHOW this via RENDER
    // currentPlayer.cards[currentPlayer.cardPosition].image = "images/playing-card-back.png";
    console.log(currentPlayer.cards[currentPlayer.cardPosition].image);
    console.log("FREEZE CHECK: ", currentPlayer.cardPosition);
    handlePlayerChange();
  };


  function handleNewClick(){
    if(currentPlayer.cardPosition === 0)
      {
        if (currentPlayer.newCardOption){
          allocateNewCard(currentPlayer);
          currentPlayer.newCardOption = false;
        }
        else {
          alert("New Card Option Already Used")
        }
      }
  };

  function gameOver(){
    // alert(`${playerNameLiteral} Wins!!!!!`)
    document.getElementById("winModal").showModal();
    players[0].newCardOption = true;
    players[1].newCardOption = true;
    players[0].cardPosition = 0;
    players[1].cardPosition = 0;
  }


  return (
    <div className="ui-container">
      <div className="player-info">
        <h4 className="player-id">{playerNameLiteral}</h4>
        <button type="button" onClick={handleButtonBackClick}>
          Go back
        </button>
      </div>
      <div className="buttons">
      <button type="button" onClick={() =>handleHighClick(
          currentPlayer.cards[currentPlayer.cardPosition].value,
          currentPlayer.cards[(currentPlayer.cardPosition) + 1].value)}>
        Higher
      </button>
      <button type="button" onClick={() => {handleLowClick(
        currentPlayer.cards[currentPlayer.cardPosition].value,
        currentPlayer.cards[(currentPlayer.cardPosition) + 1].value)}}>
        Lower
      </button>
      <button type="button" onClick={() => {handleFreezeClick(
        currentPlayer.cards[currentPlayer.cardPosition].image)}}>
        Freeze
      </button>
      <button type="button" onClick={() => {handleNewClick()}}>
        New
      </button>
      </div>
      <dialog id="winModal">{`${playerNameLiteral} Wins!!!!!`}</dialog>
      <dialog id="noFreeze">FREEZE option not permitted on 1st card!</dialog>
    </div>
  );

};

export default GameUI;
