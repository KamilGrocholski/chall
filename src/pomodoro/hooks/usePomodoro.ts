import { useReducer, useState } from 'react'
import useCounter from './useCounter'
import useTimer from './useTimer'
import { TimeSettings } from '../context/SettingsContext'

export default function usePomodoro(
    pomodoroTimeInMin: number,
    shortBreakInMin: number,
    longBreakInMin: number
) {
    const { count, increment } = useCounter()
    const [isRunning, setIsRunning] = useState(false)
    const [timerName, setTimerName] = useState<keyof TimeSettings>('pomodoro')
    const [timers, setTimers] = useReducer<
        (prev: TimeSettings, update: Partial<TimeSettings>) => TimeSettings
    >((prev, update) => ({ ...prev, ...update }), {
        pomodoro: pomodoroTimeInMin,
        shortBreak: shortBreakInMin,
        longBreak: longBreakInMin,
    })
    const { start, reset, pause, seconds } = useTimer(
        timers[timerName] * 60,
        handleOnEnd
    )

    function handlePause() {
        pause()
        setIsRunning(false)
    }

    function handleOnEnd() {
        increment()
        if (timerName === 'pomodoro') {
            if (count % 2 === 0) {
                setTimerName('shortBreak')
                setIsRunning(true)
                start()
                return
            }
            if (count % 3 === 0) {
                setTimerName('longBreak')
                setIsRunning(true)
                start()
                return
            }
        } else {
            setIsRunning(true)
            setTimerName('pomodoro')
            start()
        }
    }

    return {
        seconds,
        start,
        pause: handlePause,
        timerName,
        isRunning,
    }
}
