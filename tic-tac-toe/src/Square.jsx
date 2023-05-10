import { useState } from "react";
import "./App.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square
