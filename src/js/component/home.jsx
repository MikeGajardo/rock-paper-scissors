import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
      return userInput;
    }
    if (userInput === "paper") {
      return userInput;
    }
    if (userInput === "scissors") {
      return userInput;
    } 
    if (userInput === "bomb") {
      return userInput;
    } 
    else {
      console.log("you have an error");
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    }
    if (randomNumber === 1) {
      return "paper";
    }
    if (randomNumber === 2) {
      return "scissors";
    } else {
      console.log("you have an number error");
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "the game was a tie";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "the computer won";
      } else {
        return "the user won";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "the computer won";
      } else {
        return "the user won";
      }
    }
      if (userChoice === "scissors") {
      if (computerChoice === "rock" || "paper") {
        return "the user won";
      } else {
        return "the computer won";
      }
    }
    if (userChoice === "bomb") {
      if (computerChoice === "scissors" || "paper" || "rock") {
        return "the user won";
      } else {
        return "the computer won";
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    console.log('you threw: ' + userChoice)
    console.log('you computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  console.log(playGame())

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
    </div>
  );
};

export default Home;
