import { CardDetails } from '../CardDetailsForm'

type CardFrontProps = Pick<CardDetails, 'year' | 'month' | 'name' | 'number'>

const CardFront: React.FC<CardFrontProps> = ({ name, number, month, year }) => {
    return (
        <section className="absolute z-10 top-24 left-4 md:top-6 md:left-32 lg:top-32 lg:left-48 md:scale-100 sm:scale-75 scale-50">
            <div className="bg-icdfCardFront h-[245px] w-[447px] p-7 grid grid-rows-4">
                <div className="flex flex-row items-center gap-3 row-span-1">
                    <div className="rounded-full bg-white h-10 w-10 row-span-2"></div>
                    <div className="rounded-full border border-white h-5 w-5 row-span-1"></div>
                </div>
                <div className="row-span-2 flex items-end">
                    <span className="text-white text-3xl tracking-widest">
                        {number}
                    </span>
                </div>
                <div className="flex flex-row justify-between w-full row-span-1 items-end">
                    <span className="uppercase text-sm text-white tracking-widest">
                        {name}
                    </span>
                    <span className="text-white text-sm font-semibold tracking-widest">
                        {month.toString()}/{year.toString()}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default CardFront
