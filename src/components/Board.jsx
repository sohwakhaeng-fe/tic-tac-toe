import styled from 'styled-components';
import { useState } from "react";
import Square from "./Square"
const Board = () => {
    const [history, setHistory] = useState([Array.from(Array(3), () => Array.from(Array(3), () => null))]); // [squares],[],[],[],[],...,[]]
    const [currentStep, setCurrentStep] = useState(0);
    const [isNext, setIsNext] = useState(false);
    const [isWin, setIsWin] = useState("");
    const handleClick = (clickedRow, clickedCol) => {
        
        setCurrentStep(index => ++index);
        
        const currentSquares = [...history[currentStep]]; 

        if (currentSquares[clickedRow][clickedCol] !== null || isWin) return 
    
        const newSquares = currentSquares.map((rows, row) => {
            if(clickedRow !== row) return [...rows]

            return rows.map((value, col) => 
                clickedCol === col ? isNext ? "O" : "X" : value
            )
        })

        const newHistory = [...history.slice(0, currentStep + 1), newSquares]

        setIsNext(!isNext);
        setHistory(newHistory);
        judgeWinner(newSquares)
    }

    const move = (index) => {
        setCurrentStep(index);
        setIsNext(!isNext);
    }

    const judgeWinner = (squares) => {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ]
        lines.map(line => {
        const [a, b, c] = line;
        if (history[currentStep][a] && history[currentStep][a] === history[currentStep][b] && history[currentStep][a] === history[currentStep][c]) {
            setIsWin(history[currentStep][a]);
        }
        })
        return;
    }

    return (
        <Block >
            <div>
                <TextBlock>
                    {!isWin ? "Next Player!" : "Winner player"} : {!isWin ? (!isNext ? "X" : "O") : (isWin)}
                </TextBlock>
                <SquareSection>
                    {history[currentStep].map((square, row) => square.map((value, col) =><Square key={row+col} value={value} row={row} col={col} handleClick={handleClick}/>))}
                </SquareSection>
            </div>
            <HistoryBlock>
                {history.map((item, index) => {
                    if (index === 0) {
                        return <button key={index} onClick={() => move(index)}>시작 버튼</button>
                    } else {
                        return <button key={index} onClick={() => move(index)}>{index}번 버튼</button>
                    }
                })}
            </HistoryBlock>
        </Block>
    )
}

const TextBlock = styled.div`
  
`

const Block = styled.div`
    display: flex;
`

const SquareSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
`

const HistoryBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    margin: 10px;
`


export default Board;