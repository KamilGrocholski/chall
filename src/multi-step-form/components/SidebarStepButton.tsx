import useFormContext from '../hooks/useFormContext'

const SidebarStepButton = ({
    title,
    step,
}: {
    title: string
    step: number
}) => {
    const { step: currentStep, goTo } = useFormContext()

    const isCurrentStep = step === currentStep

    const activeStyleBackground = (isToggled: boolean): string =>
        isToggled
            ? 'border-0 bg-blue-400'
            : 'border-2 border-blue-400 bg-transparent'

    const activeStyleText = (isToggled: boolean): string =>
        isToggled ? 'text-blue-200' : 'text-blue-100'

    return (
        <button
            className='md:flex md:items-center md:gap-4'
            onClick={() => goTo(step)}
        >
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
                <small className='text-xs uppercase text-blue-400'>
                    step {step + 1}
                </small>
                <p className='font-semibold uppercase text-red-100'>{title}</p>
            </div>
        </button>
    )
}

export default SidebarStepButton
