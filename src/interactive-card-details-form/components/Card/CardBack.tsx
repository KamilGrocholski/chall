import { CardDetails } from '../CardDetailsForm'

type CardBackProps = Pick<CardDetails, 'cvc'>

const CardBack: React.FC<CardBackProps> = ({ cvc }) => {
    return (
        <div className='bg-icdfCardBack h-[245px] w-[447px] p-4'>
            <div className='mt-[92px] ml-[350px] text-white font-semibold tracking-widest'>
                {cvc}
            </div>
        </div>
    )
}

export default CardBack
