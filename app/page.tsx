import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full text-neutral-100 px-8">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imagem.jpg"
          alt="Fundo inteligência artificial"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>
      <header className="absolute top-0 left-0 w-full z-10">
        <Header />
      </header>
      <section className="flex flex-col justify-center h-screen max-w-5xl pl-8 sm:pl-16 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-2xl">
          Projeto <span className="text-violet-400">Vivo Detecta</span>
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium text-neutral-300 max-w-xl">
          Inteligência artificial para proteger você contra links, telefones e sites suspeitos
        </h2>
        <p className="text-base sm:text-xl text-neutral-200 max-w-2xl leading-relaxed">
          Golpes e fraudes digitais estão cada vez mais presentes no dia a dia.
          Links desconhecidos, números de telefone suspeitos e sites falsos podem colocar em risco seus dados e sua tranquilidade. 
          O <span className="font-semibold text-violet-300">Vivo Detecta</span> analisa rapidamente essas informações,
          ajudando você a identificar ameaças antes que causem problemas.
        </p>

        <div className="flex gap-4 text-start max-w-full w-full">
          <Link
            target="_blank"
            prefetch
            href="https://landbot.online/v3/H-3103818-KOZXKJZKK1AGZ3MI/index.html"
            className="inline-block px-4 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition-transform duration-300 hover:scale-105"
          >
            🚀 Acessar Chatbot
          </Link>
          <Link
            prefetch
            href="/sobre"
            className="inline-block px-8 py-3 text-white text-sm font-semibold rounded-lg transition-transform duration-300 hover:scale-105 hover:underline hover:underline-offset-8"
          >
            Sobre o projeto
          </Link>
          <Link
            prefetch
            href="/aprendizado"
            className="inline-block px-8 py-3 text-white text-sm font-semibold rounded-lg transition-transform duration-300 hover:scale-105 hover:underline hover:underline-offset-8"
          >
            Modo educativo - Aprenda a se proteger
          </Link>
        </div>
      </section>
      <footer className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-neutral-400 text-sm">
        © {new Date().getFullYear()} Vivo Detecta. Todos os direitos reservados.
      </footer>
    </main>
  )
}
