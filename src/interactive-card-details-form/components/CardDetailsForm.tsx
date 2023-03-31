import { z } from 'zod'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from './common/Field'
import TextInput from './common/TextInput'
import { useCardDetails } from '../context/CardDetailsContext'

const CardDetailsForm: React.FC = () => {
    const [cardDetails, setCardDetails] = useCardDetails()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<CardDetails>({
        resolver: zodResolver(cardDetailsSchema),
        defaultValues: cardDetails,
    })

    const onValid: SubmitHandler<CardDetails> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
        setCardDetails(data)
    }

    const onError: SubmitErrorHandler<CardDetails> = (data, e) => {
        e?.preventDefault()
        console.error({ data })
    }

    return (
        <form
            onSubmit={handleSubmit(onValid, onError)}
            className='w-fit min-w-[300px] flex flex-col space-y-3'
        >
            <Field
                htmlFor='name'
                label='Name'
                errorMessage={errors.name?.message}
            >
                <TextInput
                    id='name'
                    isError={!!errors.name?.message}
                    placeholder='e.g. Felicia Leire'
                    {...register('name')}
                />
            </Field>

            <Field
                htmlFor='number'
                label='Number'
                errorMessage={errors.name?.message}
            >
                <TextInput
                    id='number'
                    isError={!!errors.number?.message}
                    placeholder='e.g. 1111 1111 1111 1111'
                    {...register('number')}
                />
            </Field>

            <Field
                htmlFor='expiration-date-month'
                label='EXP. DATE(MM)'
                errorMessage={errors.expirationDate?.month?.message}
            >
                <TextInput
                    id='expiration-date-month'
                    isError={!!errors.expirationDate?.month?.message}
                    placeholder='MM'
                    {...register('expirationDate.month')}
                />
            </Field>

            <Field
                htmlFor='expiration-date-year'
                label='EXP. DATE(YY)'
                errorMessage={errors.expirationDate?.year?.message}
            >
                <TextInput
                    id='expiration-date-year'
                    isError={false}
                    placeholder='YY'
                    {...register('expirationDate.year')}
                />
            </Field>

            <Field htmlFor='cvc' label='cvc' errorMessage={errors.cvc?.message}>
                <TextInput
                    id='cvc'
                    isError={false}
                    placeholder='e.g. 123'
                    {...register('cvc')}
                />
            </Field>

            <button className='text-white rounded-md bg-violet-900 text-center w-full py-2'>
                Confirm
            </button>
        </form>
    )
}

export default CardDetailsForm

export type CardDetails = z.input<typeof cardDetailsSchema>

export const cardDetailsSchema = z.object({
    name: z.string(),
    number: z.string(),
    expirationDate: z.object({
        month: z.string(),
        year: z.string(),
    }),
    cvc: z.string(),
})
