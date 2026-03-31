"use client";

import Link from "next/link";
import {
  BookOpen,
  Check,
  Home,
  Users,
} from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

const plans = [
  {
    title: "Curso de Redação",
    price: "R$ 250,00",
    oldPrice: "R$ 300,00",
    highlights: [
      "Promoção por módulo",
      "Aulas com método completo",
      "Correções e acompanhamento",
      "Conteúdo atualizado",
    ],
    cta: "Quero Redação",
    featured: false,
  },
  {
    title: "Curso de Exatas",
    price: "R$ 300,00",
    oldPrice: "R$ 600,00",
    highlights: [
      "Promoção por módulo",
      "Física, Química e Matemática",
      "Resolução guiada de exercícios",
      "Acompanhamento de evolução",
    ],
    cta: "Começar Exatas",
    featured: true,
  },
  {
    title: "Curso de Matemática",
    price: "R$ 200,00",
    oldPrice: "R$ 250,00",
    highlights: [
      "Promoção por módulo",
      "Ensino fundamental e médio",
      "Base + aprofundamento",
      "Aulas focadas em resultado",
    ],
    cta: "Ver Matemática",
    featured: false,
  },
] as const;

export default function PlanosPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-8">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Planos e valores
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Planos e
          <br />
          <span className="italic text-brand-pink">Valores.</span>
        </h1>
        <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-brand-muted">
          Valores promocionais por módulo para Redação, Exatas e Matemática, com
          foco em alta performance e acompanhamento próximo.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`rounded-[26px] border p-5 shadow-card ${
              plan.featured
                ? "border-brand-pink/35 bg-white"
                : "border-brand-line bg-white"
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <BookOpen className="h-5 w-5" />
              </span>
              {plan.featured && (
                <span className="rounded-full bg-brand-pink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Destaque
                </span>
              )}
            </div>

            <h2 className="font-heading text-2xl leading-tight text-brand-premium">{plan.title}</h2>

            <ul className="mt-4 space-y-2">
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-end gap-2">
              <p className="font-heading text-4xl leading-none text-brand-premium">{plan.price}</p>
              <p className="pb-1 text-sm text-brand-muted line-through">{plan.oldPrice}</p>
            </div>

            <a
              href="https://wa.me/5562981899570"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-manrope mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold shadow-card transition ${
                plan.featured
                  ? "bg-gradient-primary text-white hover:brightness-105"
                  : "border border-brand-line bg-brand-roseSoft text-brand-premium hover:bg-brand-roseLight/60"
              }`}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </section>

      <section
        id="comprar"
        className="mb-24 rounded-[28px] border border-brand-line bg-white p-5 shadow-card"
      >
        <h3 className="font-heading text-2xl text-brand-premium">Taxa de matrícula</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Valor: R$ 100,00.
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          Na contratação de dois cursos, a taxa de matrícula é isenta.
        </p>
        <a
          href="https://wa.me/5562981899570"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-primary px-5 py-3.5 text-sm font-semibold text-white shadow-card-lg"
        >
          Falar com atendimento
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
          <Link href="/turmas" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Turmas
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-roseSoft">
              <BookOpen className="h-5 w-5" />
            </span>
            Planos
          </span>
        </div>
      </nav>
    </CourseShell>
  );
}
