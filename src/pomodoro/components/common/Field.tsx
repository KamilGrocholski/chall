type FieldProps = {
    label?: string
    children: React.ReactElement
}

const Field: React.FC<FieldProps> = ({ children, label }) => {
    return (
        <div className='flex flex-col space-y-2'>
            {label ? (
                <label className='text-xs font-semibold text-p-gray-muted'>
                    {label}
                </label>
            ) : null}
            {children}
        </div>
    )
}

export default Field
