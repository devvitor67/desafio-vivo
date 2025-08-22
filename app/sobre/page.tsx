"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjetoNarrativaPage() {
  const sections = [
    {
      title: "Introdução",
      text: "O aumento constante de golpes digitais, como phishing, engenharia social e fraudes por mensagens, representa uma ameaça direta à segurança de milhões de brasileiros. Diante desse cenário, criamos o Vivo Detecta, um agente de segurança digital que combina chatbot inteligente e modo educativo. Ele utiliza dados abertos de segurança cibernética para identificar mensagens e sites falsos em tempo real, além de ensinar boas práticas de proteção digital aos clientes. O objetivo central é simples: reduzir o impacto dos golpes, aumentar a confiança no ambiente digital e oferecer orientação prática para qualquer pessoa, independentemente do seu nível de conhecimento técnico.",
    },
    {
      title: "Metodologia de Análise de Dados",
      text: (
        <div className="space-y-4">
          <p>A base do projeto está na análise estruturada de dados abertos. O processo seguiu quatro etapas principais:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Coleta de dados:</strong> múltiplas fontes como CERT.br, Anatel, SaferNet, NIC.br, GitHub (phishing.army e mitchellkrogza), PhishTank, URLhaus, OpenPhish, relatórios setoriais e consultas WHOIS.</li>
            <li><strong>Organização:</strong> padronização, remoção de duplicidades e categorização (phishing, engenharia social, domínios look-alike, números suspeitos e links encurtados).</li>
            <li><strong>Análise e interpretação:</strong> filtros de consistência, enriquecimento de dados (ASN, país de origem, data de criação do domínio, indícios de spoofing) e scripts automatizados de correlação.</li>
            <li><strong>Tradução para linguagem acessível:</strong> chatbot apresenta explicações simples como “Este link é suspeito porque o domínio foi criado há menos de 7 dias e não pertence ao site oficial do banco”.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Visualizações de Dados",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>Gráficos de categorias de phishing (Brasil, Exterior e Totais)</li>
          <li>Linha do tempo da evolução dos golpes</li>
          <li>Distribuição por ASN e países de origem</li>
          <li>Casos de domínios recém-criados em ataques ativos</li>
        </ul>
      ),
    },
    {
      title: "Desafios Enfrentados",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>Heterogeneidade dos dados: necessidade de padronização.</li>
          <li>Incompletude: registros sem país de origem ou data de criação.</li>
          <li>Complexidade de tradução técnica: simplificar termos de segurança digital.</li>
        </ul>
      ),
    },
    {
      title: "Considerações sobre Sustentabilidade e ODS",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li><strong>ODS 9:</strong> fortalece a infraestrutura digital e promove inovação.</li>
          <li><strong>ODS 16:</strong> aumenta a confiança digital, protege direitos e combate fraudes.</li>
          <li><strong>ODS 17:</strong> integra dados de órgãos públicos, empresas e comunidades técnicas.</li>
          <li>Solução escalável, de baixo custo e baixo impacto ambiental, com alto impacto social.</li>
        </ul>
      ),
    },
    {
      title: "Impacto Social e Ambiental Esperado",
      text: (
        <div className="space-y-4">
          <p><strong>Social:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Redução de prejuízos financeiros e emocionais causados por golpes.</li>
            <li>Educação contínua em boas práticas digitais.</li>
            <li>Fortalecimento da confiança na internet e nos serviços digitais.</li>
          </ul>
          <p><strong>Ambiental:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Consumo mínimo de recursos físicos.</li>
            <li>Alternativa sustentável a campanhas impressas e materiais de alto custo.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Conclusões e Lições Aprendidas",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>Dados abertos, bem analisados, se transformam em prevenção real.</li>
          <li>Tecnologia só gera valor quando impacta positivamente as pessoas.</li>
          <li>Educação digital é tão importante quanto detecção de golpes.</li>
          <li>Cooperação multissetorial fortalece a eficácia da solução.</li>
          <li>O projeto criou uma camada ativa e educativa de proteção digital.</li>
        </ul>
      ),
    },
    {
      title: "Referências",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>CERT.br – Estatísticas e relatórios de incidentes.</li>
          <li>Anatel – Relatórios de segurança digital.</li>
          <li>SaferNet Brasil – Pesquisas sobre crimes cibernéticos.</li>
          <li>NIC.br – Dados técnicos de infraestrutura da internet no Brasil.</li>
          <li>GitHub (phishing.army, mitchellkrogza) – Listas atualizadas de phishing.</li>
          <li>PhishTank – Repositório colaborativo de domínios maliciosos.</li>
          <li>URLhaus – Base de dados de URLs maliciosas.</li>
          <li>OpenPhish – Inteligência automatizada sobre phishing.</li>
          <li>Relatórios setoriais de bancos e telecomunicações.</li>
          <li>Consultas WHOIS – Informações sobre registros de domínios.</li>
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
