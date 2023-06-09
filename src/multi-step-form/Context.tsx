import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from './schemes'

export const tabs = ['Your info', 'Select plan', 'Add-ons', 'Summary'] as const

type FormContext = {
    isConfirmed: boolean
    step: number
    formData: FormData
    setFormData: (data: Partial<FormData>) => void
    submitForm: () => void
    next(): void
    prev(): void
    goTo(step: number): void
    isLastStep: boolean
    isFirstStep: boolean
}

export const FormContext = createContext({} as FormContext)

export const FormContextProvider: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        type: 'Arcade',
        billing: 'Monthly',
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
    })

    const [step, setStep] = useState(0)

    const next = () => {
        setStep((prev) => {
            if (prev < tabs.length) {
                return prev + 1
            }
            return prev
        })
    }

    const prev = () => {
        setStep((prev) => {
            if (prev > 0) {
                return prev - 1
            }
            return prev
        })
    }

    const goTo = (step: number) => {
        setStep((prev) => {
            if (step >= 0 && step < tabs.length) {
                return step
            }
            return prev
        })
    }

    const submitForm = () => {
        setIsConfirmed(true)
        console.log({ formData })
    }

    const handleSetFormData = (formData: Partial<FormData>) => {
        setFormData((prev) => ({
            ...prev,
            ...formData,
        }))
    }

    return (
        <FormContext.Provider
            value={{
                isConfirmed,
                formData,
                step,
                next,
                prev,
                goTo,
                submitForm,
                setFormData: handleSetFormData,
                isLastStep: step === tabs.length - 1,
                isFirstStep: step === 0,
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
