import { FormContextProvider } from './Context'
import MultistepForm from './components/Forms/MultistepForm'

const MultistepFormPage = () => {
    return (
        <FormContextProvider>
            <main className="flex max-h-[600px] w-[90%] mx-auto max-w-[900px] rounded-xl bg-white py-3 md:h-[90%] md:w-4/5 md:gap-4 md:p-4">
                <MultistepForm />
            </main>
        </FormContextProvider>
    )
}

export default MultistepFormPage
