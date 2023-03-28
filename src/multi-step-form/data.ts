import Arcade from './assets/images/icon-arcade.svg'
import Advanced from './assets/images/icon-advanced.svg'
import Pro from './assets/images/icon-pro.svg'

export const personalInfo = {
    description: 'Please provide your name, email address, and phone number.',
    title: 'Personal info',
}

export const plan = {
    title: 'Select a plan',
    description: 'You have the option of monthyl or yearly billing.',
    fields: {
        arcade: {
            icon: Arcade,
            name: 'Arcade',
            price: 90,
            free: '2 months free',
        },
        advanced: {
            icon: Advanced,
            name: 'Advanced',
            price: 120,
            free: '2 months free',
        },
        pro: {
            icon: Pro,
            name: 'Pro',
            price: 150,
            free: '2 months free',
        },
    },
}

export const addons = {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    fields: {
        onlineService: {
            price: 10,
            name: 'Online service',
            description: 'Access to multiplayer games',
        },
        largerStorage: {
            price: 20,
            name: 'Larger storage',
            description: 'Access to multiplayer games',
        },
        customizableProfile: {
            price: 20,
            name: 'Customizable profile',
            description: 'Access to multiplayer games',
        },
    },
}
