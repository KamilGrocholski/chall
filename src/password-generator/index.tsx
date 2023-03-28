import { useReducer, useState } from 'react'
import { Config, generatePassword } from './utils'

const PasswordGeneratorPage = () => {
    const [config, setConfig] = useReducer<
        (prev: Config, update: Partial<Config>) => Config
    >((prev, update) => ({ ...prev, ...update }), {
        length: 5,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    })
    const [password, setPassword] = useState<undefined | string>(undefined)

    function handleGeneratePassowrd() {
        const password = generatePassword(config)
        setPassword(password)
    }

    return (
        <div>
            <div>{password}</div>
            <Slider
                label={'Character Length'}
                min={1}
                max={255}
                value={config.length}
                onChange={(length) => setConfig({ length })}
            />
            <Checkbox
                label='Include Uppercase Letters'
                isChecked={config.uppercase}
                onChange={() => setConfig({ uppercase: !config.uppercase })}
            />
            <Checkbox
                label='Include Lowercase Letters'
                isChecked={config.lowercase}
                onChange={() => setConfig({ lowercase: !config.lowercase })}
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
            <button
                className='border bg-teal-500'
                onClick={handleGeneratePassowrd}
            >
                Generate
            </button>
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
            <label className='flex flex-row gap-5'>
                <span>{label}</span>
                <span>{sliderValue}</span>
            </label>
            <input
                type='range'
                min={min}
                max={max}
                disabled={disabled}
                aria-disabled={disabled}
                value={sliderValue}
                onChange={handleChange}
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
        <div>
            <input
                id={label}
                type='checkbox'
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default PasswordGeneratorPage
