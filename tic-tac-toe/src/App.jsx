import { useState } from "react";
import "./App.css";
import Square from "./Square";
import judgeWinner from "./utils/judgeWinner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  // const judgeX = squares % 2 === 0;
  const [judgeX, setJudgeX] = useState(true);

  function handleBoardClick(i) {
    if (squares[i]) return;

    const nextSquares = [...squares];
    judgeX ? (nextSquares[i] = "X") : (nextSquares[i] = "O");

    setJudgeX(!judgeX);
    setSquares(nextSquares);
  }

  const winner = judgeWinner(squares);

  return (
    <>
        {winner === "X"
          ? "winner : X"
          : judgeX
          ? "Next Player : X"
          : "Next Player : O"}

      <div className="board">
        <Square handleClick={() => handleBoardClick(0)} value={squares[0]} />
        <Square handleClick={() => handleBoardClick(1)} value={squares[1]} />
        <Square handleClick={() => handleBoardClick(2)} value={squares[2]} />
        <Square handleClick={() => handleBoardClick(3)} value={squares[3]} />
        <Square handleClick={() => handleBoardClick(4)} value={squares[4]} />
        <Square handleClick={() => handleBoardClick(5)} value={squares[5]} />
        <Square handleClick={() => handleBoardClick(6)} value={squares[6]} />
        <Square handleClick={() => handleBoardClick(7)} value={squares[7]} />
        <Square handleClick={() => handleBoardClick(8)} value={squares[8]} />
      </div>
    </>
  );
}

export default App;
