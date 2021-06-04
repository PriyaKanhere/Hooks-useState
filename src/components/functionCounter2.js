import React, { useState } from 'react'

function HookCounter2() {
    const [count, setCount] = useState(0)
    return (
        <duv>

            <h5>Counter by 5: {count}</h5>

            <button onClick={() => setCount(prevcounter => prevcounter + 5)}>Increment</button>
            <button onClick={() => setCount(prevcounter => prevcounter - 5)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </duv>
    )
}

export default HookCounter2