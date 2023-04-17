import {
    Controller,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
} from 'react-hook-form'
import { addons } from '../../data'
import useFormContext from '../../hooks/useFormContext'
import { AddOns } from '../../schemes'
import { composePrice } from '../../utils'
import AddOnButton from '../AddOnButton'
import Form from '../Form'

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
            <fieldset className="flex flex-col gap-4 md:gap-6">
                {addons.fields.map((addon) => (
                    <Controller
                        key={addon.id}
                        name={addon.id}
                        control={control}
                        render={({ field }) => (
                            <AddOnButton
                                title={addon.name}
                                desc={addon.description}
                                subDesc={`+${composePrice(
                                    addon.price[formData.billing],
                                    formData.billing,
                                )}`}
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
