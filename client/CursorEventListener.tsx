import * as React from 'react'

const CursorEventListener = (mouseCoords) => {
    console.log(
        mouseCoords.mouseCoords,
        `translate(${mouseCoords.mouseCoords.x}px, translate${mouseCoords.mouseCoords.y}px)`
    )
    return (
        <div>
            <span
                className="cursor"
                style={{
                    transform: `translate(${mouseCoords.mouseCoords.x}px, ${mouseCoords.mouseCoords.y}px)`,
                }}
            >
                🍐
            </span>
        </div>
    )
}

export default CursorEventListener
