import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

type TextInputProps = {
    placeholder: string
    isError: boolean
    className?: string
    id: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ placeholder, id, className, isError, ...rest }, ref) => {
        return (
            <input
                type='text'
                id={id}
                placeholder={placeholder}
                aria-placeholder={placeholder}
                {...rest}
                ref={ref}
                className={clsx(
                    'border placeholder-gray-400 py-2 px-3 rounded-md border-gray-300',
                    isError && 'border-red-500 outline-red-500',
                    className
                )}
            />
        )
    }
)

export default TextInput
