import { useContext } from 'react'
import { Settings, SettingsContext } from '../context/SettingsContext'

export default function useSettings(): Settings {
    const settings = useContext(SettingsContext)

    return settings
}
