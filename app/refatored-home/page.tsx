"use client"

import { Header } from "@/components/Header"
import { TextGradient } from "@/components/ui/GradientText"
import { Brain, Shield, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)] flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 space-y-12 pt-28">
        <div className="max-w-2xl w-full text-pretty flex flex-col text-center gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100">
            Bem-vindo ao <TextGradient>Vivo Detecta</TextGradient>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
            Links desconhecidos, números suspeitos e sites falsos 
            <span className="text-zinc-100"> podem comprometer sua segurança</span>.
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl text-zinc-100 font-semibold">
            O <span className="text-transparent bg-gradient-to-r from-purple-700 via-fuchsia-600 to-cyan-500 bg-clip-text">Vivo Detecta</span> analisa rapidamente essas ameaças, protegendo seus dados e sua tranquilidade.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="https://landbot.online/v3/H-3103818-KOZXKJZKK1AGZ3MI/index.html">
            <button className="text-zinc-50 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-cyan-500 px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-transform hover:scale-105">
              Vivo Detecta <Brain size={16} />
            </button>
          </Link>
          <Link href="/sobre">
            <button className="text-zinc-50 bg-transparent px-4 py-2 font-medium hover:underline hover:underline-offset-8 transition-colors hover:text-cyan-400">
              Explorar
            </button>
          </Link>
          <Link href="/aprendizado">
            <button className="text-zinc-50 bg-transparent px-4 py-2 font-medium hover:underline hover:underline-offset-8 transition-colors hover:text-cyan-400">
              Educação
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center gap-4 hover:bg-zinc-800 transition-colors">
            <Shield className="text-cyan-500" size={40} />
            <h4 className="text-lg font-semibold text-zinc-100">Proteção de Links</h4>
            <p className="text-zinc-400 text-sm">Analisamos links em tempo real para identificar e impedir sites maliciosos te enganarem.</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center gap-4 hover:bg-zinc-800 transition-colors">
            <Smartphone className="text-fuchsia-500" size={40} />
            <h4 className="text-lg font-semibold text-zinc-100">Verificação de Números</h4>
            <p className="text-zinc-400 text-sm">Detectamos números suspeitos para proteger você contra chamadas fraudulentas.</p>
          </div>
          <div className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center gap-4 hover:bg-zinc-800 transition-colors">
            <Globe className="text-purple-500" size={40} />
            <h4 className="text-lg font-semibold text-zinc-100">Navegação Segura</h4>
            <p className="text-zinc-400 text-sm">Explore a internet com confiança, sabendo que a IA te ajudará a evitar golpes e ciladas digitais.</p>
          </div>
        </div>
      </main>
      <footer className="bg-zinc-900 py-6 text-center text-zinc-400">
        <p className="text-sm">© 2025 Vivo Detecta | Projeto acadêmico sem fins lucrativos | Todos os direitos reservados.</p>
      </footer>
    </>
  )
}