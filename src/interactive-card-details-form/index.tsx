import CardBack from './components/Card/CardBack'
import CardFront from './components/Card/CardFront'
import CardDetailsForm from './components/CardDetailsForm'
import ThankYou from './components/ThankYou'
import { useCardDetails } from './context/CardDetailsContext'

const InteractiveCardDetailsFormPage = () => {
    const [cardDetails, , { isCreated }] = useCardDetails()

    return (
        <div className="flex lg:flex-row flex-col h-screen w-full overflow-hidden">
            <aside className="relative bg-icdfDesktop w-full h-[13rem] lg:w-[420px] lg:h-full">
                <CardBack cvc={cardDetails.cvc} />
                <CardFront
                    name={cardDetails.name}
                    number={cardDetails.number}
                    year={cardDetails.year}
                    month={cardDetails.month}
                />
            </aside>
            <main className="w-fit flex items-center mx-auto justify-center lg:pt-0 pt-32">
                {isCreated ? <ThankYou /> : <CardDetailsForm />}
            </main>
        </div>
    )
}

export default InteractiveCardDetailsFormPage
