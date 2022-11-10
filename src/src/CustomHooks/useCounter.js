import { useState } from 'react'

export function useCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        if (count > -1) {
            setCount(prevCount => prevCount - 1)
        }
    }
    return { count, increment, decrement }
}
