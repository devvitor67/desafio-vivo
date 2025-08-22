"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjetoNarrativaPage() {
  const sections = [
    {
      title: "Metodologia de Análise de Dados",
      text: "O processo inclui coleta sistemática, organização criteriosa, análise estatística e interpretação crítica dos dados para fundamentar a narrativa.",
    },
    {
      title: "Visualizações de Dados",
      text: "Gráficos, tabelas e dashboards tornam a interpretação imediata, facilitando a comunicação clara das informações essenciais.",
    },
    {
      title: "Desafios Enfrentados",
      text: "A equipe superou dificuldades como dados incompletos e limitações tecnológicas com resiliência e soluções criativas.",
    },
    {
      title: "Considerações sobre Sustentabilidade",
      text: "O projeto alinha-se aos ODS, promovendo impacto positivo ambiental e social por meio de práticas conscientes e inclusivas.",
    },
    {
      title: "Referências",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>Relatórios técnicos da ONU sobre ODS.</li>
          <li>Estudos acadêmicos em ciência de dados.</li>
          <li>Bases de dados abertas e governamentais.</li>
        </ul>
      ),
    },
  ]

  return (
    <main className="relative min-h-screen w-full text-neutral-900 bg-gradient-to-b from-white to-violet-50">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projeto-bg.jpg"
          alt="Fundo projeto acadêmico"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-10">
        <Header />
      </header>

      {/* Conteúdo estilo blog */}
      <section className="relative max-w-4xl mx-auto px-8 sm:px-16 py-20 space-y-12">
        <h1 className="text-5xl font-extrabold text-violet-700">
          Sobre o nosso projeto - Vivo Detecta
        </h1>

        {sections.map((sec, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-semibold text-violet-700 mb-4">
              {sec.title}
            </h2>
            <div className="text-neutral-800">{sec.text}</div>
          </motion.article>
        ))}

        {/* Link voltar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-8 py-3 shadow-lg transition hover:scale-105"
          >
            ← Voltar para Home
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
