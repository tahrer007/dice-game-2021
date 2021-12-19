import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import IsMobileOrTablet from "./mediaQuery/mobile.jsx";
import { useState } from "react";

const checkWinner = (totalScore, winningScore, player) => {
  console.log(totalScore);
  console.log(winningScore);
  if (totalScore >= winningScore) {
    window.alert("player " + player + " is the winner");
    //window.alert("please restart the game !!")
    return true;
  }
  return false;
};
const tempScore = (playersArr, playerNum, tempScore) => {
  let UpdatePlayers = playersArr.map(function (player) {
    if (player.id === playerNum) {
      player.currentScore = tempScore;
      return player;
    } else {
      return player;
    }
  });

  return UpdatePlayers;
};
const updatePlayers = (playersArr, playerNum, Totalscore) => {
  let UpdatePlayers = playersArr.map(function (player) {
    if (player.id === playerNum) {
      player.totalScore += Totalscore;
      player.currentScore = 0;
      player.isTurn = false;
      return player;
    } else {
      player.isTurn = true;
      return player;
    }
  });

  return UpdatePlayers;
};
const changePlayer = (playerNum) => {
  if (playerNum === 1) return 2;
  else return 1;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsTowin: 20,
      turnSum: 0,
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
    this.setState({
      players: tempScore(this.state.players, this.state.PlayerTurn, turnScore),
    });
  };
  changeTurn = (turnsTotalScore) => {
    this.setState({
      players: updatePlayers(
        this.state.players,
        this.state.PlayerTurn,
        turnsTotalScore
      ),
      gameOver: checkWinner(
        turnsTotalScore,
        this.state.pointsTowin,
        this.state.PlayerTurn
      ),
    });

    if (!this.state.gameOver) {
      this.setState({
        PlayerTurn: changePlayer(this.state.PlayerTurn),
      });
    }
  };
  componentDidMount = () => {
    this.baseState = this.state;
  };
  componentDidUpdate = () => {};
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
