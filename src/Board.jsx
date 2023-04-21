import React from "react";
import Square from "./Square";
import checkWinner from "./utils/checkWinner";

const Board = ({ xIsNext, squares, onPlay }) => {
  const onSquareClick = (index) => {
    const nextSquares = { ...squares };

    if (squares[index] || checkWinner(squares)) return;
    if (xIsNext) {
      nextSquares[index] = "X";
      console.log(nextSquares[index]);
    } else {
      nextSquares[index] = "O";
      console.log(nextSquares[index]);
    }
    onPlay(nextSquares)
  };


  return (
    <div className="board">
      <Square value={squares[0]} handleClick={() => onSquareClick(0)} />
      <Square value={squares[1]} handleClick={() => onSquareClick(1)} />
      <Square value={squares[2]} handleClick={() => onSquareClick(2)} />
      <Square value={squares[3]} handleClick={() => onSquareClick(3)} />
      <Square value={squares[4]} handleClick={() => onSquareClick(4)} />
      <Square value={squares[5]} handleClick={() => onSquareClick(5)} />
      <Square value={squares[6]} handleClick={() => onSquareClick(6)} />
      <Square value={squares[7]} handleClick={() => onSquareClick(7)} />
      <Square value={squares[8]} handleClick={() => onSquareClick(8)} />
    </div>
  );
};

export default Board;
