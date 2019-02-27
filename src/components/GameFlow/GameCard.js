import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => (


    <div className="media-card">


        <div className="flip-container">
          <div className="flipper">
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

export default GameCard;
