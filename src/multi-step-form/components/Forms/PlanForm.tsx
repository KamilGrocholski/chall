import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Form from '../Form'
import { Plan } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import PlanButton from '../PlanButton'
import { plan } from '../../data'
import BillingToggle from '../BillingToggle'
import { composePrice } from '../../utils'

const PlanForm = () => {
    const { next, setFormData, formData } = useFormContext()

    const { handleSubmit, setValue, control, getValues } = useForm<Plan>({
        defaultValues: {
            ...formData,
        },
    })

    const onValid: SubmitHandler<Plan> = (data, e) => {
        e?.preventDefault()
        setFormData(data)
        next()
    }

    const onError: SubmitErrorHandler<Plan> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title={plan.title}
            description={plan.description}
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <Controller
                    name='type'
                    control={control}
                    render={({ field }) => (
                        <div className='flex flex-col gap-3 md:grid md:grid-cols-3'>
                            {plan.fields.map((type) => (
                                <PlanButton
                                    isToggled={field.value === type.name}
                                    onClick={() => {
                                        setValue('type', type.name)
                                        setFormData(getValues())
                                    }}
                                    icon={type.icon}
                                    label={type.name}
                                    desc={type.desc[formData.billing]}
                                    priceInfo={composePrice(
                                        type.price[formData.billing],
                                        formData.billing
                                    )}
                                />
                            ))}
                        </div>
                    )}
                />
                <Controller
                    name='billing'
                    control={control}
                    render={({ field }) => (
                        <BillingToggle
                            currentBilling={field.value}
                            onClick={() => {
                                setValue(
                                    'billing',
                                    field.value === 'Monthly'
                                        ? 'Yearly'
                                        : 'Monthly'
                                )
                                setFormData(getValues())
                            }}
                        />
                    )}
                />
            </fieldset>
        </Form>
    )
}

export default PlanForm
