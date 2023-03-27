import { FormContextProvider } from './Context'
import MultistepForm from './components/Forms/MultistepForm'

const MultistepFormPage = () => {
    return (
        <FormContextProvider>
            <MultistepForm />
        </FormContextProvider>
    )
}

export default MultistepFormPage
