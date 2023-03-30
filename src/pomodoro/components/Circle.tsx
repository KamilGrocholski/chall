import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { COLOR } from '../utils'
import useSettingsContext from '../hooks/useSettings'

type CircleProps = {
    percent: number
    children: React.ReactNode
}

const Circle: React.FC<CircleProps> = ({ percent, children }) => {
    const [radius, setRadius] = useState(100)
    const [circumference, setCircumference] = useState(2 * Math.PI * radius)
    const [offset, setOffset] = useState(0)
    const circleRef = useRef<SVGCircleElement>(null)

    const { color } = useSettingsContext()

    useEffect(() => {
        setOffset(circumference * (1 - percent / 100))
    }, [circumference, percent])

    return (
        <div className='flex items-center justify-center'>
            <svg className='transform -rotate-90 w-72 h-72 text-p-gray-dark'>
                <circle
                    cx='145'
                    cy='145'
                    r={radius + 10}
                    stroke='url(#gradient)'
                    stroke-width='28'
                    fill='transparent'
                    className='fill-p-gray-dark'
                />

                <defs>
                    <linearGradient
                        x1='100%'
                        y1='10%'
                        x2='10%'
                        y2='300%'
                        id='gradient'
                    >
                        <stop offset='0%' stop-color='currentColor' />
                        <stop
                            stop-opacity='0'
                            offset='100%'
                            stop-color='darkblue'
                        />
                    </linearGradient>
                </defs>

                <circle
                    cx='145'
                    cy='145'
                    r={radius}
                    stroke='currentColor'
                    stroke-width='7'
                    fill='transparent'
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap='round'
                    className={clsx(COLOR[color].text)}
                />
            </svg>
            <div className='absolute'>{children}</div>
        </div>
    )
}

export default Circle
