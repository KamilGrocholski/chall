import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Form from '../Form'
import { FormData, Plan } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import { addons, plan, summary } from '../../data'
import { composePrice } from '../../utils'

const SummaryForm = () => {
    const { setFormData, goTo, formData, submitForm } = useFormContext()

    const { handleSubmit } = useForm<FormData>({
        defaultValues: {
            ...formData,
        },
    })

    const onValid: SubmitHandler<FormData> = (data, e) => {
        e?.preventDefault()
        setFormData(data)
        submitForm()
    }

    const onError: SubmitErrorHandler<FormData> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    function mustFindType(typeName: Plan['type']) {
        const selectedType = plan.fields.find((type) => type.name === typeName)

        if (!selectedType) throw new Error('missing selected type')

        return selectedType
    }

    function getTotalPrice() {
        let totalPrice = 0

        const selectedType = mustFindType(formData.type)

        totalPrice += selectedType.price[formData.billing]
        if (formData.onlineService) {
            totalPrice += addons.fields[0].price[formData.billing]
        }
        if (formData.largerStorage) {
            totalPrice += addons.fields[1].price[formData.billing]
        }
        if (formData.customizableProfile) {
            totalPrice += addons.fields[2].price[formData.billing]
        }

        return totalPrice
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title={summary.title}
            description={summary.description}
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <div className='mb-4 flex flex-col rounded-lg bg-gray-100 p-4 divide-y divide-muted'>
                    <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-start flex-col'>
                            <p className='font-bold text-lg capitalize text-primary'>
                                {`${formData.type} (${formData.billing})`}
                            </p>
                            <button
                                type='button'
                                className='w-fit cursor-pointer font-semibold capitalize text-muted underline transition-colors hover:text-primary'
                                onClick={() => goTo(1)}
                            >
                                change
                            </button>
                        </div>
                        <span className='text-primary font-bold'>
                            {composePrice(
                                mustFindType(formData.type).price[
                                    formData.billing
                                ],
                                formData.billing
                            )}
                        </span>
                    </div>
                    <div className='mb-3 flex flex-col space-y-2 pt-2'>
                        {addons.fields.map((addon) => {
                            if (formData[addon.id]) {
                                return (
                                    <div className='w-full flex flex-row font-semibold justify-between'>
                                        <span className='text-muted'>
                                            {addon.name}
                                        </span>
                                        <span className='text-primary font-semibold'>
                                            {`+${composePrice(
                                                addon.price[formData.billing],
                                                formData.billing
                                            )}`}
                                        </span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='flex items-center justify-between p-4'>
                    <p className='text-muted'>
                        Total{' '}
                        {`(per ${
                            formData.billing === 'Yearly' ? 'year' : 'month'
                        })`}
                    </p>
                    <span className='text-accent font-bold text-lg'>
                        {composePrice(getTotalPrice(), formData.billing)}
                    </span>
                </div>
            </fieldset>
        </Form>
    )
}

export default SummaryForm
