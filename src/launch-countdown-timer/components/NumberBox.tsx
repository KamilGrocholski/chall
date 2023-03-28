type NumberBoxProps = {
    num: string | number
    unit: string
    flip: boolean
}

export const NumberBox: React.FC<NumberBoxProps> = ({ num, unit, flip }) => {
    return (
        <div className='flex flex-col items-center overflow-hidden mt-4 lg:px-2 px-1'>
            <div className=' relative bg-transparent overflow-hidden flex flex-col items-center justify-center rounded-lg lg:w-32 lg:h-32 h-16 w-16 text-2xl md:text-2xl mt-4 '>
                <div className='rounded-t-lg rounded-b-lg bg-[#2c2c44] w-full h-full'></div>

                <div className='text-3xl absolute text-lct-counter-number z-0 font-bold font-redhat lg:text-7xl font-mono'>
                    {num}
                </div>

                <div className='z-5 rounded-b-lg rounded-t-lg bg-[#34364f] w-full h-full'></div>

                <div
                    className={`absolute w-full border-b border-black/10 h-1/2 top-0 drop-shadow-xl shadow-black rounded-t-lg z-5 ${
                        flip ? 'animate-flip bg-lct-hills/50' : 'bg-transparent'
                    }`}
                ></div>
                {/* Two Small Dots */}
                <div className='absolute -right-1.5 top-[58px] rounded-full w-[11px] h-[11px] bg-[#181721]'></div>
                <div className='absolute -left-1.5 top-[58px] rounded-full w-[11px] h-[11px] bg-[#181721]'></div>
            </div>
            <p className='lg:text-xl lg:tracking-wider tracking-light mt-3 font-semibold text-[#7f7e95] text-xs uppercase'>
                {unit}
            </p>
        </div>
    )
}
