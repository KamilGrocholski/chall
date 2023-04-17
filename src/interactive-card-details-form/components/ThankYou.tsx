const ThankYou = () => {
    return (
        <div className="flex flex-col items-center w-fit min-w-[300px] space-y-10">
            <div className="bg-icdfIconComplete h-[80px] w-[80px]"></div>
            <div className="flex flex-col space-y-3">
                <span className="uppercase font-semibold text-2xl text-center tracking-widest text-violet-900">
                    Thank you!
                </span>
                <span className="font-semibold text-gray-400">
                    We've added your card details
                </span>
            </div>
            <button className="text-white rounded-md bg-violet-900 text-center w-full py-3">
                Continue
            </button>
        </div>
    )
}

export default ThankYou
