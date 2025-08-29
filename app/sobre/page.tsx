"use client"

import { Header } from "@/components/Header"
import Link from "next/link"

export default function ProjetoNarrativaPage() {
  const sections = [
    {
      title: "Introdução",
      content: (
        <p>
          O aumento constante de golpes digitais, como phishing, engenharia social e fraudes por mensagens, representa uma ameaça direta à segurança de milhões de brasileiros. Diante desse cenário, criamos o Vivo Detecta, um agente de segurança digital que combina chatbot inteligente e modo educativo. Ele utiliza dados abertos de segurança cibernética para identificar mensagens e sites falsos em tempo real, além de ensinar boas práticas de proteção digital aos clientes. O objetivo central é simples: reduzir o impacto dos golpes, aumentar a confiança no ambiente digital e oferecer orientação prática para qualquer pessoa, independentemente do seu nível de conhecimento técnico.
        </p>
      ),
    },
    {
      title: "Metodologia de Análise de Dados",
      content: (
        <>
          <p>A base do projeto está na análise estruturada de dados abertos. O processo seguiu quatro etapas principais:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Coleta de dados:</strong> múltiplas fontes como CERT.br, Anatel, SaferNet, NIC.br, GitHub, PhishTank, URLhaus, OpenPhish, relatórios e WHOIS.</li>
            <li><strong>Organização:</strong> padronização, deduplicação e categorização (phishing, engenharia social, look-alike, SMS e encurtados).</li>
            <li><strong>Análise e interpretação:</strong> filtros de consistência, enriquecimento (ASN, país, data de criação, spoofing) e correlações automatizadas.</li>
            <li><strong>Tradução acessível:</strong> chatbot explica, por exemplo, “domínio criado há 7 dias e não é oficial”.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Visualizações de Dados",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Gráficos de categorias de phishing (Brasil, Exterior e Totais)</li>
          <li>Linha do tempo da evolução dos golpes</li>
          <li>Distribuição por ASN e país de origem</li>
          <li>Domínios recém-criados em ataques ativos</li>
        </ul>
      ),
    },
    {
      title: "Desafios Enfrentados",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Heterogeneidade dos dados: padronização necessária</li>
          <li>Incompletude: ausência de país ou data de criação</li>
          <li>Simplificação técnica: tornar jargões acessíveis</li>
        </ul>
      ),
    },
    {
      title: "Considerações sobre Sustentabilidade e ODS",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li><strong>ODS 9:</strong> infraestrutura digital e inovação</li>
          <li><strong>ODS 16:</strong> confiança digital, direitos e combate a fraudes</li>
          <li><strong>ODS 17:</strong> integração de dados públicos, privados e comunidade</li>
          <li>Escalável, baixo custo e impacto ambiental reduzido</li>
        </ul>
      ),
    },
    {
      title: "Impacto Social e Ambiental Esperado",
      content: (
        <>
          <p><strong>Social:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Redução de perdas financeiras e emocionais</li>
            <li>Educação contínua em segurança digital</li>
            <li>Fortalecimento da confiança em serviços online</li>
          </ul>
          <p><strong>Ambiental:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Consumo mínimo de recursos físicos</li>
            <li>Alternativa digital a campanhas impressas</li>
          </ul>
        </>
      ),
    },
    {
      title: "Conclusões e Lições Aprendidas",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>Dados abertos bem tratados viram prevenção real</li>
          <li>Tecnologia só vale quando impacta positivamente</li>
          <li>Educação digital é tão vital quanto detecção de ataques</li>
          <li>Cooperação multissetorial aumenta eficácia</li>
          <li>Camada educativa ativa reforça a proteção</li>
        </ul>
      ),
    },
    {
      title: "Referências",
      content: (
        <ul className="list-disc list-inside space-y-1">
          <li>CERT.br – Estatísticas de incidentes</li>
          <li>Anatel – Relatórios de segurança digital</li>
          <li>SaferNet Brasil – Pesquisas de crimes cibernéticos</li>
          <li>NIC.br – Infraestrutura da Internet no Brasil</li>
          <li>GitHub, PhishTank, URLhaus, OpenPhish – Listas de phishing</li>
          <li>Relatórios setoriais e consultas WHOIS</li>
        </ul>
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)] text-zinc-100">
      <Header />

      <section className="max-w-5xl mx-auto px-6 sm:px-12 md:px-24 py-20 space-y-12 pt-28">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
          Sobre o nosso projeto – Vivo Detecta
        </h1>

        {sections.map(({ title, content }) => (
          <article
            key={title}
            className="bg-zinc-900 rounded-lg p-6 border border-violet-300 space-y-3"
          >
            <h2 className="text-2xl font-semibold text-violet-400">
              {title}
            </h2>
            <div className="space-y-3">{content}</div>
          </article>
        ))}

        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-8 py-3 transition"
          >
            ← Voltar para Home
          </Link>
        </div>
      </section>
    </main>
  )
}
