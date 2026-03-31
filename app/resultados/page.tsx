"use client";

import Link from "next/link";
import { Star, User, Users } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function ResultadosPage() {
  const secoes = [
    "Treineiros do 8º ano - Ensino Fundamental",
    "Treineiros do 9º ano - Ensino Fundamental",
    "Treineiros do 1º ano - Ensino Médio",
    "Treineiros do 2º ano - Ensino Médio",
    "Alunos que tiraram notas no ENEM",
  ];

  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Nossos alunos
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Resultados que
          <br />
          <span className="text-brand-pink">inspiram.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Em cada etapa, nossos alunos evoluem com método, prática e acompanhamento.
          Assim que você enviar os links, eu transformo cada bloco em carrossel real
          com imagens e navegação.
        </p>
      </section>

      <section className="mb-24 space-y-4">
        {secoes.map((secao) => (
          <article
            key={secao}
            className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
          >
            <h2 className="font-heading text-xl text-brand-premium">{secao}</h2>
            <p className="mt-2 text-sm text-brand-muted">
              Carrossel em preparação. Área pronta para receber os links e imagens.
            </p>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              <div className="h-24 min-w-[140px] rounded-xl bg-brand-roseSoft" />
              <div className="h-24 min-w-[140px] rounded-xl bg-brand-roseSoft" />
              <div className="h-24 min-w-[140px] rounded-xl bg-brand-roseSoft" />
            </div>
          </article>
        ))}
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <Star className="h-4.5 w-4.5" />
            </span>
            Resultados
          </span>
          <Link href="/destaques" className="flex flex-col items-center gap-1">
            <Users className="h-4.5 w-4.5" />
            Destaques
          </Link>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Contato
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
