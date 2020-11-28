import React from 'react'

export const Message = ({text}) => {
    return (
        <div>
            <h2>{text.username}:{text.text}</h2>
        </div>
    )
}
