import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                <h5>Counter : {count}</h5>

                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

        </div>
    )
}

export default HookCounter