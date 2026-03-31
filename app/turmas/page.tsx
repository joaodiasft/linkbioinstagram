"use client";

import Link from "next/link";
import { BookOpen, Clock3, Home, MessageCircle } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function TurmasPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Matrículas abertas
        </p>
        <h1 className="font-heading text-[44px] leading-[0.95] text-brand-premium">
          Turmas 2026
          <span className="italic text-brand-pink"> por curso.</span>
        </h1>
        <p className="mt-4 max-w-[350px] text-sm leading-relaxed text-brand-muted">
          Grade oficial com opções para Ensino Fundamental e Médio. Caso tenha
          dúvida sobre nível ou disponibilidade, nossa equipe te orienta.
        </p>
      </section>

      <section className="space-y-4">
        <article className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl text-brand-premium">Redação</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-pink">
            Ensino médio
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> R1 - terça - 18h às
              19h30
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> R2 - terça - 19h30 às
              21h
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> R3 - sábado - 07h30 às
              09h
            </li>
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> R4 - sábado - 09h às
              10h30
            </li>
          </ul>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-pink">
            Ensino fundamental
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li className="flex items-start gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" /> R5 -
              sábado - 10h30 às 12h - 6º e 7º ano
            </li>
            <li className="flex items-start gap-2">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" /> R6 -
              sábado - 15h00 às 16h30 - 8º e 9º ano
            </li>
          </ul>
        </article>

        <article className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl text-brand-premium">Exatas</h2>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> EX1 - segunda - 19h às
              22h
            </li>
          </ul>
        </article>

        <article className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl text-brand-premium">Matemática</h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-pink">
            Ensino médio
          </p>
          <p className="mt-2 text-sm text-brand-muted">Ainda a definir.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-pink">
            Ensino fundamental
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            <li className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-brand-pink" /> M2 - quinta - 18h40 às
              19h40
            </li>
          </ul>
        </article>

        <article className="rounded-[26px] border border-brand-line bg-white p-5 shadow-card">
          <h2 className="font-heading text-2xl text-brand-premium">Intensivo de férias</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Turma em abertura. Em breve divulgaremos cronograma, vagas e valores.
          </p>
        </article>
      </section>

      <section
        id="garantir-vaga"
        className="mb-24 mt-8 rounded-[26px] border border-brand-line bg-white p-5 shadow-card"
      >
        <h3 className="font-heading text-3xl leading-tight text-brand-premium">
          Quer reservar sua vaga?
        </h3>
        <p className="mt-3 text-sm text-brand-muted">
          Envie uma mensagem e te ajudamos na melhor turma para o seu momento.
        </p>
        <a
          href="https://wa.me/5562981899570"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-pink underline underline-offset-4"
        >
          <MessageCircle className="h-4 w-4" />
          Falar no WhatsApp
        </a>
      </section>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft">
              <Clock3 className="h-5 w-5" />
            </span>
            Turmas
          </span>
          <Link href="/planos" className="flex flex-col items-center gap-1">
            <BookOpen className="h-5 w-5" />
            Planos
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
