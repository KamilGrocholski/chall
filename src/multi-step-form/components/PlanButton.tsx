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
            type="button"
            onClick={onClick}
            className={clsx(
                'border py-2 px-4 rounded-lg flex md:items-start gap-4 md:flex-col md:justify-between items-start',
                isToggled ? 'border-primary' : 'border-muted',
            )}
        >
            <img src={icon} />
            <div className="flex flex-col items-start md:mt-10 mt-0 w-full h-full">
                <legend className="font-semibold text-xl text-primary">
                    {label}
                </legend>
                <span className="text-muted">{priceInfo}</span>
                <small className="text-primary font-semibold">{desc}</small>
            </div>
        </button>
    )
}

export default PlanButton
