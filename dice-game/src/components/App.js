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
      { id:1,
        currentScores: 0,
        totalScores: 0,
        isTurn:false ,
      },
      {
        id:2,
        currentScores: 0,
        totalScores: 0,
        isTurn:true ,
      },
    ],
  };

  changeTurn = (childData) => {
    this.setState(
      { PlayerTurn: childData });
  };
  rollDice = (childData) => {
    this.setState({ dicesSum: childData ,  }
      
      
      );
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
        <Player playerData={this.state.players[1]}/>
      </div>
    );
  }
}
export default App;
