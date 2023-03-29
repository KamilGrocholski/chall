import { useState } from 'react'
import { SettingsProvider } from './context/SettingsContext'
import SettingsModal from './components/SettingsModal'

const PomodoroPage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    return (
        <SettingsProvider>
            <div>
                <SettingsModal
                    isOpen={isSettingsOpen}
                    close={() => setIsSettingsOpen(false)}
                />
                <button onClick={() => setIsSettingsOpen(true)}>
                    Settings
                </button>
            </div>
        </SettingsProvider>
    )
}

export default PomodoroPage
