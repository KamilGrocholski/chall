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
import { composePrice } from '../../utils'

const PlanForm = () => {
    const { next, setFormData, formData } = useFormContext()

    const { handleSubmit, setValue, control } = useForm<Plan>({
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
            title='Select a plan'
            description='You have the option of monthly or yearly billing.'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <Controller
                    name='type'
                    control={control}
                    render={({ field }) => (
                        <div className='grid grid-cols-3 gap-5'>
                            <PlanButton
                                isToggled={field.value === 'Arcade'}
                                onClick={() => setValue('type', 'Arcade')}
                                icon={plan.fields.arcade.icon}
                                label={plan.fields.arcade.name}
                                desc={composePrice(
                                    '$',
                                    plan.fields.arcade.price,
                                    '/yr'
                                )}
                                subDesc='2 months free'
                            />
                            <PlanButton
                                isToggled={field.value === 'Advanced'}
                                onClick={() => setValue('type', 'Advanced')}
                                icon={plan.fields.advanced.icon}
                                label={plan.fields.advanced.name}
                                desc={composePrice(
                                    '$',
                                    plan.fields.advanced.price,
                                    '/yr'
                                )}
                                subDesc='2 months free'
                            />
                            <PlanButton
                                isToggled={field.value === 'Pro'}
                                onClick={() => setValue('type', 'Pro')}
                                icon={plan.fields.pro.icon}
                                label={plan.fields.pro.name}
                                desc={composePrice(
                                    '$',
                                    plan.fields.pro.price,
                                    '/yr'
                                )}
                                subDesc='2 months free'
                            />
                        </div>
                    )}
                />
                <Controller
                    name='billing'
                    control={control}
                    render={({ field }) => <button>Toggle</button>}
                />
            </fieldset>
        </Form>
    )
}

export default PlanForm
