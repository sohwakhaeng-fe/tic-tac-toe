import { useState } from "react";
import "./App.css";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [message, setMessage] = useState("");
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const handleClick = (index) => {
    // winner가 정해졌거나, 이미 클릭한 Square인 경우
    if (checkWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = player ? "X" : "O";
    setSquares(squares);
    setPlayer(!player);

    const winner = checkWinner(squares);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }
  };

  const checkWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // winner 판별
  const winner = checkWinner(squares);
  // if (winner) {
  //   setMessage(`Winner: ${winner}`);
  // } else {
  //   setMessage(`Next player: ${player ? "X" : "O"}`);
  // }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next player: " + (player ? "X" : "O");
  }
  console.log(scores);

  const handleRestart = () => {
    setPlayer(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div style={{padding: "50px"}}>
      <p className="player">{status}</p>
      <ScoreBoard scores={scores} player={player} />
      <Board squares={squares} onClick={handleClick} />
      <button className="restart" onClick={handleRestart}>
        Restart Game !
      </button>
    </div>
  );
}

export default App
