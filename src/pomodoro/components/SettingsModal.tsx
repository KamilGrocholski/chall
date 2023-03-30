import clsx from 'clsx'
import useSettingsContext, { useSettings } from '../hooks/useSettings'
import Divider from './common/Divider'
import Field from './common/Field'
import Modal from './common/Modal'
import NumberInput from './common/NumberInput'
import { BsCheck } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { COLOR } from '../utils'

const SettingsModal: React.FC<{ isOpen: boolean; close(): void }> = ({
    isOpen,
    close,
}) => {
    const originSettings = useSettingsContext()
    const { time, setTime, font, setFont, color, setColor } =
        useSettings(originSettings)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        originSettings.setColor(color)
        originSettings.setFont(font)
        originSettings.setTime({ ...time })
    }

    return (
        <Modal isOpen={isOpen} close={close}>
            <form
                onSubmit={handleSubmit}
                className='relative bg-white rounded-3xl text-p-gray-dark w-fit'
            >
                <div className='flex w-full justify-between px-7 py-7'>
                    <h1 className='text-3xl font-bold'>Settings</h1>
                    <button onClick={close}>
                        <IoMdClose className='text-p-gray-muted font-bold text-xl' />
                    </button>
                </div>

                <Divider />

                <div className='px-7 flex flex-col space-y-4 pb-12 pt-5'>
                    <article>
                        <h2 className='font-bold mb-3 tracking-widest uppercase'>
                            Time (Minutes)
                        </h2>
                        <fieldset className='grid grid-cols-3 gap-3'>
                            <Field label='pomodoro'>
                                <NumberInput
                                    min={0}
                                    max={255}
                                    value={time.pomodoro}
                                    onChange={(value) =>
                                        setTime({ pomodoro: value })
                                    }
                                />
                            </Field>
                            <Field label='short break'>
                                <NumberInput
                                    min={0}
                                    max={255}
                                    value={time.shortBreak}
                                    onChange={(value) =>
                                        setTime({ shortBreak: value })
                                    }
                                />
                            </Field>
                            <Field label='long break'>
                                <NumberInput
                                    min={0}
                                    max={255}
                                    value={time.longBreak}
                                    onChange={(value) =>
                                        setTime({ longBreak: value })
                                    }
                                />
                            </Field>
                        </fieldset>
                    </article>

                    <Divider />

                    <article className='flex flex-row justify-between items-center'>
                        <h3 className='text-sm font-bold tracking-widest uppercase'>
                            Font
                        </h3>

                        <fieldset className='flex flex-row gap-3'>
                            <OptionButton
                                onClick={() => setFont('A')}
                                className={clsx(
                                    font === 'A'
                                        ? 'bg-p-gray-dark text-white'
                                        : 'bg-p-gray-light text-p-gray-dark'
                                )}
                            >
                                Aa
                            </OptionButton>
                            <OptionButton
                                onClick={() => setFont('B')}
                                className={clsx(
                                    font === 'B'
                                        ? 'bg-p-gray-dark text-white'
                                        : 'bg-p-gray-light text-p-gray-dark'
                                )}
                            >
                                Aa
                            </OptionButton>
                            <OptionButton
                                onClick={() => setFont('C')}
                                className={clsx(
                                    font === 'C'
                                        ? 'bg-p-gray-dark text-white'
                                        : 'bg-p-gray-light text-p-gray-dark'
                                )}
                            >
                                Aa
                            </OptionButton>
                        </fieldset>
                    </article>

                    <Divider />

                    <article className='flex flex-row justify-between items-center'>
                        <h3 className='text-sm font-bold tracking-widest uppercase'>
                            Color
                        </h3>

                        <fieldset className='flex flex-row gap-3'>
                            <OptionButton
                                onClick={() => setColor('red')}
                                className={COLOR['red'].bg}
                            >
                                {color === 'red' ? <BsCheck /> : null}
                            </OptionButton>
                            <OptionButton
                                onClick={() => setColor('blue')}
                                className={COLOR['blue'].bg}
                            >
                                {color === 'blue' ? <BsCheck /> : null}
                            </OptionButton>
                            <OptionButton
                                onClick={() => setColor('purple')}
                                className={COLOR['purple'].bg}
                            >
                                {color === 'purple' ? <BsCheck /> : null}
                            </OptionButton>
                        </fieldset>
                    </article>
                </div>

                <div className='absolute -bottom-4 left-0 right-0 bg-transparent'>
                    <button
                        type='submit'
                        className={clsx(
                            'px-10 py-3 w-fit mx-auto flex rounded-3xl text-white font-semibold',
                            COLOR[originSettings.color].bg
                        )}
                    >
                        Apply
                    </button>
                </div>
            </form>
        </Modal>
    )
}

type OptionButtonProps = {
    children: React.ReactNode
    onClick(): void
    className?: string
}

const OptionButton: React.FC<OptionButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                'rounded-full h-8 w-8 flex items-center justify-center',
                className
            )}
        >
            {children}
        </button>
    )
}

export default SettingsModal
