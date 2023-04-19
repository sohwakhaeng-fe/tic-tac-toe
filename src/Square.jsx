import { useState } from "react";

export default function Square({ onSquareClick, value }) {
  return (
    <div className="square" onClick={onSquareClick}>
      {value}
    </div>
  );
}
