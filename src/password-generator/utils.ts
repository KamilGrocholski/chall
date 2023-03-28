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
