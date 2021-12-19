import React from "react";
import "./gamebord.css";
import "./loader.css";
import "../mediaQuery/mobile.css";
import rollSound from "../assets/sounds/reset.mp3"

//import rollSound from '../../sounds/boop.mp3';
const zeroSum = 12;
const getRandomNumber = () => {
  let min = 1;
  let max = 7;
  let random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
 const playAudio = () => {
  new Audio(rollSound).play();
}

class gameBoard extends React.Component {
  sum = 0;
  state = {
    diceFace1:null,
    diceFace2: null,
    turnTotalScore: 0,
  };
  
   

  rollDice = () => {
    playAudio()
    this.setState({
      diceFace1: 'loader',
      diceFace2: 'loader',
    }); 

    let random1 = getRandomNumber();
    let random2 = getRandomNumber();
    let dicesSum = random1 + random2 ; 
    setTimeout(() => {
      this.setState({
        diceFace1: `face${random1}`,
        diceFace2: `face${random2}`,
      });
    }, 500);

    if (dicesSum === zeroSum) {
      this.setState({
        turnTotalScore: 0,
      });
    } else {
      this.setState((preveState) => ({ 
        turnTotalScore: preveState.turnTotalScore + dicesSum ,
     }))
    }
   this.props.rollDice(this.state.turnTotalScore);
  };

  changeTurn = () => {
    this.props.changeTurn(this.state.turnTotalScore);
    this.setState({
      dicesSum: 0,
      turnTotalScore: 0,
    });
  };

  componentDidMount = () => {};
  componentDidUpdate = () => {
    
    console.log("turn total  sum : " + this.state.turnTotalScore);
    //console.log(this.state.turnTotalScore)
  };

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
