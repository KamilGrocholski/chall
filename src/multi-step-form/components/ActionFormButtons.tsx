import useFormContext from '../hooks/useFormContext'
import Button from './Button'

const ActionFormButtons = () => {
    const { prev, next, submitForm, isLastStep, isFirstStep } = useFormContext()

    return (
        <section className='absolute bottom-0 left-0 flex h-20 w-full items-center justify-between bg-neutral-white px-4 md:static md:h-16 md:px-0'>
            <Button
                variant='transparent'
                size='lg'
                type='button'
                onClick={prev}
                className={`${isFirstStep ? 'invisible' : 'block'}`}
            >
                Go back
            </Button>
            <Button size='lg' onClick={isLastStep ? submitForm : next}>
                {isLastStep ? 'Confirm' : 'Next step'}
            </Button>
        </section>
    )
}

export default ActionFormButtons
