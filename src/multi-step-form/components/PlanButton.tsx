import clsx from 'clsx'

const PlanButton: React.FC<{
    onClick: () => void
    icon: string
    label: string
    desc: string
    subDesc: string
    isToggled: boolean
}> = ({ onClick, icon, label, desc, subDesc, isToggled }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                'border py-3 px-5 rounded-lg',
                isToggled ? 'border-blue-500' : 'border-gray-300'
            )}
        >
            <img src={icon} />
            <div className='flex flex-col text-left mt-10'>
                <legend className='font-semibold text-xl'>{label}</legend>
                <span className='text-gray-500 '>{desc}</span>
                <small className='text-blue-500'>{subDesc}</small>
            </div>
        </button>
    )
}

export default PlanButton
