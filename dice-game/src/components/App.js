import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import { useState } from "react";
const tempScore=((playersArr, playerNum,tempScore)=>{
  let UpdatePlayers = playersArr.map(function (player) {

      if (player.id === playerNum) {
        player.currentScore = tempScore;
        return player;
      } else {
        return player;
      }
    
  });

  return UpdatePlayers;
});
const updatePlayers = (playersArr, playerNum,Totalscore) => {
  let UpdatePlayers = playersArr.map(function (player) {

    if (player.id === playerNum) {
      player.totalScore += Totalscore;
      player.currentScore = 0;
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
    turnSum: 0,
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
  rollDice = (turnScore) => {
    this.setState({
      players: tempScore(
        this.state.players,
        this.state.PlayerTurn,
        turnScore,
      ),
    });
  };
  changeTurn = (turnsTotalScore) => {
    this.setState({
      players: updatePlayers(
        this.state.players,
        this.state.PlayerTurn,
        turnsTotalScore,
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
        <GameBoard changeTurn={this.changeTurn} rollDice={this.rollDice} />
        <Player playerData={this.state.players} playerIdx={1} />
      </div>
    );
  }
}
export default App;
