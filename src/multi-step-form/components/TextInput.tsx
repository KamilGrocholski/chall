import { InputHTMLAttributes, forwardRef } from 'react'

type TextInputProps = {
    placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ placeholder, ...rest }, ref) => {
        return (
            <input
                className="rounded-lg border border-gray-300 font-medium text-md p-3 w-full"
                placeholder={placeholder}
                aria-label={placeholder}
                type="text"
                {...rest}
                ref={ref}
            />
        )
    },
)

export default TextInput
