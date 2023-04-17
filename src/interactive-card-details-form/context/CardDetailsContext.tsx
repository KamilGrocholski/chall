import { createContext, useContext, useReducer, useState } from 'react'
import { CardDetails } from '../components/CardDetailsForm'

type ContextType = {
    cardDetails: CardDetails
    setCardDetails: React.Dispatch<Partial<CardDetails>>
    isCreated: boolean
    setIsCreated: React.Dispatch<React.SetStateAction<boolean>>
    reset: () => void
}

export const CardDetailsContext = createContext({} as ContextType)

export const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isCreated, setIsCreated] = useState(false)

    const createInitialState = (): CardDetails => {
        return {
            name: 'Kamil Grocholski',
            number: '1111 1111 1111 1111',
            cvc: 123,
            month: 10,
            year: 25,
        }
    }

    const [cardDetails, setCardDetails] = useReducer<
        (prev: CardDetails, update: Partial<CardDetails>) => CardDetails,
        CardDetails
    >(
        (prev, update) => ({ ...prev, ...update }),
        createInitialState(),
        createInitialState,
    )

    function reset() {
        setCardDetails(createInitialState())
        setIsCreated(false)
    }

    return (
        <CardDetailsContext.Provider
            value={{
                cardDetails,
                setCardDetails,
                isCreated,
                setIsCreated,
                reset,
            }}
        >
            {children}
        </CardDetailsContext.Provider>
    )
}

export function useCardDetails(): [
    ContextType['cardDetails'],
    ContextType['setCardDetails'],
    {
        isCreated: ContextType['isCreated']
        setIsCreated: ContextType['setIsCreated']
    },
    () => void,
] {
    const { cardDetails, setCardDetails, isCreated, setIsCreated, reset } =
        useContext(CardDetailsContext)

    return [cardDetails, setCardDetails, { isCreated, setIsCreated }, reset]
}
