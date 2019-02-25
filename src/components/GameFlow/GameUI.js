import React from "react";

const GameUI = (props) => {


  function checkNextHigher(handinfo) {
    console.log("HANDINFO", handinfo);
    if(!handinfo.player1.cards["0"].value)
      return null;
    else
      {console.log("ACTUAL INFO", handinfo.player1.cards["0"].value)};
      checkForFaceCardandConvert(card)
      const p1card1val = parseInt(handinfo.player1.cards["0"].value)
      const p1card2val = parseInt(handinfo.player1.cards["1"].value)
      console.log("card compare vals", p1card1val, " ", p1card2val);
      if(handinfo.player1.cards["0"].value <= handinfo.player1.cards["1"].value)
        {console.log("It's not higher or it's equal")}
      else {
        {console.log("It is Higher");}

      }
  };
  console.log(props);

  function checkForFaceCardandConvert(card) {
    if (card === "AD" || "AC" || "AH"  || "AS")
      {
        return 14
      }
      else if (card === "KD" || "KC"  || "KH" || "KS") {
        return 13
        else if (card === "QD" || "QC"  || "QH" || "QS") {
          return 12
          else if (card === "JD" || "JC"  || "JH" || "JS") {
            return 11
          }
        }
      }

  }

if (!props.handinfo) return null

  return (
    <div>
      <h2>Controls here</h2>
      <button type="button" onclick={checkNextHigher(props.handinfo)}>
      Higher</button>
    </div>
);

  };



export default GameUI;
