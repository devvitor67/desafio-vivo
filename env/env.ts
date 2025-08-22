import { z } from 'zod'

const envSchema = z.object({
    DASHBOARD_ACCESS_PASSWORD: z.string(),
})

export const env = envSchema.parse(process.env)