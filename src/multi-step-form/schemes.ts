import { z } from 'zod'

export type PersonalInfo = z.input<typeof personalInfoSchema>
export type Plan = z.input<typeof planSchema>
export type AddOns = z.input<typeof addOnsSchema>
export type FormData = PersonalInfo & Plan & AddOns

const personalInfoSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().trim().min(9),
})

const planSchema = z.object({
    type: z.literal('Arcade').or(z.literal('Advanced')).or(z.literal('Pro')),
    billing: z.literal('Monthly').or(z.literal('Yearly')),
})

const addOnsSchema = z.object({
    onlineService: z.boolean(),
    largerStorage: z.boolean(),
    customizableProfile: z.boolean(),
})
