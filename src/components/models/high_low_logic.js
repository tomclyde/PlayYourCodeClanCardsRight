  const playerGuessHigh = function (currentCard, newCard){
    // // GUESSING HIGHER //
    currentCard = convertFaceCard(currentCard);
    newCard = convertFaceCard(newCard);
    console.log("New Card: ", newCard);
    console.log("Current Card: ", currentCard);
    return (newCard > currentCard);

  };

  const playerGuessLow = function (currentCard, newCard) {
    // GUESSING LOWER //
    currentCard = convertFaceCard(currentCard);
    newCard = convertFaceCard(newCard);
    console.log("New Card: ", newCard);
    console.log("Current Card: ", currentCard);
    return (newCard < currentCard);
  };

  function convertFaceCard(card) {
    if (card === "ACE")
      {
        return 14;
      } else if (card === "KING") {
        return 13;
      } else if (card === "QUEEN") {
        return 12;
      } else if (card === "JACK") {
        return 11;
      } else {
        return card;
      }
    };


export {playerGuessHigh,playerGuessLow};
