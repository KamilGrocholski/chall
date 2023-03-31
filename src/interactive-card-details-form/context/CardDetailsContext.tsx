import { createContext, useContext, useReducer } from 'react'
import { CardDetails } from '../components/CardDetailsForm'

type ContextType = {
    cardDetails: CardDetails
    setCardDetails: React.Dispatch<Partial<CardDetails>>
}

export const CardDetailsContext = createContext({} as ContextType)

export const CardDetailsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cardDetails, setCardDetails] = useReducer<
        (prev: CardDetails, update: Partial<CardDetails>) => CardDetails
    >((prev, update) => ({ ...prev, ...update }), {
        name: 'Kamil Grocholski',
        number: '1111 1111 1111 1111',
        cvc: '123',
        expirationDate: {
            month: '10',
            year: '25',
        },
    })

    return (
        <CardDetailsContext.Provider
            value={{
                cardDetails,
                setCardDetails,
            }}
        >
            {children}
        </CardDetailsContext.Provider>
    )
}

export function useCardDetails(): [
    ContextType['cardDetails'],
    ContextType['setCardDetails']
] {
    const { cardDetails, setCardDetails } = useContext(CardDetailsContext)

    return [cardDetails, setCardDetails]
}
