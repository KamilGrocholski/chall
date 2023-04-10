import clsx from 'clsx'

export type PricingButtonProps = {
    label: string
    price: number
    descriptions: string[] | readonly string[]
    isHighlighted: boolean
    onClick: () => void
}

const PricingButton: React.FC<PricingButtonProps> = ({
    label,
    price,
    descriptions,
    isHighlighted,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'rounded-lg shadow z-0 shadow-gray-400 flex flex-col space-y-3 py-8 px-8 justify-center items-center',
                isHighlighted
                    ? 'bg-cp-primary py-16 z-10 text-white'
                    : 'bg-white text-black'
            )}
        >
            <p className='font-semibold'>{label}</p>
            <p className='flex items-center flex-row space-x-1'>
                <span className='font-bold text-3xl'>$</span>
                <span className='font-bold text-5xl'>{price}</span>
            </p>
            <ul className='flex flex-col divide-gray-200 divide-y w-full'>
                {descriptions.map((description) => (
                    <li className='py-3 text-center w-full' key={description}>
                        {description}
                    </li>
                ))}
            </ul>
            <button
                className={clsx(
                    'uppercase font-semibold text-center w-full rounded py-2.5 border',
                    isHighlighted
                        ? 'bg-white border-white text-cp-primary hover:bg-cp-primary hover:text-white'
                        : 'bg-cp-primary border-cp-primary text-white hover:bg-white hover:text-cp-primary'
                )}
            >
                Learn more
            </button>
        </div>
    )
}

export default PricingButton
