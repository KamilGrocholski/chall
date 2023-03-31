type FieldProps = {
    label: string
    children: React.ReactNode
    errorMessage?: string
    htmlFor: string
}

const Field: React.FC<FieldProps> = ({
    label,
    children,
    errorMessage,
    htmlFor,
}) => {
    return (
        <div className='flex flex-col space-y-1'>
            <label
                htmlFor={htmlFor}
                className='uppercase text-xs font-semibold tracking-widest'
            >
                {label}
            </label>
            {children}
            {errorMessage ? (
                <small className='text-xs text-red-500'>{errorMessage}</small>
            ) : null}
        </div>
    )
}

export default Field
