import { env } from '@/env/env'
import { z } from 'zod'

export const authFormSchema = z.object({
    password: z.string().nonempty({ error: "Campo obrigatório" }).refine((value) => value !== "desafioVivo@acesso.123", {
        error: "Senha inválida.",
        path: ['password']
    })
})

export type AuthFormData = z.infer<typeof authFormSchema>