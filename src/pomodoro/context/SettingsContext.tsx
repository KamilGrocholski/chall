import { createContext, useReducer, useState } from 'react'
import { Color, Font } from '../utils'
import { useSettings } from '../hooks/useSettings'

export type TimeSettings = {
    pomodoro: number
    shortBreak: number
    longBreak: number
}

export type FontSettings = Font

export type ColorSettings = Color

export type Settings = {
    time: TimeSettings
    font: FontSettings
    color: ColorSettings
}

export type SettingsSetters = {
    setFont: React.Dispatch<React.SetStateAction<FontSettings>>
    setTime: React.Dispatch<Partial<TimeSettings>>
    setColor: React.Dispatch<React.SetStateAction<ColorSettings>>
}

export const SettingsContext = createContext({} as Settings & SettingsSetters)

export const SettingsProvider: React.FC<{ children: React.ReactElement }> = ({
    children,
}) => {
    const settings = useSettings({
        time: {
            pomodoro: 1,
            shortBreak: 5,
            longBreak: 15,
        },
        font: 'A',
        color: 'red',
    })

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    )
}
