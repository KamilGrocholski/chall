import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react'

type NumberInputProps = {
    min: number
    max: number
    value: number
    onChange: (value: number) => void
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({ min, max, onChange, value }, ref) => {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = parseInt(e.target.value, 10)
            if (!isNaN(newValue)) {
                onChange(newValue)
            }
        }

        return (
            <input
                type='number'
                onChange={handleChange}
                min={min}
                max={max}
                ref={ref}
                value={value}
                className='rounded-lg p-2 bg-p-gray-light border-none w-32'
            />
        )
    }
)

export default NumberInput
