import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = ({players, activePlayer, handlePlayerChange}) => {

  if (players.length === 0) return null; //add loading message


  var currentPlayer=players[activePlayer]
  var playerName=activePlayer;
  const newCardOption = true;

  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      console.log("changing from UI");
      handlePlayerChange();
    }
    flipCards(currentPlayer.cardPosition);
  // console.log(currentPlayer.cardPosition);
  };

  function flipCards(cardIndex){
    if (activePlayer ===1){
    console.log("card2", cardIndex);
    var allCards = document.querySelectorAll(".flipper");
    allCards[cardIndex+5].classList.toggle("flip");
  }else{
    var allCards = document.querySelectorAll(".flipper");
    allCards[cardIndex].classList.toggle("flip");
  }
}

  function handleLowClick(card1, card2){
    if (playerGuessLow(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
    } else {
      currentPlayer.cardPosition = 0;
      // console.log(currentPlayer);
      console.log("changing from UI");
      handlePlayerChange();
    }
    // console.log(currentPlayer.cardPosition);
  };

  function handleFreezeClick(){

  };

  function handleNewClick(){
    // To create new API draw one card but cannot yet access.
  };

  // function handlePlayerChange(){
  //   if(currentPlayer === players[0]){
  //     currentPlayer=players[1];
  //     //playerName = "Player 2"
  //     //console.log(playerName);
  //   }
  //   else currentPlayer=players[0];
  //   //playerName = "Player 1"
  // }

  return (

    <div className="ui-container">
      <div className="player-info">
        <h4 className="player-id">{playerName}</h4>
        <button type="button"><span>
          Home
        </span></button>
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
