import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonProps = {
    isLoading?: boolean
    children: React.ReactNode
    disabled?: boolean
    variant?: keyof typeof VARIANT
    size?: keyof typeof SIZE
    className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            isLoading,
            disabled,
            variant = 'primary',
            size = 'md',
            className,
            ...rest
        },
        ref
    ) => {
        return (
            <button
                type='button'
                disabled={disabled}
                aria-disabled={disabled}
                {...rest}
                ref={ref}
                className={clsx(
                    'rounded-lg',
                    className,
                    disabled && 'opacity-50',
                    VARIANT[variant],
                    SIZE[size]
                )}
            >
                {isLoading ? 'Loading...' : children}
            </button>
        )
    }
)

Button.displayName = 'Button'

const VARIANT = {
    primary: 'bg-primary border border-gray-900 text-gray-50',
    transparent: 'text-gray-500',
} as const

const SIZE = {
    md: 'px-3 py-1 text-sm',
    lg: 'px-5 py-2 text-lg',
} as const

export default Button
