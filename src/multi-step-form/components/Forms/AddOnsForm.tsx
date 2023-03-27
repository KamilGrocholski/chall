import {
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    Controller,
} from 'react-hook-form'
import Button from '../Button'
import Form from '../Form'
import { AddOns } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'

const AddOnsForm = () => {
    const { next, prev, setFormData, formData } = useFormContext()

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
            title='Add-Ons'
            description='description'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <Controller
                    name='onlineService'
                    control={control}
                    render={({ field }) => (
                        <Button
                            onClick={() =>
                                setValue('onlineService', !field.value)
                            }
                        >
                            Online service
                        </Button>
                    )}
                />
                <Controller
                    name='largerStorage'
                    control={control}
                    render={({ field }) => (
                        <Button
                            onClick={() =>
                                setValue('largerStorage', !field.value)
                            }
                        >
                            Larger storage
                        </Button>
                    )}
                />
                <Controller
                    name='customizableProfile'
                    control={control}
                    render={({ field }) => (
                        <Button
                            onClick={() =>
                                setValue('customizableProfile', !field.value)
                            }
                        >
                            Customizable profile
                        </Button>
                    )}
                />
            </fieldset>
        </Form>
    )
}

export default AddOnsForm
