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

    const { handleSubmit, setValue, control } = useForm<AddOns>({
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
                <Controller
                    name='onlineService'
                    control={control}
                    render={({ field }) => (
                        <AddOnButton
                            title={addons.fields.onlineService.name}
                            desc={addons.fields.onlineService.description}
                            subDesc={composePrice(
                                '+$',
                                addons.fields.onlineService.price,
                                '/yr'
                            )}
                            isChecked={field.value}
                            onClick={() =>
                                setValue('onlineService', !field.value)
                            }
                        />
                    )}
                />
                <Controller
                    name='largerStorage'
                    control={control}
                    render={({ field }) => (
                        <AddOnButton
                            title={addons.fields.largerStorage.name}
                            desc={addons.fields.largerStorage.description}
                            subDesc={composePrice(
                                '+$',
                                addons.fields.largerStorage.price,
                                '/yr'
                            )}
                            isChecked={field.value}
                            onClick={() =>
                                setValue('largerStorage', !field.value)
                            }
                        />
                    )}
                />
                <Controller
                    name='customizableProfile'
                    control={control}
                    render={({ field }) => (
                        <AddOnButton
                            title={addons.fields.customizableProfile.name}
                            desc={addons.fields.customizableProfile.description}
                            subDesc={composePrice(
                                '+$',
                                addons.fields.customizableProfile.price,
                                '/yr'
                            )}
                            isChecked={field.value}
                            onClick={() =>
                                setValue('customizableProfile', !field.value)
                            }
                        />
                    )}
                />
            </fieldset>
        </Form>
    )
}

export default AddOnsForm
