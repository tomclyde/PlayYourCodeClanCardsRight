import React, {Component} from 'react';
import WithSplashPage from '../withSplashPage.js';
import "../withSplashPage.css";

class PlayerForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: "login",
      player1: null,
      player2: null
    };

  this.handleNameClickInput = this.handleNameClickInput.bind(this);
  this.handlePlayer1Name = this.handlePlayer1Name.bind(this);
  this.handlePlayer2Name = this.handlePlayer2Name.bind(this);
  this.handleSubmitClick = this.handleSubmitClick.bind(this);
}

  handleNameClickInput(event){
    this.setState({player1: event.target.value});
  };

  handlePlayer1Name(event){
    this.setState({player1: event.target.value});
  };

  handlePlayer2Name(event){
    this.setState({player2: event.target.value});
  };

  handleSubmitClick(){
    this.setState({status: "splashPage"});
  }

  render() {
    if (this.state.status === "login" ){
    return(
      <div className="player-form-page">
      <div className="form">
        <h1>Enter Names</h1>
        <form>
          <label>
            Player 1:
          </label>
            <input type="text" id="player1_name" name="player1_name" onChange={this.handlePlayer1Name} autofocus="true"/>
          <label>
            Player 2:
          </label>
            <input type="text" id="player2_name" name="player2_name" onChange={this.handlePlayer2Name} required/>
          <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
        </form>
        </div>
      </div>

    )
  } else {
    return(
    <WithSplashPage player1_name = {this.state.player1} player2_name = {this.state.player2}/>)
  }
  }
};

export default PlayerForm;
