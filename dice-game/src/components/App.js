import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";

const updatePlayers=(playersArr)=>{

}

class App extends React.Component {
  state = {
    pointsTowin: 20,
    turnSum: null,
    PlayerTurn: 1,
    isWinner: true,
    players: [
      { id: 1, currentScore: 0, totalScore: 0, isTurn: false },
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
    let total = currentPlayer.totalScore;
    total += childData;
    console.log("child : " + total);
    let UpdatePlayers = this.state.players.map(function (player) {
      if (player.id === playerNum) {
        player.totalScore = total;
        player.isTurn = false;
        return player;
      } else {
        player.isTurn = true;
        return player};
    });
    this.setState({
      players: UpdatePlayers,
    });

    //console.log("the test"+this.state.players[this.state.PlayerTurn].totalScore);
  };
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log("update!!!");
    console.log(this.state.players);
  };
  render() {
    return (
      <div className="mainContainer">
        <Player playerData={this.state.players[0]} />
        <GameBoard
          changeTurn={this.changeTurn}
          player={this.state.PlayerTurn}
        />
        <Player playerData={this.state.players[1]} />
      </div>
    );
  }
}
export default App;
