import React from "react";
import "./App.css";
import GameBoard from "./gameboard/gameBoard";
import Player from "./players/Player";

class App extends React.Component {
  
  componentDidMount = () => {};
  componentDidUpdate = () => {
    console.log("update!!!");
  };
  render() {
    return (
      <div className="mainContainer">
        <Player />
        <GameBoard />
        <Player />
      </div>
    );
  }
}
export default App;
