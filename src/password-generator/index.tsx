import { useReducer, useState } from 'react'
import {
    Config,
    PASSWORD_STRENGTH,
    PasswordStrengthType,
    generatePassword,
    getPasswordStrength,
} from './utils'
import useCopyToClipboard from './hooks/useCopyToClipboard'
import clsx from 'clsx'
import { FaRegCopy } from 'react-icons/fa'
import { TiArrowRight } from 'react-icons/ti'

const generateDefaultConfig = (): Config => {
    return {
        length: 8,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
    }
}

const PasswordGeneratorPage = () => {
    const [showWarning, setShowWarning] = useState(false)

    const [config, setConfig] = useReducer<
        (prev: Config, update: Partial<Config>) => Config,
        Config
    >(
        (prev, update) => {
            if (
                showWarning &&
                (update.lowercase ||
                    update.uppercase ||
                    update.symbols ||
                    update.numbers)
            ) {
                setShowWarning(false)
            }
            return { ...prev, ...update }
        },
        {
            length: 5,
            uppercase: false,
            lowercase: false,
            numbers: false,
            symbols: false,
        },
        generateDefaultConfig
    )
    const [password, setPassword] = useState<undefined | string>(undefined)

    function handleGeneratePassowrd(e: React.FormEvent) {
        e.preventDefault()
        try {
            const password = generatePassword(config)
            setPassword(password)
        } catch (error) {
            setShowWarning(true)
        }
    }

    return (
        <div className='h-screen w-full bg-pg-dark text-white flex items-center'>
            <form
                onSubmit={handleGeneratePassowrd}
                className='w-fit h-fit mx-auto flex flex-col space-y-5 min-w-[320px] md:min-w-[400px]'
            >
                <h1 className='text-pg-muted text-center text-2xl font-bold'>
                    Password Generator
                </h1>
                <CopyText text={password} placeholder='P4$5W0rD!' />
                <fieldset className='flex flex-col space-y-2 px-3 py-2 bg-pg-light'>
                    <Slider
                        label={'Character Length'}
                        min={1}
                        max={255}
                        value={config.length}
                        onChange={(length) => setConfig({ length })}
                    />
                    {showWarning ? (
                        <p className='text-red-500'>
                            'Check at least one of the following'
                        </p>
                    ) : null}
                    <Checkbox
                        label='Include Uppercase Letters'
                        isChecked={config.uppercase}
                        onChange={() =>
                            setConfig({ uppercase: !config.uppercase })
                        }
                    />
                    <Checkbox
                        label='Include Lowercase Letters'
                        isChecked={config.lowercase}
                        onChange={() =>
                            setConfig({ lowercase: !config.lowercase })
                        }
                    />
                    <Checkbox
                        label='Include Numbers'
                        isChecked={config.numbers}
                        onChange={() => setConfig({ numbers: !config.numbers })}
                    />
                    <Checkbox
                        label='Include Symbols'
                        isChecked={config.symbols}
                        onChange={() => setConfig({ symbols: !config.symbols })}
                    />
                    <PasswordStrength strength={getPasswordStrength(config)} />
                    <button
                        className={clsx(
                            ' w-full text-pg-light px-3 py-2 font-semibold border flex flex-row items-center justify-center text-lg',
                            !password?.length
                                ? 'bg-pg-primary'
                                : 'bg-pg-light border-pg-primary text-pg-primary'
                        )}
                        type='submit'
                    >
                        <span>Generate</span>
                        <TiArrowRight className='text-xl ml-1' />
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

const Slider: React.FC<{
    min: number
    max: number
    disabled?: boolean
    value: number
    label: string
    onChange: (value: number) => void
}> = ({ min, max, value, disabled, onChange, label }) => {
    const [sliderValue, setSliderValue] = useState(value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value)
        setSliderValue(newValue)
        onChange(newValue)
    }

    return (
        <div>
            <label className='flex flex-row justify-between items-center'>
                <span>{label}</span>
                <span className='text-pg-primary font-semibold text-3xl'>
                    {sliderValue}
                </span>
            </label>
            <input
                type='range'
                min={min}
                max={max}
                disabled={disabled}
                aria-disabled={disabled}
                value={sliderValue}
                onChange={handleChange}
                className='w-full slider'
                data-percent={(sliderValue / max) * 100}
            />
        </div>
    )
}

const Checkbox: React.FC<{
    label: string
    isChecked: boolean
    onChange: () => void
}> = ({ isChecked, onChange, label }) => {
    return (
        <div className='flex items-center flex-row'>
            <input
                id={label}
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
                className='bg-pg-light border border-white text-pg-primary focus:ring-pg-dark accent-pg-light'
            />
            <label className='ml-2' htmlFor={label}>
                {label}
            </label>
        </div>
    )
}

const CopyText: React.FC<{ text?: string; placeholder?: string }> = ({
    text,
    placeholder,
}) => {
    const [, copyFn] = useCopyToClipboard()

    const handleCopyText = () => {
        if (!text) {
            return
        }
        copyFn(text)
    }

    const isButtonDisabled = !text || !text.length

    return (
        <div className='flex flex-row bg-pg-light px-3 py-3 justify-between'>
            <input
                placeholder={placeholder}
                value={text ?? ''}
                disabled={true}
                aria-disabled={true}
                className='bg-pg-light placeholder:text-pg-muted text-white'
            />
            <button
                type='button'
                disabled={isButtonDisabled}
                aria-disabled={isButtonDisabled}
                className={clsx(
                    'relative',
                    isButtonDisabled && 'pointer-events-none'
                )}
                onClick={handleCopyText}
            >
                <div className='abolute bottom-3 left-4 bg-pg-light border-pg-primary px-3 py-2'>
                    Copied!
                </div>
                <FaRegCopy className='text-pg-primary' />
            </button>
        </div>
    )
}

const PasswordStrength: React.FC<{ strength: PasswordStrengthType }> = ({
    strength,
}) => {
    return (
        <div className='bg-pg-dark px-3 py-4 w-full flex flex-row justify-between items-center'>
            <span className='uppercase text-pg-muted w-fit font-bold'>
                Strength
            </span>
            <div className='flex flex-row items-center w-fit'>
                <div className='font-semibold'>{strength}</div>
                <div className='flex items-center flex-row'>
                    {Array.from({ length: 4 })
                        .fill(0)
                        .map((_, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    'w-3 h-7 border border-white ml-1',
                                    PASSWORD_STRENGTH[strength]
                                )}
                            ></div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default PasswordGeneratorPage
