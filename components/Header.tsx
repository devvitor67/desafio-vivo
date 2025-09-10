"use client"

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
    const [menu, setMenu] = useState<boolean>(false)
    
    function toggleMenu(): void {
        setMenu(prev => !prev)
    }

    return (
        <header className="h-16 bg-white flex w-full fixed top-0 left-0 items-center justify-between z-50 shadow-md">
            <div className="flex items-center gap-2 pl-4 md:pl-8">
                <Image src="/logo-vivo.png" alt="Logo da Vivo" width={70} height={70} />
                <h1 className="font-extrabold text-black text-lg md:text-xl">DETECTA</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6 pr-8 text-black font-bold">
                <Link href="/" prefetch>Home</Link>
                <Link href="https://landbot.online/v3/H-3123258-ZYH9QENRL4LKS61Q/index.html" prefetch>Vivo Detecta IA</Link>
                <Link href="/sobre" prefetch>Sobre</Link>
                <Link href="/aprendizado" prefetch>Educação</Link>
            </nav>
            <button 
                onClick={toggleMenu} 
                type="button" 
                className="md:hidden text-zinc-900 cursor-pointer pr-4"
            >
                <Menu size={32} />
            </button>
            {menu && (
                <div 
                    className="md:hidden fixed top-0 left-0 h-max py-4 w-screen bg-zinc-800 flex flex-col items-center text-start justify-center gap-8 text-white font-bold z-40"
                >
                    <button 
                        onClick={toggleMenu} 
                        type="button" 
                        className="absolute top-4 right-4 text-white"
                    >
                        <X size={32} />
                    </button>
                    <Link onClick={toggleMenu} href="/" prefetch>Home</Link>
                    <Link onClick={toggleMenu} href="https://landbot.online/v3/H-3123258-ZYH9QENRL4LKS61Q/index.html" prefetch>Chatbot</Link>
                    <Link onClick={toggleMenu} href="/sobre" prefetch>Sobre</Link>
                    <Link onClick={toggleMenu} href="/aprendizado" prefetch>Modo educativo</Link>
                </div>
            )}
        </header>
    )
}