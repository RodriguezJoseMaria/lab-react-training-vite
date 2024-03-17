import { useState } from "react";
import diceZero from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(diceZero);

  const randomDice = () => {
    setDice(diceZero);
    setTimeout(() => {
      switch (Math.floor(Math.random() * 7)) {
        case 1:
          return setDice(diceOne);
        case 2:
          return setDice(diceTwo);
        case 3:
          return setDice(diceThree);
        case 4:
          return setDice(diceFour);
        case 5:
          return setDice(diceFive);
        case 6:
          return setDice(diceSix);
      }
    }, 1000);
  };

  return (
    <>
      <img
        onClick={() => {
          setTimeout(randomDice(), 1000);
        }}
        src={dice}
        style={{ width: "25%" }}
      />
    </>
  );
}

export default Dice;
