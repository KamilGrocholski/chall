import { FormHTMLAttributes, forwardRef } from 'react'
import ActionFormButtons from './ActionFormButtons'

type FormProps = {
    title: React.ReactNode
    description: React.ReactNode
    children: React.ReactNode
} & FormHTMLAttributes<HTMLFormElement>

const Form = forwardRef<HTMLFormElement, FormProps>(
    ({ title, description, children, ...rest }, ref) => {
        return (
            <form
                {...rest}
                ref={ref}
                className='flex h-full w-11/12 flex-col justify-between gap-6 md:block md:w-full'
            >
                <div className='flex w-full justify-center md:mx-auto md:max-w-[500px] md:flex-col md:justify-between md:py-8'>
                    <legend className='mb-1 text-2xl font-bold text-primary-marine-blue md:mb-2 md:text-3xl'>
                        {title}
                    </legend>
                    <span className='flex justify-start mb-1.5 md:mx-auto text-gray-400 md:mb-10'>
                        {description}
                    </span>
                    {children}
                </div>
                <ActionFormButtons />
            </form>
        )
    }
)

Form.displayName = 'Form'

export default Form
