import styled from 'styled-components';
import { useState } from "react";
import Square from "./Square"
const Board = () => {
    const [history, setHistory] = useState([Array.from(Array(3), () => Array.from(Array(3), () => null))]); // [squares],[],[],[],[],...,[]]
    const [currentStep, setCurrentStep] = useState(0);
    const [positions, setPositions] = useState([]);
    const [isDesc, setIsDesc] = useState(false);
    const isNext = currentStep % 2 === 0;
    const [isWin, setIsWin] = useState("");
    const handleClick = (clickedRow, clickedCol) => {
        if(history.length === 10) return;
        
        setCurrentStep(index => ++index);
        
        const currentSquares = [...history[currentStep]]; 

        if (currentSquares[clickedRow][clickedCol] !== null || isWin) return 
    

        setPositions(prev => {
            const newPositions = [...prev];
            const newPosition =  {row: clickedRow, col: clickedCol};

            if (!isDesc) newPositions.push(newPosition);
            else newPositions.unshift(newPosition);
           
           return newPositions;
        })

        const newSquares = currentSquares.map((rows, row) => {
            if(clickedRow !== row) return [...rows]

            return rows.map((value, col) => 
                clickedCol === col ? isNext ? "O" : "X" : value
            )
        })

        const newHistory = [...history.slice(0, currentStep + 1), newSquares]

        setHistory(newHistory);
        judgeWinner(newSquares)
 
    }

    const move = (index) => {
        // if (!isDesc) setCurrentStep(index + 1);
        // else setCurrentStep(index);
        
        if (!isDesc) setCurrentStep(index + 1);
        else setCurrentStep(positions.length - index);
    }

    const sort = () => {
        setPositions(prevPositions => {
            const reversed = [...prevPositions].reverse();
            console.log(prevPositions, reversed)
            return reversed;
        })
        setIsDesc(prev => !prev);
    }

    const judgeWinner = (squares) => {
        // const = ㄱ
        
        // // 변수 3개 , 가로 [] 세로 []대각선[]
        // squares.map((square, index1) => {
        //     // 가로 원소 1개    
        //     square.map((item, index2) => {
        //         // 세로 원소 1개
        //         // 대각선
        //         세로 변수.push(square[index1][index2])
        //     })
        //     // 한 행 순회 완료
        //     // 한 행의 원소 3개가 모두 일치하는 가
        // })

        // // 새로 변수, 대각선 변수
        // // 세로 변수 3개
        // 세로 변수.map( => 원소 3개가 서로 일치하는 지 확인)

        lines.map(line => {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            setIsWin(squares[a]);
        }
        })
        return;
    }

    return (
        <Block >
            <div>
                <TextBlock>
                    {!isWin ? "Next Player" : "Winner player"} : {!isWin ? (!isNext ? "X" : "O") : (isWin)}
                </TextBlock>
                <SquareSection>
                    {history[currentStep].map((square, row) => square.map((value, col) =><Square key={row+col} value={value} row={row} col={col} handleClick={handleClick}/>))}
                </SquareSection>
            </div>
            <HistoryBlock>
                <button onClick={sort}>정렬하기</button>
                {/* <button onClick={() => move(index)}>시작 버튼</button> */}
                
                {/* {positions.map((position, index) => {
                    return <button key={index} onClick={() => move(index)}>
                        {currentStep - 1 === (isDesc ? currentStep - index - 1 : index )? 
                            `당신은 # ${position.row} , ${position.col}에 있습니다.` : `${position.row} , ${position.col} 이동`}</button>
                })} */}

                {positions.map((position, index) => {
                    return (
                        <button key={index} onClick={() => move(index)}>
                            {!isDesc ?
                                (currentStep - 1 === index ? `당신은 # ${position.row} , ${position.col}에 있습니다.` : `${position.row} , ${position.col} 이동`) :
                                (currentStep === positions.length - index ? `당신은 # ${position.row} , ${position.col}에 있습니다.` : `${position.row} , ${position.col} 이동`)
                            }
                        </button>
                    )
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