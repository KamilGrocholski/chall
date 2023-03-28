import { useEffect, useState } from 'react'

export default function useTimer(targetDate: Date) {
    const countdownDate = new Date(targetDate).getTime()

    const now = new Date().getTime()

    const [prevCountdown, setPrevCountdown] = useState(countdownDate - now)

    const [countdown, setCountdown] = useState(countdownDate - now)

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            setCountdown((prev) => {
                setPrevCountdown(prev)
                return countdownDate - now
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [countdownDate])

    return {
        prev: getUnitsFromDate(prevCountdown),
        current: getUnitsFromDate(countdown),
    }
}

function getUnitsFromDate(time: number) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((time % (1000 * 60)) / 1000)

    return [days, hours, minutes, seconds]
}
