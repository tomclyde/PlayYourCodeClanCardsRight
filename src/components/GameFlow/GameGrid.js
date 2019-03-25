import React from "react";
// import GameBox from "../../containers/GameBox";
import GameCard from "./GameCard";
// import GameUI from "./GameUI";
import './CSS/GameGrid.css';

const GameGrid = (props) => {
  if (!props.player1.cards) return null;

  const p1cardNodes = props.player1.cards.map((card,index)=> {
    // console.log("cardvalue", card.value);
    // console.log("cardimage", card.image);
    return(
      <GameCard key={index} value={card.value} index={index}
      image={card.image}>
      </GameCard>
    );
  });

  if (!props.player2.cards) return null;
  console.log(props.player2.cards)
  console.log(props.player2.cardPosition)

  const p2cardNodes = props.player2.cards.map((card, index) => {
    if(index < props.player2.cardPosition){
      return(
        <div className="blue">
        <GameCard key={index} value={card.value}
      image={card.image} flipped={card.flipped} index={index}>
      </GameCard>
      </div>
      )
    }
    else {
      return(
        <div className="current">
        <GameCard key={index} value={card.value}
        image={card.image} flipped={card.flipped} index={index}>
        </GameCard>
        </div>
      );
    }
  });



  return (
    <div className="game-grid">
      <div className="p1-card-row selected">
        {p1cardNodes}
      </div>
      <div className="p2-card-row playerBlue">
        {p2cardNodes}
      </div>
    </div>
  );
}

export default GameGrid;
