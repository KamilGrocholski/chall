import { z } from 'zod'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Field from './common/Field'
import TextInput from './common/TextInput'
import { useCardDetails } from '../context/CardDetailsContext'
import { useEffect } from 'react'

const CardDetailsForm: React.FC = () => {
    const [cardDetails, setCardDetails, { setIsCreated }] = useCardDetails()

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm<CardDetails>({
        mode: 'all',
        resolver: zodResolver(cardDetailsSchema),
        defaultValues: cardDetails,
    })

    useEffect(() => {
        const values = watch((data) => {
            setCardDetails(data)
        })

        return () => {
            values.unsubscribe()
        }
    }, [watch])

    const onValid: SubmitHandler<CardDetails> = (data, e) => {
        e?.preventDefault()
        console.log({ data })
        setCardDetails(data)
        setIsCreated(true)
    }

    const onError: SubmitErrorHandler<CardDetails> = (data, e) => {
        e?.preventDefault()
        console.error({ data })
    }

    return (
        <form
            onSubmit={handleSubmit(onValid, onError)}
            className='w-fit min-w-[300px] flex flex-col space-y-3 z-20'
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
                errorMessage={errors.month?.message}
            >
                <TextInput
                    id='expiration-date-month'
                    type='number'
                    isError={!!errors.month?.message}
                    placeholder='MM'
                    {...register('month', {
                        valueAsNumber: true,
                        min: 1,
                        max: 12,
                    })}
                />
            </Field>

            <Field
                htmlFor='expiration-date-year'
                label='EXP. DATE(YY)'
                errorMessage={errors.year?.message}
            >
                <TextInput
                    id='expiration-date-year'
                    inputMode='numeric'
                    type='number'
                    isError={!!errors.year?.message}
                    placeholder='YY'
                    {...register('year', {
                        valueAsNumber: true,
                    })}
                />
            </Field>

            <Field htmlFor='cvc' label='cvc' errorMessage={errors.cvc?.message}>
                <TextInput
                    id='cvc'
                    isError={false}
                    placeholder='e.g. 123'
                    {...register('cvc', {
                        valueAsNumber: true,
                    })}
                />
            </Field>

            <button className='text-white rounded-md bg-violet-900 text-center w-full py-3'>
                Confirm
            </button>
        </form>
    )
}

export default CardDetailsForm

export type CardDetails = z.input<typeof cardDetailsSchema>

export const cardDetailsSchema = z.object({
    name: z.string(),
    number: z.string().min(16).max(16),
    month: z.number().min(1).max(12),
    year: z
        .number()
        .min(parseInt(new Date().getFullYear().toString().slice(2), 10))
        .max(99),
    cvc: z.number().min(100).max(999),
})
