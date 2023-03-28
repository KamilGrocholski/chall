import clsx from 'clsx'
import useFormContext from '../hooks/useFormContext'
import { composePrice } from '../utils'

const PlanButton: React.FC<{
    onClick: () => void
    icon: string
    label: string
    price: number
    desc: string
    isToggled: boolean
}> = ({ onClick, icon, label, desc, price, isToggled }) => {
    const { formData } = useFormContext()

    return (
        <button
            type='button'
            onClick={onClick}
            className={clsx(
                'border py-3 px-5 rounded-lg',
                isToggled ? 'border-primary' : 'border-muted'
            )}
        >
            <img src={icon} />
            <div className='flex flex-col text-left mt-10'>
                <legend className='font-semibold text-xl text-primary'>
                    {label}
                </legend>
                <span className='text-muted'>
                    {' '}
                    {composePrice(
                        '$',
                        price,
                        formData.billing === 'Monthly' ? '/mo' : '/yr'
                    )}
                </span>
                <small className='text-primary font-semibold'>{desc}</small>
            </div>
        </button>
    )
}

export default PlanButton
