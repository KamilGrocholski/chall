import { useContext, useReducer, useState } from 'react'
import {
    ColorSettings,
    FontSettings,
    Settings,
    SettingsContext,
    SettingsSetters,
    TimeSettings,
} from '../context/SettingsContext'

export default function useSettingsContext(): Settings & SettingsSetters {
    const settings = useContext(SettingsContext)

    return settings
}

export function useSettings(
    initialSettings: Settings
): Settings & SettingsSetters {
    const [time, setTime] = useReducer<
        (prev: TimeSettings, update: Partial<TimeSettings>) => TimeSettings
    >((prev, update) => ({ ...prev, ...update }), initialSettings.time)

    const [font, setFont] = useState<FontSettings>(initialSettings.font)

    const [color, setColor] = useState<ColorSettings>(initialSettings.color)

    return {
        color,
        font,
        setColor,
        setFont,
        setTime,
        time,
    }
}
