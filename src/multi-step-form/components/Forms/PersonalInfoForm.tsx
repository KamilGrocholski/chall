import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Field from '../Field'
import Form from '../Form'
import TextInput from '../TextInput'
import { PersonalInfo, personalInfoSchema } from '../../schemes'
import useFormContext from '../../hooks/useFormContext'
import { personalInfo } from '../../data'
import { zodResolver } from '@hookform/resolvers/zod'

const PersonalInfoForm = () => {
    const { next, setFormData, formData } = useFormContext()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<PersonalInfo>({
        defaultValues: {
            ...formData,
        },
        resolver: zodResolver(personalInfoSchema),
    })

    const onValid: SubmitHandler<PersonalInfo> = (data, e) => {
        e?.preventDefault()
        setFormData(data)
        next()
    }

    const onError: SubmitErrorHandler<PersonalInfo> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
    }

    return (
        <Form
            onSubmit={handleSubmit(onValid, onError)}
            title={personalInfo.title}
            description={personalInfo.description}
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
