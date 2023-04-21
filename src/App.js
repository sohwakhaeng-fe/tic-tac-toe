import { useState } from "react";
import "./App.css";
import Board from "./Board";
import checkWinner from "./utils/checkWinner";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const winner = checkWinner(history);
  let status;
  if (winner) {
    status = "winner " + winner;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
    </>
  );
}

export default App;
