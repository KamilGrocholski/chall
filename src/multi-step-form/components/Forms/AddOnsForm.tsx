import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Form from '../Form'
import { AddOns } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import AddOnButton from '../AddOnButton'
import { addons } from '../../data'
import { composePrice } from '../../utils'

const AddOnsForm = () => {
    const { next, setFormData, formData } = useFormContext()

    const { handleSubmit, setValue, control, getValues } = useForm<AddOns>({
        defaultValues: {
            ...formData,
        },
    })

    const onValid: SubmitHandler<AddOns> = (data, e) => {
        e?.preventDefault()
        setFormData(data)
        next()
    }

    const onError: SubmitErrorHandler<AddOns> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title={addons.title}
            description={addons.description}
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                {addons.fields.map((addon) => (
                    <Controller
                        name={addon.id}
                        control={control}
                        render={({ field }) => (
                            <AddOnButton
                                title={addon.name}
                                desc={addon.description}
                                subDesc={composePrice(
                                    '+$',
                                    addon.price[formData.billing],
                                    formData.billing === 'Monthly'
                                        ? '/mo'
                                        : '/yr'
                                )}
                                isChecked={field.value}
                                onClick={() => {
                                    setValue(addon.id, !field.value)
                                    setFormData(getValues())
                                }}
                            />
                        )}
                    />
                ))}
            </fieldset>
        </Form>
    )
}

export default AddOnsForm
