import { useState } from 'react'
import SettingsModal from './components/SettingsModal'
import Circle from './components/Circle'
import clsx from 'clsx'
import { COLOR, formatTime, getPercent } from './utils'
import useSettingsContext from './hooks/useSettings'
import { IoMdSettings } from 'react-icons/io'
import usePomodoro from './hooks/usePomodoro'

const PomodoroPage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const { color, time } = useSettingsContext()
    const pomodoro = usePomodoro({
        workTime: time.pomodoro * 60,
        shortBreakTime: time.shortBreak * 60,
        longBreakTime: time.longBreak * 60,
        longBreakInterval: 4,
    })

    const handleWorkClick = () => {
        pomodoro.stopTimer()
        pomodoro.startTimer('work')
    }

    const handleShortBreakClick = () => {
        pomodoro.stopTimer()
        pomodoro.startTimer('shortBreak')
    }

    const handleLongBreakClick = () => {
        pomodoro.stopTimer()
        pomodoro.startTimer('longBreak')
    }

    return (
        <div className='relative h-screen bg-gray-800 p-6'>
            <SettingsModal
                isOpen={isSettingsOpen}
                close={() => setIsSettingsOpen(false)}
            />

            <header className='h-[15%] w-full flex flex-col space-y-8 items-center justify-center'>
                <span className='text-2xl font-bold text-p-gray-light'>
                    pomodoro
                </span>
                <div className='flex flex-row bg-p-gray-dark gap-3 rounded-3xl p-1.5'>
                    <button
                        onClick={handleWorkClick}
                        className={clsx(
                            pomodoro.phase === 'work'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        pomodoro
                    </button>
                    <button
                        onClick={handleShortBreakClick}
                        className={clsx(
                            pomodoro.phase === 'shortBreak'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        short break
                    </button>
                    <button
                        onClick={handleLongBreakClick}
                        className={clsx(
                            pomodoro.phase === 'longBreak'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        long break
                    </button>
                </div>
            </header>

            <div className='h-[70%]'>
                <Circle
                    percent={getPercent(
                        pomodoro.timeLeft,
                        pomodoro.phase === 'work'
                            ? time.pomodoro * 60
                            : pomodoro.phase === 'longBreak'
                            ? time.longBreak * 60
                            : time.shortBreak * 60
                    )}
                >
                    <div className='text-p-gray-light flex flex-col space-y-8 pt-8'>
                        <span className='text-5xl font-bold flex flex-row items-center'>
                            {formatTime(pomodoro.timeLeft)}
                        </span>
                        <button
                            className='tracking-[0.5rem] uppercase text-xs font-bold'
                            onClick={
                                pomodoro.isRunning
                                    ? pomodoro.stopTimer
                                    : () => pomodoro.startTimer()
                            }
                        >
                            {pomodoro.isRunning ? 'pause' : 'start'}
                        </button>
                    </div>
                </Circle>
            </div>

            <footer className='h-[15%] w-full flex justify-center'>
                <button onClick={() => setIsSettingsOpen(true)}>
                    <IoMdSettings
                        className={clsx(
                            'text-p-gray-muted text-3xl',
                            COLOR[color].textHover
                        )}
                    />
                </button>
            </footer>
        </div>
    )
}

export default PomodoroPage
