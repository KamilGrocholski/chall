import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Button from '../Button'
import Form from '../Form'
import { FormData } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import { plan } from '../../data'

const SummaryForm = () => {
    const { next, setFormData, goTo, formData } = useFormContext()

    const { handleSubmit, setValue, control, formState } = useForm<FormData>({
        defaultValues: {
            ...formData,
        },
    })

    const onValid: SubmitHandler<FormData> = (data, e) => {
        e?.preventDefault()
        setFormData(data)
        next()
    }

    const onError: SubmitErrorHandler<FormData> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    function getTotalPrice() {
        let totalPrice = 0

        switch (formData.type) {
            case 'Arcade':
                totalPrice += plan.fields.arcade.price
                return
            case 'Advanced':
                totalPrice += plan.fields.advanced.price
                return
            case 'Pro':
                totalPrice += plan.fields.pro.price
                return
        }

        return totalPrice
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title='Summary'
            description='description'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <div className='mb-4 flex flex-col rounded-lg bg-neutral-alabaster p-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='font-semibold capitalize text-primary-marine-blue'>
                                {`${formData.type} (${
                                    formData.billing === 'Yearly'
                                        ? 'Yearly'
                                        : 'Monthly'
                                })`}
                            </p>
                            <button
                                type='button'
                                className='w-fit cursor-pointer capitalize text-neutral-cool-gray underline transition-colors hover:text-primary-purplish-blue'
                                onClick={() => goTo(2)}
                            >
                                change
                            </button>
                        </div>
                        {/* {monthYearPlan} */}
                    </div>
                    {/* {selectedAddOns.length !== 0 && <hr className='my-4' />}
                    {selectedAddOns.map((addOn) => {
                        return (
                            <SummarySelectedAddOns
                                key={addOn.id}
                                addOnName={addOn.title}
                                monthlySub={addOn.monthlySubscriptionAddition}
                                yearlySub={addOn.yearlySubscriptionAddition}
                                isYearlySub={yearlySubscription}
                            />
                        )
                    })} */}
                </div>

                <div className='flex items-center justify-between p-4'>
                    <p className='text-neutral-cool-gray'>
                        Total{' '}
                        {`(per ${
                            formData.billing === 'Yearly' ? 'year' : 'month'
                        })`}
                    </p>
                    {getTotalPrice()}
                </div>
            </fieldset>
        </Form>
    )
}

export default SummaryForm
