import React from "react";
import './CSS/GameUI.css';
import {playerGuessHigh, playerGuessLow} from '../models/high_low_logic.js';

const GameUI = (props) => {
  var playerParameter = "player1"

  if (props.player1.length === 0) return null; //add loading message
  if (props.player2.length === 0) return null;

  var activePlayerCard = props.player1.cards[props.player1.cardPosition].value;
  var NextActivePlayerCard = props.player1.cards[(props.player1.cardPosition) + 1].value;


  function handleHighClick(card1, card2){

    if (playerParameter === "player1")
    {
      if (playerGuessHigh(card1, card2) && (props.player1.cardPosition < 4)) {
        props.player1.cardPosition +=1;
      } else {
        props.player1.cardPosition = 0;
        handlePlayerChange();

      }
    console.log(props.player1.cardPosition);
    }
    else
    {
      if (playerGuessHigh(card1, card2) && (props.player2.cardPosition < 4)) {
        props.player2.cardPosition +=1;
      } else {
        props.player2.cardPosition = 0;
        handlePlayerChange();

      }
    console.log(props.player2.cardPosition);
    }
  };

  function handleLowClick(card1, card2){

    if (playerParameter === "player1")
    {
      if (playerGuessLow(card1, card2) && (props.player1.cardPosition < 4)) {
        props.player1.cardPosition +=1;
      } else {
        props.player1.cardPosition = 0;
        handlePlayerChange();
      }
    console.log(props.player1.cardPosition);
    }
    else
    {
      if (playerGuessLow(card1, card2) && (props.player2.cardPosition < 4)) {
        props.player2.cardPosition +=1;
      } else {
        props.player2.cardPosition = 0;
        handlePlayerChange();
      }
    console.log(props.player2.cardPosition);
    }
  };

  function handleFreezeClick(){

  };

  function handleNewClick(){

  };

  function handlePlayerChange(){
    if(playerParameter === "player1"){
      playerParameter = "player2";
    }
    else{
      playerParameter = "player1";
    }

    if(playerParameter === "player1"){
      activePlayerCard = props.player1.cards[props.player1.cardPosition].value
      NextActivePlayerCard = props.player1.cards[(props.player1.cardPosition) + 1].value
    }
    else {
      if (playerParameter === "player2")
      {
        activePlayerCard = props.player2.cards[props.player2.cardPosition].value
        NextActivePlayerCard = props.player2.cards[(props.player2.cardPosition) + 1].value
      }
    }
  }

  return (
    <div className="ui-container">
      <div className="player-info">
        <h4>{`${playerParameter}`}</h4>
        <button type="button">
          Home
        </button>
      </div>
      <div className="buttons">
      <button type="button" onClick={() =>
        handleHighClick(
          activePlayerCard,
          NextActivePlayerCard)}>
        Higher
      </button>
      <button type="button" onClick={() =>
        handleLowClick(
          activePlayerCard,
          NextActivePlayerCard)}>
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
