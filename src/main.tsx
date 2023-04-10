import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import MultistepFormPage from './multi-step-form'
import LaunchCountdownTimerPage from './launch-countdown-timer'
import PasswordGeneratorPage from './password-generator'
import PomodoroPage from './pomodoro'
import { SettingsProvider } from './pomodoro/context/SettingsContext'
import InteractiveCardDetailsFormPage from './interactive-card-details-form'
import { CardDetailsProvider } from './interactive-card-details-form/context/CardDetailsContext'
import PricingComponentPage from './pricing-component'

const router = createBrowserRouter([
    {
        path: '/launch-countdown-timer',
        element: <LaunchCountdownTimerPage />,
    },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            {
                path: 'multi-step-form',
                element: <MultistepFormPage />,
            },
        ],
    },
    {
        path: '/password-generator',
        element: <PasswordGeneratorPage />,
    },
    {
        path: '/pomodoro',
        element: (
            <SettingsProvider>
                <PomodoroPage />
            </SettingsProvider>
        ),
    },
    {
        path: '/interactive-card-details-form',
        element: (
            <CardDetailsProvider>
                <InteractiveCardDetailsFormPage />
            </CardDetailsProvider>
        ),
    },
    {
        path: '/pricing-component',
        element: <PricingComponentPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
