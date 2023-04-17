import { FormData } from '../schemes'

const BillingToggle: React.FC<{
    onClick: () => void
    currentBilling: FormData['billing']
}> = ({ onClick, currentBilling }) => {
    const activeStyle = (isToggled: boolean): string =>
        isToggled ? 'text-primary' : 'text-muted'

    return (
        <div className="flex h-10 w-full items-center justify-center gap-8 rounded-lg bg-gray-50">
            <p
                className={`font-bold capitalize transition-colors ${activeStyle(
                    currentBilling !== 'Yearly',
                )}`}
            >
                monthly
            </p>
            <label
                htmlFor="yearlySubscription"
                className="relative inline-flex cursor-pointer items-center"
            >
                <input
                    name="yearlySubscription"
                    id="yearlySubscription"
                    type="checkbox"
                    className="peer sr-only"
                    onChange={onClick}
                    checked={currentBilling === 'Yearly'}
                />
                <div className="peer h-6 w-11 rounded-full bg-primary after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring peer-focus:ring-black" />
            </label>
            <p
                className={`font-bold capitalize transition-colors ${activeStyle(
                    currentBilling === 'Yearly',
                )}`}
            >
                yearly
            </p>
        </div>
    )
}

export default BillingToggle
