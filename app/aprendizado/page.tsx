"use client"
import { Header } from "@/components/Header"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function EducativoPage() {
  const [quizStep, setQuizStep] = useState(0)
  const [score, setScore] = useState(0)

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
      text: <p>Golpes de phishing tentam enganar você pedindo informações pessoais por meio de links falsos, mensagens urgentes e remetentes desconhecidos.</p>,
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
      text: <p>Sites falsos imitam sites reais para roubar seus dados. Eles podem ter URLs parecidas, solicitar dados confidenciais e não usar conexões seguras.</p>,
      img: "/sites-falsos.jpg",
    },
    {
      title: "O que significa engenharia social?",
      text: <p>Engenharia social é a manipulação psicológica para enganar pessoas e obter informações confidenciais, como senhas e códigos.</p>,
      img: "/engenharia-social.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)] text-zinc-100">
      <Header />

      <section className="max-w-5xl mx-auto px-6 sm:px-12 md:px-24 py-20 space-y-12 pt-28">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">Modo Educativo — Aprenda a se Proteger</h1>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {cardData.map((card, i) => (
            <article key={i} className="bg-zinc-900 rounded-lg overflow-hidden border border-violet-300">
              <div className="relative h-48 w-full">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold text-violet-400">{card.title}</h2>
                {card.text}
              </div>
            </article>
          ))}
        </div>

        {/* Quiz */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-violet-300">
          <h2 className="text-3xl font-bold text-violet-400 mb-6">Quiz: Você cairia nesse golpe?</h2>
          {quizStep < questions.length ? (
            <>
              <p className="mb-6 text-lg">{questions[quizStep].question}</p>
              <div className="flex flex-col gap-4">
                {questions[quizStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.correct)}
                    className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg py-3 px-4 font-semibold transition"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-lg mb-4">Você acertou {score} de {questions.length} perguntas!</p>
              <button
                onClick={() => { setScore(0); setQuizStep(0) }}
                className="bg-violet-600 hover:bg-violet-700 rounded-lg py-3 px-6 font-semibold text-white transition"
              >
                Tentar novamente
              </button>
            </div>
          )}
        </div>

        {/* Checklist */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-violet-300">
          <h2 className="text-3xl font-bold text-violet-400 mb-4">Checklist: o que fazer ao receber uma mensagem suspeita</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Não clique em links ou arquivos suspeitos.</li>
            <li>Verifique o remetente e o contexto da mensagem.</li>
            <li>Não forneça dados pessoais ou códigos por telefone ou mensagens.</li>
            <li>Use ferramentas como o <span className="font-semibold text-violet-400">Vivo Detecta</span> para análise rápida.</li>
            <li>Bloqueie e reporte contatos suspeitos.</li>
            <li>Mantenha seu antivírus e sistema atualizados.</li>
          </ul>
        </div>

        {/* Voltar */}
        <div className="flex justify-center">
          <Link href="/" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-8 py-3 transition">
            ← Voltar para Home
          </Link>
        </div>
      </section>
    </main>
  )
}
