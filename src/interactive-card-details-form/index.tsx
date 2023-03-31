import CardBack from './components/Card/CardBack'
import CardFront from './components/Card/CardFront'
import CardDetailsForm from './components/CardDetailsForm'
import { useCardDetails } from './context/CardDetailsContext'

const InteractiveCardDetailsFormPage = () => {
    const [cardDetails] = useCardDetails()

    return (
        <div className='relative flex lg:flex-row flex-col h-screen w-full'>
            <aside className='w-2/6 bg-icdfDesktop h-full'></aside>
            <section className='absolute top-[20%] left-[7%]'>
                <CardFront
                    name={cardDetails.name}
                    number={cardDetails.number}
                    expirationDate={cardDetails.expirationDate}
                />
            </section>
            <section className='absolute top-[52%] left-[10%]'>
                <CardBack cvc={cardDetails.cvc} />
            </section>
            <main className='w-full flex items-center justify-center'>
                <CardDetailsForm />
            </main>
        </div>
    )
}

export default InteractiveCardDetailsFormPage
