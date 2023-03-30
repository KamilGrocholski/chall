import { useState } from 'react'
import SettingsModal from './components/SettingsModal'
import Circle from './components/Circle'
import clsx from 'clsx'
import { COLOR } from './utils'
import useSettingsContext from './hooks/useSettings'
import { IoMdSettings } from 'react-icons/io'

const PomodoroPage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const { color } = useSettingsContext()

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
                            COLOR[color].bg,
                            'rounded-3xl px-4 py-2.5'
                        )}
                    >
                        pomodoro
                    </div>
                    <div
                        className={clsx(
                            // COLOR[color].bg,
                            'rounded-3xl px-4 py-2.5'
                        )}
                    >
                        short break
                    </div>
                    <div
                        className={clsx(
                            // COLOR[color].bg,
                            'rounded-3xl px-4 py-2.5'
                        )}
                    >
                        long break
                    </div>
                </div>
            </header>

            <div className='h-[70%]'>
                <Circle percent={50}>
                    <div className='text-p-gray-light flex flex-col space-y-8 pt-8'>
                        <span className='text-6xl font-bold'>17:58</span>
                        <button className='tracking-widest uppercase text-xs'>
                            Pause
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
