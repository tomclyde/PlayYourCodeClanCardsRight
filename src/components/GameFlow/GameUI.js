import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = (
    {players, activePlayer, handlePlayerChange,
    allocateNewCard, newCard, handleFreeze,
    handleButtonBackClick, allocateNewCards}) => {

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

  const newCardOption = true;

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

function flipCardsBack(cardIndex){
  if (activePlayer ===1){
  var allCards = document.querySelectorAll(".flipper");

  for (var i = 0; i <= cardIndex; i++) {
      allCards[i+5].classList.toggle("flip");
    };

}else{
  var allCards = document.querySelectorAll(".flipper");

  for (var i = 0; i <= cardIndex; i++) {
      allCards[i].classList.toggle("flip");
    };

}
}

  function handleHighClick(card1, card2){
    if (playerGuessHigh(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
      if(currentPlayer.cardPosition === 4){
         gameOver();
       }

    } else {
      flipCardsBack(currentPlayer.cardPosition);
      allocateNewCards();
      currentPlayer.cardPosition = 0;

      handlePlayerChange();
    }
    flipCards(currentPlayer.cardPosition);

  };



  function handleLowClick(card1, card2){
    if (playerGuessLow(card1, card2) && (currentPlayer.cardPosition < 4)) {
      currentPlayer.cardPosition +=1;
      if(currentPlayer.cardPosition === 4){
        gameOver();
      }


    } else {
      flipCardsBack(currentPlayer.cardPosition);
      allocateNewCards();
      currentPlayer.cardPosition = 0;

      handlePlayerChange();
    }

    flipCards(currentPlayer.cardPosition);
  };

  function handleFreezeClick(){
    if (!currentPlayer.cardPosition > 0) {
      document.getElementById("noFreeze").showModal();
      return null;
    } else if (!currentPlayer.availableFreeze) {
      document.getElementById("moreThanOnce").showModal();
      return null;
    } else
    {
    currentPlayer.availableFreeze = false;

    for (var i = 0; i < currentPlayer.cardPosition; i++) {
      currentPlayer.cards[i].image = "images/playing-card-back.png";
    };

    currentPlayer.positionIsFrozen = true;
    currentPlayer.newCardOption = true;
    handlePlayerChange();
    }
  };


  function handleNewClick(){
    if(currentPlayer.cardPosition === 0 || currentPlayer.positionIsFrozen )
      {
        if (currentPlayer.newCardOption){
          allocateNewCard(currentPlayer);
          currentPlayer.newCardOption = false;
          currentPlayer.positionIsFrozen = false;
        }
        else {
          alert("New Card Option Already Used")
        }
      }
    else {
        alert("New Card Option not allowed")
      }
  };

  function gameOver(){
    var winner = document.getElementById("winner");
    winner.play();
    document.getElementById("winModal").showModal();
    players[0].newCardOption = true;
    players[1].newCardOption = true;
    players[0].cardPosition = 0;
    players[1].cardPosition = 0;
  }


  return (

    <div className="ui-container">
      <audio id="winner" controls hidden>
         <source src="audio/winner.mp3" type="audio/mp3" />
      </audio>
      <div className="player-info">

        <h4 className="player-id">{playerNameLiteral}</h4>
        <button type="button" onClick={handleButtonBackClick}><span>
          Home
        </span></button>

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
      <dialog id="moreThanOnce">Only ONE freeze permitted per player in each game!</dialog>
    </div>
  );

};

export default GameUI;
