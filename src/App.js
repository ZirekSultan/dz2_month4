import React, { useState } from 'react'

const ColorSquares = () => {
    const [square1Color, setSquare1Color] = useState('red')
    const [square2Color, setSquare2Color] = useState('blue')

    const handleSquareClick = (squareNumber) => {
        if (squareNumber === 1) {
            setSquare1Color(square2Color)
            setSquare2Color(square1Color)
        } else if (squareNumber === 2) {
            setSquare1Color(square2Color)
            setSquare2Color(square1Color)
        }
    };

    return (
        <div>
            <div
                style={{ width: '160px', height: '130px', backgroundColor: square1Color, cursor: 'pointer' }}
                onClick={() => handleSquareClick(1)}
            ></div>
            <div
                style={{ width: '160px', height: '130px', backgroundColor: square2Color, cursor: 'pointer' }}
                onClick={() => handleSquareClick(2)}
            ></div>
        </div>
    )
}

export default ColorSquares
