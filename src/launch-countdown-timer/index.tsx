import { NumberBox } from './components/NumberBox'
import SocialIcons from './components/SocialIcons'
import useTimer from './hooks/useTimer'

type LaunchCountdownTimerProps = {}

const date = new Date(Date.now() + 200_000_000)

function shouldFlip(prev: number, current: number): boolean {
    if (prev === current) return false
    return true
}

const LaunchCountdownTimerPage: React.FC<LaunchCountdownTimerProps> = ({}) => {
    const {
        prev: [prevDays, prevHours, prevMinutes, prevSeconds],
        current: [days, hours, minutes, seconds],
    } = useTimer(date)

    return (
        <div className='relative h-screen w-full bg-gradient-to-b from-lct-sky to-lct-hills'>
            <div className='w-full h-full bg-stars'></div>

            <div className='absolute inset-0 h-full w-full flex items-center'>
                <div className='flex flex-col space-y-20 mx-auto'>
                    <h1 className='text-lg lg:text-3xl tracking-wider text-center uppercase text-white'>
                        We're launching soon
                    </h1>
                    <div className='flex flex-row gap-2 lg:gap-8 w-fit h-fit mx-auto'>
                        <NumberBox
                            num={days}
                            unit='days'
                            flip={shouldFlip(prevDays, days)}
                        />
                        <NumberBox
                            num={hours}
                            unit='hours'
                            flip={shouldFlip(prevHours, hours)}
                        />
                        <NumberBox
                            num={minutes}
                            unit='minutes'
                            flip={shouldFlip(prevMinutes, minutes)}
                        />
                        <NumberBox
                            num={seconds}
                            unit='seconds'
                            flip={shouldFlip(prevSeconds, seconds)}
                        />
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 left-0 right-0 h-48 bg-patternHills flex items-center'>
                <SocialIcons />
            </div>
        </div>
    )
}

export default LaunchCountdownTimerPage
