import styled from 'styled-components';
import Square from './Square';
import { useState } from 'react';
const Board = ({ isNext, squares, onPlay }) => {
   
    const [isWin, setIsWin] = useState("");

    const handleClick = (index) => {
        if (squares[index] !== null || isWin) return
        const newSquares = [...squares];
        newSquares[index] = isNext ? "O" : "X";
        judgeWinner(newSquares);

        onPlay(newSquares)
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
        // 안녕히계세요 ㅎㅎ
        lines.map(line => {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            setIsWin(squares[a]);
        }
        })
        return;
    }

    return (
        <BoardBlock>
            <TextBlock>
                {!isWin ? "Next Player" : "Winner player"} : {!isWin ? (!isNext ? "X" : "O") : (isWin)}
            </TextBlock>
            <SquareSection>
                {squares.map((square, index) => <Square index={index} value={square} key={index} handleClick={handleClick}/>)}
            </SquareSection>
        </BoardBlock>
    )
}

const BoardBlock = styled.div`
    
`

const TextBlock = styled.div`
  
`

const SquareSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
`

export default Board;