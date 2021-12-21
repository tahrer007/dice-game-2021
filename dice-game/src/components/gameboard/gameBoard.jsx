import React from "react";
import "./gamebord.css";
import "./loader.css";
import "../mediaQuery/mobile.css";
import rollSound from "../assets/sounds/reset.mp3";

//import rollSound from '../../sounds/boop.mp3';

const getRandomNumber = () => {
  let min = 1;
  let max = 7;
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
const playAudio = () => {
  new Audio(rollSound).play();
};

class gameBoard extends React.Component {
  state = {
    diceFace1: this.props.dices[0],
    diceFace2: this.props.dices[1],
    dicesSum: 0,
  };

  rollDice = () => {
    playAudio();
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    let sum = random1 + random2;
    this.setState({
      diceFace1: "loader",
      diceFace2: "loader",
      dicesSum: sum,
    });
    setTimeout(() => {
      this.setState({
        diceFace1: `face${random1}`,
        diceFace2: `face${random2}`,
      });
    }, 500);
    setTimeout(() => {
      this.props.rollDice(this.state.dicesSum);
    }, 100);
  };

  changeTurn = () => {
    this.props.changeTurn();
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    return (
      <div className="gameBoard">
        <div className={`dice ${this.state.diceFace1}`}></div>
        <div className={`dice ${this.state.diceFace2}`}></div>
        <div className="hold" onClick={this.changeTurn}>
          {" "}
        </div>
        <div className="roll" onClick={this.rollDice}>
          {" "}
          <span className="hide">hide content</span>
        </div>
      </div>
    );
  }
}
export default gameBoard;
