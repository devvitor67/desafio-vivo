import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Vivo Detecta",
  description: "Uma inteligência artificial para proteger os clientes da Vivo de golpes digitais",
}

const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter"
})

type RootLayoutProps = {
    children: Readonly<ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-br">
            <body className={`${inter.className}`}>
                {children}
            </body>
        </html>
    )
}
