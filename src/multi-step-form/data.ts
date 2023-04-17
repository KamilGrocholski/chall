import Advanced from './assets/images/icon-advanced.svg'
import Arcade from './assets/images/icon-arcade.svg'
import Pro from './assets/images/icon-pro.svg'

export const personalInfo = {
    description: 'Please provide your name, email address, and phone number.',
    title: 'Personal info',
}

export const plan = {
    title: 'Select a plan',
    description: 'You have the option of monthyl or yearly billing.',
    fields: [
        {
            id: 'arcade',
            name: 'Arcade',
            icon: Arcade,
            price: {
                Monthly: 9,
                Yearly: 90,
            },
            desc: {
                Monthly: undefined,
                Yearly: '2 months free',
            },
        },
        {
            id: 'advanced',
            name: 'Advanced',
            icon: Advanced,
            price: {
                Monthly: 12,
                Yearly: 120,
            },
            desc: {
                Monthly: undefined,
                Yearly: '2 months free',
            },
        },
        {
            id: 'pro',
            name: 'Pro',
            icon: Pro,
            price: {
                Monthly: 15,
                Yearly: 150,
            },
            desc: {
                Monthly: undefined,
                Yearly: '2 months free',
            },
        },
    ],
} as const

export const addons = {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    fields: [
        {
            id: 'onlineService',
            name: 'Online service',
            description: 'Access to multiplayer games',
            price: {
                Monthly: 1,
                Yearly: 10,
            },
        },
        {
            id: 'largerStorage',
            name: 'Larger storage',
            description: 'Extra 1TB of cloud save',
            price: {
                Monthly: 2,
                Yearly: 20,
            },
        },
        {
            id: 'customizableProfile',
            name: 'Customizable profile',
            description: 'Custom theme on your profile',
            price: {
                Monthly: 2,
                Yearly: 20,
            },
        },
    ],
} as const

export const summary = {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
} as const
