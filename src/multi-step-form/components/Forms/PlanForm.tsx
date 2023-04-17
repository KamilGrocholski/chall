import {
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form'
import { plan } from '../../data'
import useFormContext from '../../hooks/useFormContext'
import { Plan } from '../../schemes'
import { composePrice } from '../../utils'
import BillingToggle from '../BillingToggle'
import Form from '../Form'
import PlanButton from '../PlanButton'

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
            <fieldset className="flex flex-col gap-4 md:gap-6">
                <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                        <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
                            {plan.fields.map((type) => (
                                <PlanButton
                                    key={type.id}
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
                                        formData.billing,
                                    )}
                                />
                            ))}
                        </div>
                    )}
                />
                <Controller
                    name="billing"
                    control={control}
                    render={({ field }) => (
                        <BillingToggle
                            currentBilling={field.value}
                            onClick={() => {
                                setValue(
                                    'billing',
                                    field.value === 'Monthly'
                                        ? 'Yearly'
                                        : 'Monthly',
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
