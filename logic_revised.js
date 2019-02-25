const playerGuessHigh = function (newCard, currentCard){
  // // GUESSING HIGHER //
  return (newCard > currentCard);
  newCardValue.innerHTML = "New card was: " + newCard;
};

const playerGuessLow = function (newCard, currentCard) {
  // GUESSING LOWER //
  return (newCard < currentCard);
  newCardValue.innerHTML = "New card was: " + newCard;
};
