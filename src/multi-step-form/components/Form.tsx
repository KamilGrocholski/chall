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
                className='flex flex-col justify-between gap-6 md:block md:w-full h-full'
            >
                <div className='flex w-full flex-col h-full justify-center md:mx-auto md:max-w-[500px] md:justify-between md:py-8'>
                    <legend className='mb-1 text-2xl font-bold text-primary md:mb-2 md:text-3xl'>
                        {title}
                    </legend>
                    <span className='w-full md:mx-auto text-muted md:mb-10 mb-5'>
                        {description}
                    </span>
                    {children}
                    <ActionFormButtons />
                </div>
            </form>
        )
    }
)

Form.displayName = 'Form'

export default Form
