import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import MultistepFormPage from './multi-step-form'
import LaunchCountdownTimerPage from './launch-countdown-timer'
import PasswordGeneratorPage from './password-generator'
import PomodoroPage from './pomodoro'

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
        element: <PomodoroPage />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
