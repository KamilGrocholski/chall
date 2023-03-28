import clsx from 'clsx'

const PlanButton: React.FC<{
    onClick: () => void
    icon: string
    label: string
    priceInfo: string
    desc?: string
    isToggled: boolean
}> = ({ onClick, icon, label, desc, priceInfo, isToggled }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                'border py-3 px-5 rounded-lg flex md:items-start gap-4 md:flex-col md:justify-between items-center',
                isToggled ? 'border-primary' : 'border-muted'
            )}
        >
            <img src={icon} />
            <div className='flex flex-col text-left mt-10 w-full h-full'>
                <legend className='font-semibold text-xl text-primary'>
                    {label}
                </legend>
                <span className='text-muted'>{priceInfo}</span>
                <small className='text-primary font-semibold'>{desc}</small>
            </div>
        </button>
    )
}

export default PlanButton
