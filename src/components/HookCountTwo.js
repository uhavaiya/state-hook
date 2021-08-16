import React, { useState } from 'react'

function HookCountTwo() {
    const initalCount = 0
    const [count, setCount] = useState(initalCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount +1)
        }
    }
    return (
        <div>
            <div>
                Count : {count}
            </div>
            <br />
            <div>
                <button style={{ marginRight: '10px' }} onClick={() => setCount(initalCount)}>Reset</button>
                <button style={{ marginRight: '10px' }} onMouseOver={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={incrementFive}>Increment 5</button>
            </div>
        </div>
    )
}

export default HookCountTwo

