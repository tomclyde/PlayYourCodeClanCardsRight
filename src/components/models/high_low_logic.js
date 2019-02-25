

  // var currentCard = card1;
  // var newCard = card2;

  const playerGuessHigh = function (newCard, currentCard){
    // // GUESSING HIGHER //
    console.log("correct");
    return (newCard > currentCard);

  };

  const playerGuessLow = function (newCard, currentCard) {
    // GUESSING LOWER //
    return (newCard < currentCard);
  };

  function convertFaceCard(card) {
    if (card === "AD" || "AC" || "AH"  || "AS")
      {
        return 14;
      } else if (card === "KD" || "KC"  || "KH" || "KS") {
        return 13;
      } else if (card === "QD" || "QC"  || "QH" || "QS") {
        return 12;
      } else if (card === "JD" || "JC"  || "JH" || "JS") {
        return 11;
      } else {
        return card;
      }
    };


export {playerGuessHigh,playerGuessLow};
