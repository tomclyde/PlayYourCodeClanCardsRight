import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => {

if (props.index===0){
  var flippedClass = "flipper flip"
}
else {
    var flippedClass="flipper"
  }



return(
  <div className="media-card">


      <div className="flip-container">
        <div className={flippedClass}>
          <div className="front">
            <img className="card-back" src="/images/playing-card-back.png" alt="Card Back"/>
          </div>
          <div className="back">
            <img className="resize" src={props.image} alt="Playing Cards"/>
          </div>
        </div>
      </div>

    </div>

);


  }



export default GameCard;
