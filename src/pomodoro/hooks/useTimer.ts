import { useState, useEffect } from 'react'

interface Timer {
    seconds: number
    start: () => void
    pause: () => void
    reset: () => void
}

const useTimer = (initialSeconds: number, onEnd?: () => void): Timer => {
    const [seconds, setSeconds] = useState(initialSeconds)
    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    useEffect(() => {
        if (seconds === 0) {
            onEnd && onEnd()
            clearInterval(timerId as number)
        }
    }, [seconds, timerId])

    const start = () => {
        if (timerId === undefined) {
            const id = setInterval(() => {
                if (seconds === 0) {
                    onEnd && onEnd()
                    clearInterval(timerId)
                } else {
                    setSeconds((prev) => prev - 1)
                }
            }, 1000)
            setTimerId(id)
        }
    }

    const pause = () => {
        if (timerId !== undefined) {
            clearInterval(timerId)
            setTimerId(undefined)
        }
    }

    const reset = () => {
        setSeconds(initialSeconds)
        pause()
    }

    return { seconds, start, pause, reset }
}

export default useTimer
