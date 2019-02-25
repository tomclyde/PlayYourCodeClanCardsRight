import React from "react";
import './CSS/GameCard.css';

const GameCard = (props) => (
        <div className="media-card">
          <div className="card-image">
           <img className="resize" src={props.image}/>
          </div>
        </div>
      );


export default GameCard;
