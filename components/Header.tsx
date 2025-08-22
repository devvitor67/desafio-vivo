import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="h-16 px-8 bg-white flex w-full fixed justify-between">
            <div className="flex items-center gap-2">
                <Image src="/logo-vivo.png" alt="Logo da Vivo" width={70} height={70} />
                <h1 className="font-extrabold text-black">DETECTA</h1>
            </div>
            <div className="flex items-center gap-4 text-black font-bold">
                <Link prefetch href="/chatbot">Chatbot</Link>
                <Link prefetch href="/sobre">Sobre</Link>
                <Link prefetch href="/aprendizado">Modo educativo</Link>
            </div>
        </header>
    )
}