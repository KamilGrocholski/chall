import useFormContext from '../hooks/useFormContext'
import Button from './Button'

const ActionFormButtons = () => {
    const { prev, isLastStep, isFirstStep } = useFormContext()

    return (
        <section className='flex absolute bottom-0 md:self-end md:mt-auto left-0 h-20 w-full md:items-end items-center justify-between bg-white md:static'>
            <Button
                variant='transparent'
                size='lg'
                type='button'
                onClick={prev}
                className={`${isFirstStep ? 'invisible' : 'block'}`}
            >
                Go back
            </Button>
            <Button size='lg' type='submit'>
                {isLastStep ? 'Confirm' : 'Next step'}
            </Button>
        </section>
    )
}

export default ActionFormButtons
