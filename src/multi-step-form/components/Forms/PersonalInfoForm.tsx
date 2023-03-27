import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import Field from '../Field'
import Form from '../Form'
import TextInput from '../TextInput'
import { PersonalInfo } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'

const PersonalInfoForm = () => {
    const { next, prev, setFormData, formData } = useFormContext()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<PersonalInfo>({
        defaultValues: {
            ...formData,
        },
    })

    const onValid: SubmitHandler<PersonalInfo> = (data, e) => {
        e?.preventDefault()
        next()
        setFormData(data)
    }

    const onError: SubmitErrorHandler<PersonalInfo> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title='Personal info'
            description='description'
        >
            <fieldset className='flex flex-col gap-4 md:gap-6'>
                <Field label='Name' errorMessage={errors.name?.message}>
                    <TextInput
                        id='name'
                        placeholder='e.g. Kamil Grocholski'
                        {...register('name')}
                    />
                </Field>
                <Field
                    label='Email address'
                    errorMessage={errors.email?.message}
                >
                    <TextInput
                        id='email'
                        placeholder='e.g. kamilgrocholski@gmail.com'
                        {...register('email')}
                    />
                </Field>
                <Field
                    label='Phone number'
                    errorMessage={errors.phone?.message}
                >
                    <TextInput
                        id='phone'
                        placeholder='e.g. +1 234 567 890'
                        {...register('phone')}
                    />
                </Field>
            </fieldset>
        </Form>
    )
}

export default PersonalInfoForm
