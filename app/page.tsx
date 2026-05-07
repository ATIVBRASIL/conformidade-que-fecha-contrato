"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HOTMART_LINK = "https://pay.hotmart.com/S105695969A";

const chapters = [
  "INTRO — A omissão que custa contratos",
  "CAP 1 — O que realmente mudou com a Lei 14.967/24",
  "CAP 2 — Responsabilidade solidária na prática",
  "CAP 3 — O Checklist — 12 pontos antes de sentar na mesa",
  "CAP 4 — Compliance como argumento de venda",
  "CAP 5 — Plano de ação em 30 dias",
];

const checklistItems = [
  "Registro ativo na Polícia Federal",
  "Alvará de funcionamento atualizado",
  "CNPJ ativo e certidão negativa federal",
  "Certidão negativa trabalhista (TST)",
  "Seguro de responsabilidade civil ativo",
  "Vínculos empregatícios formalizados",
  "FGTS e INSS em dia",
  "Equipamentos com registro e certificação",
  "Certificado de formação dos vigilantes",
  "Reciclagem dentro do prazo",
  "Atestado de Saúde Ocupacional (ASO)",
  "Laudo de aptidão psicológica válido",
];

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    let heroObserver: IntersectionObserver | null = null;
    if (heroRef.current) {
      heroObserver = new IntersectionObserver(
        ([entry]) => setShowSticky(!entry.isIntersecting),
        { threshold: 0.02 }
      );
      heroObserver.observe(heroRef.current);
    }

    return () => {
      revealObserver.disconnect();
      heroObserver?.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#F7F3ED] text-[#0E2033]">
      <section
        ref={heroRef}
        className="border-l-4 border-[#C9A84C] bg-[#0E2033] px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700">
            <span className="inline-flex border border-[#C9A84C]/40 px-3 py-1 text-xs tracking-[0.2em] text-[#E8D4A0] uppercase">
              ATIV BRASIL · E-BOOK · 2026
            </span>
            <h1 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight font-black text-white md:text-6xl">
              Conformidade que Fecha Contrato
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#E8D4A0] italic md:text-xl">
              Como gestores de segurança privada usam a Lei 14.967/24 para
              blindar clientes e eliminar o risco de responsabilidade solidária
            </p>
            <a
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-sm bg-[#C9A84C] px-7 py-4 text-base font-semibold text-[#0E2033] transition hover:bg-[#E8D4A0]"
            >
              Quero o E-book Agora
            </a>
            <p className="mt-4 text-sm text-[#E8D4A0]">
              Apenas R$ 47,00 · Acesso imediato · PDF completo
            </p>
          </div>

          <div
            data-reveal
            className="mx-auto w-full max-w-sm translate-y-8 opacity-0 transition-all duration-700"
          >
            <Image
              src="https://raw.githubusercontent.com/ATIVBRASIL/conformidade-que-fecha-contrato/refs/heads/main/conf_01.png"
              alt="Capa do e-book Conformidade que Fecha Contrato"
              width={700}
              height={980}
              priority
              className="h-auto w-full rounded-md border border-[#C9A84C]/40 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10">
        <div
          data-reveal
          className="mx-auto max-w-4xl translate-y-8 opacity-0 space-y-5 transition-all duration-700"
        >
          <p className="text-sm tracking-[0.16em] text-[#1B3A5C] uppercase">
            Uma história que você já viveu — ou vai viver
          </p>
          <p className="text-xl text-[#1B3A5C] italic">
            A ligação veio numa sexta-feira à tarde.
          </p>
          <p className="text-lg leading-relaxed text-[#0E2033]/90">
            O cliente pediu um dossiê de conformidade antes de renovar o
            contrato. Tudo parecia certo na operação, mas o jurídico exigiu
            documentação precisa e atualizada.
          </p>
          <p className="text-lg leading-relaxed text-[#0E2033]/90">
            O gestor ficou em silêncio: não sabia exatamente o que estava em dia
            e o que ainda faltava.
          </p>
          <blockquote className="border-l-4 border-[#1B3A5C] bg-[#F7F3ED] px-5 py-4 font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C] italic">
            O contrato não foi renovado.
          </blockquote>
          <p className="text-lg leading-relaxed text-[#0E2033]/90">
            O problema não é competência operacional, é clareza sobre o que a
            lei exige.
          </p>
        </div>
      </section>

      <section className="bg-[#1B3A5C] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal
            className="max-w-4xl translate-y-8 opacity-0 font-[var(--font-playfair)] text-3xl leading-tight font-bold text-white transition-all duration-700 md:text-5xl"
          >
            Quando sua empresa não está em conformidade, o cliente enxerga três
            cenários.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "CENÁRIO 01: Contrato não assinado — due diligence bloqueou",
              "CENÁRIO 02: Contrato com cláusulas punitivas — multas e retenções",
              "CENÁRIO 03: Contrato cancelado na vigência — PF autua, rescisão",
            ].map((item, index) => (
              <article
                key={item}
                data-reveal
                className="translate-y-8 opacity-0 border border-[#C9A84C] bg-[#0E2033]/20 p-5 transition-all duration-700"
              >
                <p className="text-xs tracking-[0.16em] text-[#E8D4A0] uppercase">
                  {`0${index + 1}`}
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EAE0] px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700">
            <h2 className="font-[var(--font-playfair)] text-3xl leading-tight font-bold text-[#1B3A5C] md:text-5xl">
              Escrito por quem viveu a operação. E credenciado pelo mesmo órgão
              que a regula.
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                { text: "Veterano da Força Tática da Polícia Militar" },
                { text: "Veterano da Força Aérea Brasileira" },
                { text: "Pós-graduado em Filosofia" },
                {
                  text: "Fundador da ATIV Brasil — plataforma SaaS de gestão operacional",
                },
                {
                  highlight: "Instrutor Credenciado pela Polícia Federal",
                  text: " — Credenciamento nº 89/2026 (DPF/CAS/SP), habilitado em 13 disciplinas oficiais da segurança privada, incluindo Gerenciamento de Crise, Vigilância e Direitos Humanos. Válido até 2031.",
                },
              ].map((item) => (
                <li
                  key={item.highlight ?? item.text}
                  className="flex gap-3 text-[#0E2033]"
                >
                  <span className="mt-1 text-[#C9A84C]">●</span>
                  <span>
                    {item.highlight ? (
                      <strong>{item.highlight}</strong>
                    ) : null}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 border border-[#C9A84C] bg-[#0E2033] p-5 text-[#E8D4A0]">
              <p className="font-semibold text-white">
                POLÍCIA FEDERAL — Instrutor Credenciado
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Credenciamento Nº 89/2026 · DPF/CAS/SP · Válido até 21/01/2031
                <br />
                13 disciplinas do setor de segurança privada
              </p>
            </div>
          </div>

          <aside
            data-reveal
            className="translate-y-8 opacity-0 border border-[#C9A84C] bg-white p-6 transition-all duration-700"
          >
            <p className="font-[var(--font-playfair)] text-2xl leading-relaxed text-[#1B3A5C] italic">
              &ldquo;Aprendi que omissão tem custo. No campo, custa vidas. No
              mercado, custa contratos.&rdquo;
            </p>
            <Image
              src="https://raw.githubusercontent.com/ATIVBRASIL/conformidade-que-fecha-contrato/refs/heads/main/logo_ativ.png"
              alt="Logo ATIV Brasil"
              width={120}
              height={40}
              style={{
                objectFit: "contain",
                marginBottom: 12,
                width: "auto",
                height: "auto",
              }}
            />
            <p className="mt-4 font-semibold text-[#1B3A5C]">
              — Alex Andreoli Dantas, Fundador ATIV Brasil
            </p>
          </aside>

          <div
            data-reveal
            className="mt-2 max-w-[460px] translate-y-8 rounded-sm border-l-[3px] border-[#C9A84C] bg-[#F4F1EA] px-[18px] py-[14px] text-[13px] leading-relaxed text-[#0E2033]/75 opacity-0 transition-all duration-700 lg:col-span-2"
          >
            <span aria-hidden="true">🏛️</span>{" "}
            <strong className="text-[#1B3A5C]">
              Credenciamento nº 89/2026 — Polícia Federal / DPF/CAS/SP
            </strong>
            <br />
            <br />
            Habilitado como instrutor em 13 disciplinas oficiais da segurança
            privada, com validade até 2031. O mesmo órgão que fiscaliza e autua
            empresas de segurança privada no Brasil.
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2
            data-reveal
            className="translate-y-8 opacity-0 font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C] transition-all duration-700 md:text-5xl"
          >
            O que você vai encontrar nas próximas páginas
          </h2>
          <p
            data-reveal
            className="mt-4 translate-y-8 opacity-0 text-lg text-[#0E2033]/80 transition-all duration-700 italic"
          >
            21 páginas. Denso de valor. Zero enrolação.
          </p>
          <ul className="mt-8 space-y-3">
            {chapters.map((chapter, index) => (
              <li
                key={chapter}
                data-reveal
                className="translate-y-8 opacity-0 border-l-4 border-[#C9A84C] bg-[#F7F3ED] px-4 py-3 text-lg text-[#0E2033] transition-all duration-700"
              >
                <span className="mr-2 font-semibold text-[#1B3A5C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {chapter}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0E2033] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2
            data-reveal
            className="translate-y-8 opacity-0 font-[var(--font-playfair)] text-3xl font-bold text-white transition-all duration-700 md:text-5xl"
          >
            Os 12 pontos do Checklist de Conformidade
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {checklistItems.map((item, index) => (
              <div
                key={item}
                data-reveal
                className="translate-y-8 opacity-0 border border-[#C9A84C]/70 bg-white/5 p-4 text-[#F7F3ED] transition-all duration-700"
              >
                <span className="mr-2 font-semibold text-[#E8D4A0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#C9A84C] bg-[#F7F3ED] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2
            data-reveal
            className="translate-y-8 opacity-0 font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C] transition-all duration-700 md:text-5xl"
          >
            O que você vai carregar depois de ler.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "A fiscalização mais relevante hoje não vem da PF. Vem do cliente. — Capítulo 1",
              "Responsabilidade solidária é o motivo pelo qual seu cliente tem medo de assinar. Compliance organizado é o motivo pelo qual ele assina com confiança. — Capítulo 2",
              "Compliance não se improvisa na véspera da reunião. — Capítulo 3",
              "O gestor que usa compliance como argumento de venda não compete por preço. Compete por confiança. — Capítulo 4",
            ].map((quote) => (
              <blockquote
                key={quote}
                data-reveal
                className="translate-y-8 opacity-0 border-l-4 border-[#C9A84C] bg-white p-5 font-[var(--font-playfair)] text-xl leading-relaxed text-[#1B3A5C] italic transition-all duration-700"
              >
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-10">
        <div
          data-reveal
          className="mx-auto max-w-4xl translate-y-8 opacity-0 border-4 border-double border-[#C9A84C] bg-[#F7F3ED] p-8 transition-all duration-700"
        >
          <span className="inline-block bg-[#C9A84C] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#0E2033] uppercase">
            Bônus Exclusivo
          </span>
          <h2 className="mt-4 font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C] md:text-4xl">
            Modelo de Carta de Conformidade Regulatória
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0E2033]/90">
            Documento pronto para personalizar e entregar ao cliente antes de
            qualquer reunião ou renovação.
          </p>
          <p className="mt-4 text-lg font-semibold text-[#1B3A5C]">
            Use na próxima reunião. Imprima. Entregue.
          </p>
        </div>
      </section>

      <section className="bg-[#F0EAE0] px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div
            data-reveal
            className="translate-y-8 opacity-0 border border-[#1B3A5C]/20 bg-white p-6 transition-all duration-700"
          >
            <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C]">
              PARA VOCÊ SE...
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Gere empresa de segurança privada e quer adequar à Lei 14.967/24",
                "Já perdeu contrato por falta de documentação",
                "Quer chegar na reunião com argumento que o concorrente não tem",
                "Quer transformar compliance em vantagem competitiva",
                "Quer plano claro para sair da omissão em 30 dias",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[#0E2033]">
                  <span className="font-bold text-[#1B3A5C]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal
            className="translate-y-8 opacity-0 border border-zinc-300 bg-white p-6 transition-all duration-700"
          >
            <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-zinc-600">
              NÃO É PARA VOCÊ SE...
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Está satisfeito esperando para ver se vai pegar",
                "Acredita que compliance é só burocracia",
                "Busca conteúdo teórico sem aplicação prática",
                "Já tem dossiê montado, atualizado e presentável",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[#0E2033]">
                  <span className="font-bold text-zinc-500">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1B3A5C] px-5 py-16 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            data-reveal
            className="translate-y-8 opacity-0 font-[var(--font-playfair)] text-3xl leading-tight font-bold text-white transition-all duration-700 md:text-5xl"
          >
            Uma decisão. Trinta dias. Um lado diferente do mercado.
          </h2>
          <div
            data-reveal
            className="mx-auto mt-8 max-w-xl translate-y-8 opacity-0 border border-[#C9A84C] bg-[#0E2033] p-6 transition-all duration-700"
          >
            <p className="font-[var(--font-playfair)] text-4xl font-bold text-[#E8D4A0] md:text-5xl">
              R$ 47,00
            </p>
            <p className="mt-2 text-[#F7F3ED]">
              Pagamento único · Acesso imediato
            </p>
          </div>

          <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-left">
            {[
              "E-book completo — 5 capítulos + introdução + conclusão",
              "Checklist de 12 pontos utilizável imediatamente",
              "Plano de ação em 30 dias semana a semana",
              "Roteiro de 4 passos para apresentar compliance na venda",
              "Bônus: Modelo de Carta de Conformidade Regulatória",
            ].map((item) => (
              <li
                key={item}
                data-reveal
                className="translate-y-8 opacity-0 text-[#F7F3ED] transition-all duration-700"
              >
                <span className="mr-2 text-[#E8D4A0]">●</span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-sm bg-[#C9A84C] px-8 py-4 text-lg font-semibold text-[#0E2033] transition hover:bg-[#E8D4A0]"
          >
            Quero o E-book — R$ 47,00
          </a>
          <p className="mt-3 text-sm text-[#E8D4A0]">
            Acesso imediato após confirmação do pagamento
          </p>
        </div>
      </section>

      <section className="bg-[#F7F3ED] px-5 py-16 text-center md:px-10">
        <div
          data-reveal
          className="mx-auto max-w-4xl translate-y-8 opacity-0 transition-all duration-700"
        >
          <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[#1B3A5C] md:text-5xl">
            De qual lado você vai estar?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0E2033]/90">
            O mercado está dividindo em dois grupos: os preparados e os
            omissos.
          </p>
          <p className="mt-3 text-2xl font-semibold text-[#1B3A5C]">
            Por R$ 47, você escolhe o lado.
          </p>
          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-sm bg-[#0E2033] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#1B3A5C]"
          >
            Quero o E-book Agora
          </a>
        </div>
      </section>

      <div
        className={`fixed right-0 bottom-0 left-0 z-50 border-t-2 border-[#C9A84C] bg-[#0E2033] px-4 py-3 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-center text-sm text-[#F7F3ED] sm:text-left">
            Conformidade que Fecha Contrato — Alex Andreoli Dantas
          </p>
          <a
            href={HOTMART_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#C9A84C] px-5 py-2 text-sm font-semibold text-[#0E2033] transition hover:bg-[#E8D4A0]"
          >
            Comprar por R$ 47
          </a>
        </div>
      </div>
    </div>
  );
}
