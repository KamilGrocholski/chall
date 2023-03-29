import clsx from 'clsx'
import useSettings from '../hooks/useSettings'
import Divider from './common/Divider'
import Field from './common/Field'
import Modal from './common/Modal'
import NumberInput from './common/NumberInput'
import { BsCheck } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const SettingsModal: React.FC<{ isOpen: boolean; close(): void }> = ({
    isOpen,
    close,
}) => {
    const { time, setTime, font, setFont, color, setColor } = useSettings()

    return (
        <Modal isOpen={isOpen} close={close}>
            <section className='relative bg-white rounded-lg text-p-gray-dark w-fit'>
                <div className='flex w-full justify-between px-7 py-7'>
                    <h1 className='text-3xl font-bold'>Settings</h1>
                    <button onClick={close}>
                        <IoMdClose className='text-p-gray-muted font-bold text-xl' />
                    </button>
                </div>

                <Divider />

                <div className='px-7 flex flex-col space-y-4 pb-12 pt-5'>
                    <article>
                        <h2 className='text-lg font-bold mb-3'>
                            Time (Minutes)
                        </h2>
                        <form>
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
                        </form>
                    </article>

                    <Divider />

                    <article className='flex flex-row justify-between items-center'>
                        <h2 className='text-lg font-bold'>Font</h2>
                        <form>
                            <fieldset className='flex flex-row gap-3'>
                                <OptionButton
                                    onClick={() => setFont('A')}
                                    className={clsx(
                                        font === 'A'
                                            ? 'bg-p-gray-dark text-white'
                                            : 'bg-p-gray-light text-p-gray-dark'
                                    )}
                                >
                                    A
                                </OptionButton>
                                <OptionButton
                                    onClick={() => setFont('B')}
                                    className={clsx(
                                        font === 'B'
                                            ? 'bg-p-gray-dark text-white'
                                            : 'bg-p-gray-light text-p-gray-dark'
                                    )}
                                >
                                    B
                                </OptionButton>
                                <OptionButton
                                    onClick={() => setFont('C')}
                                    className={clsx(
                                        font === 'C'
                                            ? 'bg-p-gray-dark text-white'
                                            : 'bg-p-gray-light text-p-gray-dark'
                                    )}
                                >
                                    C
                                </OptionButton>
                            </fieldset>
                        </form>
                    </article>

                    <Divider />

                    <article className='flex flex-row justify-between items-center'>
                        <h2 className='text-lg font-bold'>Color</h2>
                        <form>
                            <fieldset className='flex flex-row gap-3'>
                                <OptionButton
                                    onClick={() => setColor('red')}
                                    className='bg-p-color-red'
                                >
                                    {color === 'red' ? <BsCheck /> : null}
                                </OptionButton>
                                <OptionButton
                                    onClick={() => setColor('sky')}
                                    className='bg-p-color-blue'
                                >
                                    {color === 'sky' ? <BsCheck /> : null}
                                </OptionButton>
                                <OptionButton
                                    onClick={() => setColor('purple')}
                                    className='bg-p-color-purple'
                                >
                                    {color === 'purple' ? <BsCheck /> : null}
                                </OptionButton>
                            </fieldset>
                        </form>
                    </article>
                </div>

                <div className='absolute -bottom-4 left-0 right-0 bg-transparent'>
                    <button className='px-5 py-1 w-fit mx-auto flex rounded-3xl text-xl font-semibold bg-p-color-red'>
                        Apply
                    </button>
                </div>
            </section>
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
                'rounded-full h-10 w-10 flex items-center justify-center text-2xl',
                className
            )}
        >
            {children}
        </button>
    )
}

export default SettingsModal
