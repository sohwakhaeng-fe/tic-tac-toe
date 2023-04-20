import styled from 'styled-components';
import Board from './Board';
import { useState } from 'react';
const Game = () => {
    const [history, setHistroy] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isNext, setIsNext] = useState(false);
    let currentSquares = history[currentMove];
    const handlePlay = (squares) => {
        const newHistory = [...history.slice(0, currentMove + 1), squares];
        setHistroy(newHistory)
        setCurrentMove(newHistory.length - 1);
        setIsNext(!isNext);
    }

    const move = (index) => {
        setCurrentMove(index)
    }
    return (
        <GameBlock>
            <Board isNext={isNext} onPlay={handlePlay} squares={currentSquares}/>
            <HistoryBlock>
                {history.map((item, index) => <button key={index} onClick={() => move(index)}>{index + 1}번 위치</button>)}
            </HistoryBlock>
        </GameBlock>
    )
}

const GameBlock = styled.div`
    display: flex;
`

const HistoryBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    gap: 10px;
`
export default Game;