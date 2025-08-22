"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function EducativoPage() {
  const [quizStep, setQuizStep] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  const questions = [
    {
      question: "Você recebeu um link suspeito que pede seus dados pessoais. O que você faz?",
      options: [
        { text: "Clico no link e preencho os dados", correct: false },
        { text: "Verifico o remetente e não clico se estiver estranho", correct: true },
        { text: "Ignoro e compartilho com amigos para alertar", correct: false },
      ],
    },
    {
      question: "Um site oferece um prêmio fácil, mas pede para baixar um arquivo. Isso é seguro?",
      options: [
        { text: "Sim, parece confiável", correct: false },
        { text: "Não, pode ser golpe", correct: true },
        { text: "Depende do site", correct: false },
      ],
    },
    {
      question: "Você recebeu um SMS dizendo ser da Vivo pedindo para atualizar seu cadastro via link. O que fazer?",
      options: [
        { text: "Clicar no link e atualizar imediatamente", correct: false },
        { text: "Ignorar e acessar o app Meu Vivo oficial", correct: true },
        { text: "Responder pedindo mais informações", correct: false },
      ],
    },
    {
      question: "Um número desconhecido liga dizendo ser da Vivo e pede o código recebido por SMS. Qual a atitude correta?",
      options: [
        { text: "Informar o código para confirmar", correct: false },
        { text: "Nunca passar o código, pois pode ser golpe", correct: true },
        { text: "Enviar o código apenas se a ligação parecer séria", correct: false },
      ],
    },
    {
      question: "Você encontra um site oferecendo plano de internet Vivo muito barato, mas a URL parece estranha. O que você faz?",
      options: [
        { text: "Aproveitar a promoção e assinar logo", correct: false },
        { text: "Checar no site oficial da Vivo antes de confiar", correct: true },
        { text: "Compartilhar com amigos para aproveitarem também", correct: false },
      ],
    },
    {
      question: "Um aplicativo não oficial promete turbinar sua internet Vivo grátis. O que você faz?",
      options: [
        { text: "Instalo, pois parece uma vantagem", correct: false },
        { text: "Não instalo, pode ser app falso ou vírus", correct: true },
        { text: "Baixo e testo em outro celular primeiro", correct: false },
      ],
    },
    {
      question: "Recebeu mensagem no WhatsApp prometendo 'Vivo com internet ilimitada grátis'. Como agir?",
      options: [
        { text: "Clicar no link e preencher os dados", correct: false },
        { text: "Apagar a mensagem e bloquear o contato", correct: true },
        { text: "Encaminhar para amigos para validarem", correct: false },
      ],
    },
  ]

  function handleAnswer(correct: boolean) {
    if (correct) setScore(score + 1)
    setQuizStep(quizStep + 1)
  }

  const cardData = [
    {
      title: "Como reconhecer um golpe de phishing",
      text: "Golpes de phishing tentam enganar você pedindo informações pessoais por meio de links falsos, mensagens urgentes e remetentes desconhecidos.",
      img: "/phishing.jpg",
    },
    {
      title: "Golpes mais comuns em 2025",
      text: (
        <ul className="list-disc list-inside space-y-1">
          <li>Falsos links de operadoras pedindo atualização de cadastro.</li>
          <li>Mensagens com prêmios falsos solicitando downloads.</li>
          <li>Chamadas de números desconhecidos solicitando códigos.</li>
        </ul>
      ),
      img: "/golpes.webp",
    },
    {
      title: "Como funcionam os sites falsos?",
      text: "Sites falsos imitam sites reais para roubar seus dados. Eles podem ter URLs parecidas, solicitar dados confidenciais e não usar conexões seguras.",
      img: "/sites-falsos.jpg",
    },
    {
      title: "O que significa engenharia social?",
      text: "Engenharia social é a manipulação psicológica para enganar pessoas e obter informações confidenciais, como senhas e códigos.",
      img: "/engenharia-social.jpg",
    },
  ]

  return (
    <main className="relative min-h-screen w-full text-neutral-900 bg-gradient-to-b from-white to-violet-50">
      {/* Fundo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imagem.jpg"
          alt="Fundo inteligência artificial"
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

      {/* Conteúdo */}
      <section className="relative max-w-5xl mx-auto px-8 sm:px-16 py-20 space-y-12">

        <h1 className="text-5xl font-extrabold text-violet-700 max-w-3xl">
          🔐 Modo Educativo — Aprenda a se Proteger
        </h1>

        {/* Cards com imagens */}
        <div className="grid gap-8 max-w-4xl sm:grid-cols-2">
          {cardData.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-violet-300 hover:shadow-violet-400 transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-violet-600 mb-3">{card.title}</h2>
                <p className="text-neutral-700">{card.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Quiz */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-full bg-white rounded-xl p-6 shadow-lg border border-violet-300"
        >
          <h2 className="text-3xl font-bold text-violet-700 mb-6">Quiz: Você cairia nesse golpe?</h2>

          {quizStep < questions.length ? (
            <div>
              <p className="mb-6 text-xl text-neutral-800">{questions[quizStep].question}</p>
              <div className="flex flex-col gap-4">
                {questions[quizStep].options.map((opt, i) => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    key={i}
                    onClick={() => handleAnswer(opt.correct)}
                    className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg py-3 px-4 font-semibold transition"
                  >
                    {opt.text}
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl mb-4 text-violet-700">Você acertou {score} de {questions.length} perguntas!</p>
              <button
                onClick={() => {
                  setScore(0)
                  setQuizStep(0)
                }}
                className="bg-violet-600 hover:bg-violet-700 rounded-lg py-3 px-6 font-semibold text-white transition"
              >
                Tentar novamente
              </button>
            </div>
          )}
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-full bg-white rounded-xl p-6 shadow-lg border border-violet-300 text-neutral-800"
        >
          <h2 className="text-3xl font-bold text-violet-700 mb-4">Checklist: o que fazer ao receber uma mensagem suspeita</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Não clique em links ou arquivos suspeitos.</li>
            <li>Verifique o remetente e o contexto da mensagem.</li>
            <li>Não forneça dados pessoais ou códigos por telefone ou mensagens.</li>
            <li>Use ferramentas como o <span className="font-semibold text-violet-600">Vivo Detecta</span> para análise rápida.</li>
            <li>Bloqueie e reporte contatos suspeitos.</li>
            <li>Mantenha seu antivírus e sistema atualizados.</li>
          </ul>
        </motion.div>

        {/* Link para voltar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full flex justify-center mt-10"
        >
          <Link href="/" className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-8 py-3 shadow-lg transition hover:scale-105">
            ← Voltar para Home
          </Link>
        </motion.div>

      </section>
    </main>
  )
}
