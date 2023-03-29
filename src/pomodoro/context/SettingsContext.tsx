import { createContext, useReducer, useState } from 'react'

export type TimeSettings = {
    pomodoro: number
    shortBreak: number
    longBreak: number
}

export type FontSettings = 'A' | 'B' | 'C'

export type ColorSettings = 'red' | 'sky' | 'purple'

export type Settings = {
    time: TimeSettings
    setTime: React.Dispatch<Partial<TimeSettings>>
    font: FontSettings
    setFont: React.Dispatch<React.SetStateAction<FontSettings>>
    color: ColorSettings
    setColor: React.Dispatch<React.SetStateAction<ColorSettings>>
}

export const SettingsContext = createContext({} as Settings)

export const SettingsProvider: React.FC<{ children: React.ReactElement }> = ({
    children,
}) => {
    const [time, setTime] = useReducer<
        (prev: TimeSettings, update: Partial<TimeSettings>) => TimeSettings
    >((prev, update) => ({ ...prev, ...update }), {
        pomodoro: 0,
        shortBreak: 0,
        longBreak: 0,
    })

    const [font, setFont] = useState<FontSettings>('A')

    const [color, setColor] = useState<ColorSettings>('red')

    return (
        <SettingsContext.Provider
            value={{
                time,
                setTime,
                font,
                setFont,
                color,
                setColor,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
