import { createContext, useState } from 'react'
import { FormData } from './schemes'

export const tabs = ['Your info', 'Select plan', 'Add-ons', 'Summary'] as const

type FormContext = {
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
        console.log(formData)
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
