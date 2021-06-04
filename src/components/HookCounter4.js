import React, { useState } from 'react'

function HookCounterFour() {
    const [item, setItem] = useState([])

    const addItem = () => {
        setItem([...item,
        {
            id: item.length,
            value: (Math.floor(Math.random() * 10) + 1)
        }]
        )
    }

    return (
        <div>
            <button onClick={addItem}>Click to add</button>
            <ul>
                {item.map(it => (
                    <li key={it.id}>{it.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounterFour