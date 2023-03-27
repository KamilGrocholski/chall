import { useContext } from 'react'
import { FormContext } from '../Context'

export default function useFormContext() {
    const context = useContext(FormContext)

    return context
}
