import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";

class App extends React.Component {
  state = {
    pointsTowin: 20,
    dicesSum: null,
    PlayerTurn: 1,
    isWinner: false,
    players: [
      {
        currentScores: 0,
        totalScores: 0,
      },
      {
        currentScores: 0,
        totalScores: 0,
      },
    ],
  };
  rollDice = (childData) => {
    this.setState({ dicesSum: childData });
  };
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log("update!!!");
    console.log(this.state.dicesSum);
   
  };
  render() {
    return (
      <div className="mainContainer">
        <Player />
        <GameBoard rollDice={this.rollDice} />
        <Player />
      </div>
    );
  }
}
export default App;
