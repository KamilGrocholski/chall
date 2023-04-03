import { CardDetails } from '../CardDetailsForm'

type CardBackProps = Pick<CardDetails, 'cvc'>

const CardBack: React.FC<CardBackProps> = ({ cvc }) => {
    return (
        <section className='absolute lg:z-20 z-0 -bottom-16 right-4 md:right-32 lg:top-[400px] lg:-right-40 md:scale-100 sm:scale-75 scale-50'>
            <div className='bg-icdfCardBack h-[245px] w-[447px]'>
                <div className='absolute top-28 right-12 text-white font-semibold tracking-widest'>
                    {cvc}
                </div>
            </div>
        </section>
    )
}

export default CardBack
