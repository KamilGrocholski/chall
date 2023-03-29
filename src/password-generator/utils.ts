export type Config = {
    length: number
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
}

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' as const
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz' as const
const NUMBERS = '0123456789' as const
const SYMBOLS = `~!@#$%^&*()_+{}|:"<>?-=[]\\;\,./` as const

export function generatePassword({
    length,
    uppercase,
    lowercase,
    numbers,
    symbols,
}: Config): string {
    let pool = ''
    if (uppercase) {
        pool += UPPERCASE
    }
    if (lowercase) {
        pool += LOWERCASE
    }
    if (numbers) {
        pool += NUMBERS
    }
    if (symbols) {
        pool += SYMBOLS
    }

    if (!pool.length) {
        throw new Error('pool must contain at least 1 character')
    }

    let password = ''

    for (let i = 0; i < length; ++i) {
        const randomInt = getRandomIntInclusive(0, pool.length - 1)
        password += pool[randomInt]
    }

    return password
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

export type PasswordStrengthType = keyof typeof PASSWORD_STRENGTH

export const PASSWORD_STRENGTH = {
    'VERY WEAK': 'bg-red-800',
    WEAK: 'bg-red-500',
    MEDIUM: 'bg-orange-500',
    STRONG: 'bg-green-500',
} as const

export function getPasswordStrength(config: Config): PasswordStrengthType {
    let strength = 0

    if (config.length < 5) return 'VERY WEAK'
    if (config.length < 10) return 'WEAK'

    if (config.symbols) {
        strength += 3
    }
    if (config.numbers) {
        strength += 1
    }
    if (config.uppercase) {
        strength += 2
    }

    if (strength >= 6) return 'STRONG'
    if (strength >= 5) return 'MEDIUM'
    if (strength >= 4) return 'WEAK'
    return 'VERY WEAK'
}
