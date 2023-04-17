import { useEffect, useRef, useState } from 'react'

type TimerPhase = 'work' | 'shortBreak' | 'longBreak'

interface PomodoroConfig {
    workTime: number
    shortBreakTime: number
    longBreakTime: number
    longBreakInterval: number
}

interface PomodoroState {
    phase: TimerPhase
    timeLeft: number
    isRunning: boolean
}

type PomodoroHook = PomodoroState & {
    startTimer: (phase?: TimerPhase) => void
    stopTimer: () => void
}

const usePomodoro = (config: PomodoroConfig): PomodoroHook => {
    const { workTime, shortBreakTime, longBreakTime, longBreakInterval } =
        config

    const [phase, setPhase] = useState<TimerPhase>('work')
    const [timeLeft, setTimeLeft] = useState(workTime)
    const [isRunning, setIsRunning] = useState(false)

    const timerRef = useRef<NodeJS.Timer>()

    const switchToNextPhase = () => {
        setIsRunning(false)

        if (phase === 'work') {
            setPhase('shortBreak')
            setTimeLeft(shortBreakTime)
        } else if (phase === 'shortBreak') {
            setPhase('work')
            setTimeLeft(workTime)
        } else {
            setPhase('work')
            setTimeLeft(workTime)
        }
    }

    const startTimer = () => {
        setIsRunning(true)
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
        }, 1000)
    }

    const stopTimer = () => {
        setIsRunning(false)

        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = undefined
        }
    }

    useEffect(() => {
        if (timeLeft === 0) {
            switchToNextPhase()
        }
    }, [timeLeft])

    useEffect(() => {
        if (phase === 'work') {
            setTimeLeft(workTime)
        } else if (phase === 'shortBreak') {
            setTimeLeft(shortBreakTime)
        } else {
            setTimeLeft(longBreakTime)
        }
    }, [phase, workTime, shortBreakTime, longBreakTime])

    useEffect(() => {
        if (phase === 'work' && isRunning && timeLeft === workTime) {
            stopTimer()
            startTimer()
        } else if (
            phase === 'shortBreak' &&
            isRunning &&
            timeLeft === shortBreakTime
        ) {
            stopTimer()
            startTimer()
        } else if (
            phase === 'longBreak' &&
            isRunning &&
            timeLeft === longBreakTime
        ) {
            stopTimer()
            startTimer()
        }
    }, [
        phase,
        isRunning,
        timeLeft,
        workTime,
        shortBreakTime,
        longBreakTime,
        longBreakInterval,
    ])

    return { phase, timeLeft, isRunning, startTimer, stopTimer }
}

export default usePomodoro
