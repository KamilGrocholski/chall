import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Form from '../Form'
import { FormData, Plan } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import { addons, plan } from '../../data'
import { composePrice } from '../../utils'

const SummaryForm = () => {
    const { setFormData, goTo, formData, submitForm } = useFormContext()

    const { handleSubmit, setValue, control, formState } = useForm<FormData>({
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
            title='Summary'
            description='description'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <div className='mb-4 flex flex-col rounded-lg bg-gray-100 p-4 divide-y divide-muted'>
                    <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-start flex-col'>
                            <p className='font-semibold capitalize text-accent'>
                                {`${formData.type} (${formData.billing})`}
                            </p>
                            <button
                                type='button'
                                className='w-fit cursor-pointer capitalize text-muted underline transition-colors hover:text-primary'
                                onClick={() => goTo(1)}
                            >
                                change
                            </button>
                        </div>
                        <span className='text-primary font-semibold'>
                            {composePrice(
                                '$',
                                mustFindType(formData.type).price[
                                    formData.billing
                                ],
                                formData.billing === 'Monthly' ? '/mo' : '/yr'
                            )}
                        </span>
                    </div>
                    <div className='mb-3'>
                        {addons.fields.map((addon) => {
                            if (formData[addon.id]) {
                                return (
                                    <div className='w-full flex flex-row justify-between'>
                                        <span>{addon.name}</span>
                                        <span>
                                            {composePrice(
                                                '$',
                                                addon.price[formData.billing],
                                                formData.billing === 'Monthly'
                                                    ? '/mo'
                                                    : '/yr'
                                            )}
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
                    <span className='text-primary font-semibold text-lg'>
                        {composePrice(
                            '$',
                            getTotalPrice(),
                            formData.billing === 'Monthly' ? '/mo' : '/yr'
                        )}
                    </span>
                </div>
            </fieldset>
        </Form>
    )
}

export default SummaryForm
