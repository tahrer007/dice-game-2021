import React from "react";
import "./gamebord.css";

const getRandomNumber = () => {
  let min = 1;
  let max = 7;
  let random = Math.floor(Math.random() * (max - min) + min);

  return random;
};

class gameBoard extends React.Component {

 
  state = {
    diceFace1: null,
    diceFace2: null,
  };
  rollDice = () => {
    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    this.setState({
      diceFace1: `face${random1}`,
      diceFace2: `face${random2}`,
    });

    console.log(random1);
    console.log(random2);

    if (random1 === 6 && random2 === 6) {
      this.props.rollDice([0, 0]);
    } else this.props.rollDice([random1, random2]);
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {};

  render() {
    return (
      <div className="gameBoard">
        <div className="newGame"></div>
        <div className={`dice ${this.state.diceFace1}`}></div>
        <div className={`dice ${this.state.diceFace2}`}></div>
        <div className="hold"></div>
        <div className="roll" onClick={this.rollDice}>
          roll dice
        </div>
      </div>
    );
  }
}
export default gameBoard;
