import { useState } from 'react'
import SettingsModal from './components/SettingsModal'
import Circle from './components/Circle'
import clsx from 'clsx'
import { COLOR, getMinutes, getSeconds } from './utils'
import useSettingsContext from './hooks/useSettings'
import { IoMdSettings } from 'react-icons/io'
import usePomodoro from './hooks/usePomodoro'

const PomodoroPage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const { color, time } = useSettingsContext()
    const { pause, start, seconds, timerName, isRunning } = usePomodoro(
        time.pomodoro,
        time.shortBreak,
        time.longBreak
    )

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
                    <div
                        className={clsx(
                            timerName === 'pomodoro'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        pomodoro
                    </div>
                    <div
                        className={clsx(
                            timerName === 'shortBreak'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        short break
                    </div>
                    <div
                        className={clsx(
                            timerName === 'longBreak'
                                ? `${COLOR[color].bg} text-p-gray-dark`
                                : 'text-p-gray-muted',
                            'rounded-3xl px-4 py-2.5 font-semibold'
                        )}
                    >
                        long break
                    </div>
                </div>
            </header>

            <div className='h-[70%]'>
                <Circle percent={50}>
                    <div className='text-p-gray-light flex flex-col space-y-8 pt-8'>
                        <span className='text-6xl font-bold flex flex-row items-center'>
                            <span>{getMinutes(seconds)}</span>
                            <span>:</span>
                            <span>{getSeconds(seconds)}</span>
                        </span>
                        <button
                            className='tracking-widest uppercase text-xs'
                            onClick={isRunning ? pause : start}
                        >
                            {isRunning ? 'Pause' : 'Start'}
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
