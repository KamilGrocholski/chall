import { useEffect } from 'react'

export default function useInterval(callbackFn: () => void, timeInMs: number) {
    useEffect(() => {
        const interval = setInterval(() => {
            callbackFn()
        }, timeInMs)

        return () => {
            clearInterval(interval)
        }
    }, [callbackFn, timeInMs])
}
