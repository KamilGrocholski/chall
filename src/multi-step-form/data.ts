import Arcade from './assets/images/icon-arcade.svg'
import Advanced from './assets/images/icon-advanced.svg'
import Pro from './assets/images/icon-pro.svg'
import { composePrice } from './utils'

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
