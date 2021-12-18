import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import { useState } from "react";

const updatePlayers = (playersArr, playerNum, turnTotalScore) => {
  let UpdatePlayers = playersArr.map(function (player) {

    if (player.id === playerNum) {
      player.totalScore += turnTotalScore;
      player.isTurn= false;
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
  state = {
    pointsTowin: 20,
    turnSum: null,
    PlayerTurn: 1,
    isWinner: false,
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

  changeTurn = (turnTotalScore) => {
    this.setState({
      players: updatePlayers(
        this.state.players,
        this.state.PlayerTurn,
        turnTotalScore
      ),
      PlayerTurn: changePlayer(this.state.PlayerTurn),
    });
  };
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log(this.state.players);
  };
  render() {
    return (
      <div className="mainContainer">
        <Player playerData={this.state.players} playerIdx={0} />
        <GameBoard changeTurn={this.changeTurn} />
        <Player playerData={this.state.players} playerIdx={1} />
      </div>
    );
  }
}
export default App;
