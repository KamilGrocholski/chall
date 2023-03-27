import { LabelHTMLAttributes, forwardRef } from 'react'
import { mustGetChildId } from '../utils'

type FieldProps = {
    label: string
    errorMessage?: string
    children: JSX.Element
} & LabelHTMLAttributes<HTMLLabelElement>

const Field = forwardRef<HTMLLabelElement, FieldProps>(
    ({ errorMessage, children, label, ...rest }, ref) => {
        const id = mustGetChildId(children)

        return (
            <label
                htmlFor={id}
                {...rest}
                ref={ref}
                className='flex flex-col w-full'
            >
                <span className='font-semibold text-lg text-blue-900'>
                    {label}
                </span>
                {children}
                {errorMessage ? <small>{errorMessage}</small> : null}
            </label>
        )
    }
)

export default Field
