export type Color = keyof typeof COLOR
export type Font = keyof typeof FONT

export const COLOR = {
    red: {
        bg: 'bg-p-color-red',
        text: 'text-p-color-red',
        textHover: 'hover:text-p-color-red',
    },
    blue: {
        bg: 'bg-p-color-blue',
        text: 'text-p-color-blue',
        textHover: 'hover:text-p-color-blue',
    },
    purple: {
        bg: 'bg-p-color-purple',
        text: 'text-p-color-purple',
        textHover: 'hover:text-p-color-purple',
    },
} as const

export const FONT = {
    A: {},
    B: {},
    C: {},
} as const

export function getMinutes(seconds: number) {
    return Math.floor(seconds / 60)
}

export function getSeconds(seconds: number) {
    const minutes = Math.floor(seconds / 60) * 60
    return seconds - minutes
}
