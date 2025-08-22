'use client'
import { authFormSchema, type AuthFormData } from '@/schemas/AuthForm.schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function AuthForm() {

    const authForm = useForm<AuthFormData>({
        resolver: zodResolver(authFormSchema),
        reValidateMode: "onChange",
        mode: "all"
    })

    const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = authForm

    async function loginUser({ password }: AuthFormData) {
        console.log(password)
    }

    return (
        <form onSubmit={handleSubmit(loginUser)} className="max-w-sm w-full sm:max-w-lg" method="post" noValidate>
            <div className="flex flex-col gap-2">
                <label aria-invalid={!!errors.password} htmlFor="access-password" className="text-lg sm:text-xl font-normal text-zinc-200 aria-invalid:text-red-600">Senha de acesso</label>
                <input aria-invalid={!!errors.password} className="px-4 py-2.5 ring-1 ring-zinc-200 focus:ring-2 focus:outline-none rounded text-white aria-invalid:ring-red-600" id="access-password" {...register('password')} type='password' />
                {errors.password && (
                    <span className='text-sm text-zinc-300 font-medium sm:text-lg'>{errors.password.message}</span>
                )}
                <button disabled={isSubmitting} className="bg-zinc-200 rounded py-2 mt-2 font-semibold sm:text-lg disabled:bg-zinc-200/40">Acessar</button>
            </div>
        </form>
    )
}