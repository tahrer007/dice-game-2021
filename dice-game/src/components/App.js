import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import IsMobileOrTablet from "./mediaQuery/mobile.jsx";
import { useState } from "react";

const changePlayer = (playerNum) => {
  if (playerNum === 1) return 2;
  else return 1;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsTowin: 20,
      zeroValue: 12,
      dicesSum: 0,
      PlayerTurn: 1,
      gameOver: false,
      players: [
        { id: 1, currentScore: 0, totalScore: 0, isTurn: true },
        {
          id: 2,
          currentScore: 0,
          totalScore: 0,
          isTurn: false,
        },
      ],
    };
    // preserve the initial state in a new object
    this.baseState = this.state;
  }

  reset = () => {
    this.setState(this.baseState);
  };

  rollDice = (turnScore) => {
    let playerArr = this.state.players;

    if (turnScore === this.state.zeroValue) {
      playerArr[this.state.PlayerTurn - 1].currentScore = 0;
    } else {
      playerArr[this.state.PlayerTurn - 1].currentScore += turnScore;
    }
    this.setState({ playerArr });
  };

  changeTurn = () => {
    let playerArr = this.state.players;
    playerArr[this.state.PlayerTurn - 1].totalScore +=
    playerArr[this.state.PlayerTurn - 1].currentScore;
    playerArr[this.state.PlayerTurn - 1].currentScore=0;
    this.setState({ playerArr });
    if (playerArr[this.state.PlayerTurn - 1].totalScore >= 20) {
    
    } else {
      let changePlayer = this.state.PlayerTurn === 1 ? 2 : 1;
      this.setState({
        PlayerTurn: changePlayer,
      });
    }
  };
  componentDidMount = () => {
    this.baseState = this.state;
  };
  componentDidUpdate = () => {
   
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="newGame" onClick={this.reset}></div>
        <Player playerData={this.state.players} playerIdx={0} />
        <GameBoard changeTurn={this.changeTurn} rollDice={this.rollDice} />
        <Player playerData={this.state.players} playerIdx={1} />
      </div>
    );
  }
}
export default App;
