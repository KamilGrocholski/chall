import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import FyloLandingPage from './fylo-landing-page'
import InteractiveCardDetailsFormPage from './interactive-card-details-form'
import { CardDetailsProvider } from './interactive-card-details-form/context/CardDetailsContext'
import JobsListingPage from './jobs-listing'
import { JobsProvider } from './jobs-listing/JobsContext'
import LaunchCountdownTimerPage from './launch-countdown-timer'
import MultistepFormPage from './multi-step-form'
import NewsHomepage from './news-homepage'
import PasswordGeneratorPage from './password-generator'
import PomodoroPage from './pomodoro'
import { SettingsProvider } from './pomodoro/context/SettingsContext'
import PricingComponentPage from './pricing-component'

const router = createBrowserRouter([
    { index: true, element: <Home /> },
    {
        path: '/launch-countdown-timer',
        element: <LaunchCountdownTimerPage />,
    },
    {
        path: '/multi-step-form',
        element: <MultistepFormPage />,
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
    {
        path: '/fylo-landing-page',
        element: <FyloLandingPage />,
    },
    {
        path: '/jobs-listing',
        element: (
            <JobsProvider>
                <JobsListingPage />
            </JobsProvider>
        ),
    },
    {
        path: '/news-homepage',
        element: <NewsHomepage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
