import React from 'react';

const High_Low_Logic = () => {

  const playerGuessHigh = function (newCard, currentCard){
    // // GUESSING HIGHER //
    return (newCard > currentCard);
    // newCardValue.innerHTML = "New card was: " + newCard;
  };

  const playerGuessLow = function (newCard, currentCard) {
    // GUESSING LOWER //
    return (newCard < currentCard);
    // newCardValue.innerHTML = "New card was: " + newCard;
  };

};

export module = High_Low_Logic;
