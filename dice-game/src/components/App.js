import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import { useState } from "react";

const updatePlayers = (playersArr, playerNum,score,updateTurnScore) => {
  let UpdatePlayers = playersArr.map(function (player) {

    if(updateTurnScore){

      if (player.id === playerNum) {
        player.currentScore += score;
        return player;
      } else {
        return player;
      }
    }
    if (player.id === playerNum) {
      player.totalScore += score;
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
    turnScore = (turnScore) => {
    this.setState({
      players: updatePlayers(
        this.state.players,
        this.state.PlayerTurn,
        turnScore,
        true
      ),
    });
  };
  changeTurn = (turnsTotalScore) => {
    this.setState({
      players: updatePlayers(
        this.state.players,
        this.state.PlayerTurn,
        turnsTotalScore,
        false
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
        <GameBoard changeTurn={this.changeTurn} turnScore={this.turnScore} />
        <Player playerData={this.state.players} playerIdx={1} />
      </div>
    );
  }
}
export default App;
