import useFormContext from '../hooks/useFormContext'

const SidebarStepButton = ({
    title,
    step,
}: {
    title: string
    step: number
}) => {
    const { step: currentStep } = useFormContext()

    const isCurrentStep = step === currentStep

    const activeStyleBackground = (isToggled: boolean): string =>
        isToggled
            ? 'border-0 bg-secondary'
            : 'border-2 border-accent bg-transparent'

    const activeStyleText = (isToggled: boolean): string =>
        isToggled ? 'text-primary' : 'text-secondary'

    return (
        <div className='md:flex md:items-center md:gap-4'>
            <span
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ease-in-out ${activeStyleBackground(
                    isCurrentStep
                )}`}
            >
                <p
                    className={`transition-colors duration-300 ease-in-out font-semibold ${activeStyleText(
                        isCurrentStep
                    )}`}
                >
                    {step + 1}
                </p>
            </span>
            <div className='hidden md:block text-start'>
                <small className='text-xs uppercase text-accent'>
                    step {step + 1}
                </small>
                <p className='font-semibold uppercase text-accent2'>{title}</p>
            </div>
        </div>
    )
}

export default SidebarStepButton
