import Square from "./Square";
import "./App.css";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => {
        return (
          <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
        );
      })}
    </div>
  );
};

export default Board