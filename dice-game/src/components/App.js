import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import { useState } from "react";

const updatePlayers=(playersArr,playerNum,total)=>{

  let UpdatePlayers = playersArr.map(function (player) {
    if (player.id === playerNum) {
      player.totalScore = total;
      player.isTurn = false;
      return player;
    } else {
      player.isTurn = true;
      return player};
  });

  return UpdatePlayers ; 
}
const chengePlayer=(playerNum)=>{
  if(playerNum===1)return 2 ; 
  else return 1 ; 
}

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


  changeTurn = (childData) => {
    let playerNum = this.state.PlayerTurn;
    let currentPlayer = this.state.players[playerNum];
   // [playerNum,currentPlayer]=useState();

   
    console.log("currentPlayer : "+ currentPlayer)
    let total = currentPlayer.totalScore;
    total += childData;
    console.log("child : " + total);
    let UpdatePlayers = updatePlayers(this.state.players,playerNum,total) ; 
    this.setState({
      players: UpdatePlayers,
      PlayerTurn:chengePlayer(playerNum),
    });

    //console.log("the test"+this.state.players[this.state.PlayerTurn].totalScore);
  };
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log("update!!!");
    console.log(this.state.players);
    console.log( "player turn : " + this.state.PlayerTurn);
  };
  render() {
    return (
      <div className="mainContainer">
        <Player playerData={this.state.players[0]} />
        <GameBoard
          changeTurn={this.changeTurn}
        />
        <Player playerData={this.state.players[1]} />
      </div>
    );
  }
}
export default App;
