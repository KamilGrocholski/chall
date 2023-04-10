import Toggle from './components/Toggle'
import PricingButton from './components/PricingButton'
import { useState } from 'react'

const data = [
    {
        label: 'Basic',
        descriptions: ['500 GB Storage', '2 Users Allowed', 'Send up to 3GB'],
        price: {
            annually: 199.99,
            monthly: 19.99,
        },
        isHighlighted: false,
    },
    {
        label: 'Professional',
        descriptions: ['1 TB Storage', '5 Users Allowed', 'Send up to 10GB'],
        price: {
            annually: 249.99,
            monthly: 24.99,
        },
        isHighlighted: true,
    },
    {
        label: 'Master',
        descriptions: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
        price: {
            annually: 399.99,
            monthly: 39.99,
        },
        isHighlighted: false,
    },
] as const

// width="353" height="304" bottom
// width="375" height="658" top

const PricingComponent = () => {
    const [plan, setPlan] = useState<'annually' | 'monthly'>('monthly')

    return (
        <div className='overflow-hidden bg-white relative mx-auto shadow-black shadow-2xl w-[90%] z-0 lg:p-12 p-4 mt-auto mb-auto'>
            <div className='bg-pcBgTop absolute top-0 right-0 h-[658px] w-[375px] -z-10'></div>

            <div className='flex flex-col items-center space-y-10 z-0'>
                <p className='text-3xl font-semibold text-gray-500'>
                    Our pricing
                </p>
                <Toggle
                    options={['Annually', 'Monthly']}
                    onToggle={() =>
                        setPlan((prev) =>
                            prev === 'annually' ? 'monthly' : 'annually'
                        )
                    }
                    value={plan === 'annually' ? 0 : 1}
                />
                <div className='grid lg:grid-cols-3 lg:gap-0 gap-8 grid-cols-1 w-full px-12 items-center'>
                    {data.map((pricing) => (
                        <PricingButton
                            key={pricing.label}
                            price={pricing.price[plan]}
                            descriptions={pricing.descriptions}
                            isHighlighted={pricing.isHighlighted}
                            label={pricing.label}
                            onClick={console.log}
                        />
                    ))}
                </div>
            </div>

            <div className='bg-pcBgBottom absolute bottom-0 left-0 h-[304px] w-[353px] -z-10'></div>
        </div>
    )
}

export default PricingComponent
