import { useState } from 'react';
import styled from 'styled-components';
const Square = ({ row, col, value, handleClick }) => {
    
    return (
        <SquareBlock onClick={() => handleClick(row, col)}>{value}</SquareBlock>
    )
}

const SquareBlock = styled.div`
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border: 1px solid black;
`

export default Square;