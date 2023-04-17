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
                className="flex flex-col w-full"
            >
                <span className="font-semibold text-md mb-1 text-primary">
                    {label}
                </span>
                {children}
                {errorMessage ? (
                    <small className="text-sm text-red-500 font-semibold">
                        {errorMessage}
                    </small>
                ) : null}
            </label>
        )
    },
)

export default Field
