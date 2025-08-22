import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
    children: ReactNode
}

export function Button({ children }: ButtonProps) {
    return <button className="py-2 bg-zinc-100 rounded font-normal cursor-pointer disabled:bg-zinc-100/50">
        {children}
    </button>
}