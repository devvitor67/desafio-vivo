import { cn } from "@/utils/cn"
import { ComponentProps, ReactNode } from "react"

interface TextGradientProps extends ComponentProps<'p'> {
    children: ReactNode
}

export function TextGradient({ children }: TextGradientProps) {
    return (
        <p className={cn("text-transparent bg-gradient-to-l from-purple-700 via-fuchsia-600 to-cyan-500 bg-clip-text")}>
            {children}
        </p>
    )
}