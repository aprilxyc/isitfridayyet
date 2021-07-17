import * as React from 'react'

const CursorEventListener = (props) => {
    const { x, y } = props.mouseCoords
    console.log(x, y)

    const calculateTransformCoords = (xCoord, yCoord) => {
        return `translate(${xCoord}px, ${yCoord}px)`
    }

    return (
        <div>
            <span
                className="cursor"
                style={{
                    transform: calculateTransformCoords(x, y),
                }}
            >
                🍐
            </span>
        </div>
    )
}

export default CursorEventListener
