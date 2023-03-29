export type Color = keyof typeof COLOR
export type Font = keyof typeof FONT

export const COLOR = {
    red: {
        bg: 'bg-p-color-red',
    },
    blue: {
        bg: 'bg-p-color-blue',
    },
    purple: {
        bg: 'bg-p-color-purple',
    },
} as const

export const FONT = {
    A: {},
    B: {},
    C: {},
} as const
