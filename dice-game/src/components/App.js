import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";
import IsMobileOrTablet from "./mediaQuery/mobile.jsx";
import { useState } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      pointsTowin: 20,
      zeroValue: 12,
      dicesSum: 0,
      dices: [null, null],
      PlayerTurn: 1,
      gameOver: false,
      players: [
        { id: 1, currentScore: 0, totalScore: 0, isPlaying: true },
        {
          id: 2,
          currentScore: 0,
          totalScore: 0,
          isPlaying: false,
        },
      ],
    };
  }

  reset = () => {
    this.setState(this.getInitialState());
  };

  rollDice = (turnScore) => {
    let playersArr = this.state.players;

    if (turnScore === this.state.zeroValue) {
      playersArr[this.state.PlayerTurn - 1].currentScore = 0;
    } else {
      playersArr[this.state.PlayerTurn - 1].currentScore += turnScore;
    }
    this.setState({ players: playersArr });
  };
  ///******************************************************************** */
  changeTurn = () => {
    let playersArr = this.state.players;
    let tempTotalScores = playersArr[this.state.PlayerTurn - 1].totalScore;
    playersArr[this.state.PlayerTurn - 1].totalScore +=
      playersArr[this.state.PlayerTurn - 1].currentScore;
    playersArr[this.state.PlayerTurn - 1].currentScore = 0;
     this.setState({
      players : playersArr,
    });

    if (tempTotalScores >= 20) {
      console.log("yeeeeeees !!! ");
    } else {
      console.log(playersArr)
      playersArr.forEach((player) => {
        console.log(
          "player is : " + player.id + " boolan : " + player.isPlaying
        );
        player.isPlaying
          ? (player.isPlaying = false)
          : (player.isPlaying = true);
      });

      let changePlayer = this.state.PlayerTurn === 1 ? 2 : 1;

       this.setState({
          PlayerTurn: changePlayer,
          players : playersArr,
        });
    }
  };
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="newGame" onClick={this.reset}></div>
        <Player playerData={this.state.players} playerIdx={0} />
        <GameBoard
          changeTurn={this.changeTurn}
          rollDice={this.rollDice}
          dices={this.state.dices}
        />
        <Player playerData={this.state.players} playerIdx={1} />
      </div>
    );
  }
}
export default App;
