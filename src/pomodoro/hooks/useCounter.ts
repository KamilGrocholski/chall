import { useState } from 'react'

export default function useCounter(defaultValue: number = 0) {
    const [count, setCount] = useState(defaultValue)

    function increment() {
        setCount((prev) => prev + 1)
    }

    function decrement() {
        setCount((prev) => prev - 1)
    }

    return {
        count,
        increment,
        decrement,
    }
}
