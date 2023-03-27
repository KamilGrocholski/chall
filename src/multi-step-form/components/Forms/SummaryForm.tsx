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

const SummaryForm = () => {
    const { next, prev, setFormData, formData } = useFormContext()

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

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title='Summary'
            description='description'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'></fieldset>
        </Form>
    )
}

export default SummaryForm
