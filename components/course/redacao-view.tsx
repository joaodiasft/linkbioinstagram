"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Home,
  MessageCircle,
  Trophy,
  Users,
} from "lucide-react";
import { MatriculaWhatsAppCta } from "@/components/ui/matricula-cta";
import { CourseHeaderBack, CourseShell, SectionLineTitle } from "./shell";

const destaques = [
  "Aulas práticas com foco total nas competências do ENEM.",
  "Correções orientadas com feedback acionável por texto.",
  "Mentoria próxima para evolução contínua e consistente.",
  "Plano de estudos organizado para quem quer resultado real.",
] as const;

const resultados = [
  { valor: "900+", label: "Notas de destaque", icon: Trophy },
  { valor: "2 mil", label: "Alunos impactados", icon: Users },
  { valor: "90%", label: "Aprovação", icon: CheckCircle2 },
  { valor: "1:30", label: "Duração média por aula", icon: Clock3 },
] as const;

export function RedacaoView() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Matrículas Abertas" />

      <section className="mb-8">
        <span className="mb-3 inline-flex rounded-full bg-brand-roseSoft px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-wider text-brand-pink">
          Matrículas Abertas
        </span>
        <h1 className="font-heading text-[40px] leading-[0.95] text-brand-premium">
          Nota 1000 começa com
          <br />
          <span className="text-brand-pink">decisão certa.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Esta página é exclusiva para matrícula. Aqui você entende a proposta
          do programa, vê os resultados e garante sua vaga com prioridade.
        </p>
      </section>

      <section className="mb-8 rounded-[26px] bg-gradient-primary p-5 text-white shadow-card-lg">
        <h2 className="font-heading text-3xl leading-tight">
          O caminho certo para a Nota 1000
        </h2>
        <p className="mt-2 text-sm text-white/90">
          Curso de Redação com método, prática, correção e acompanhamento
          humanizado do início ao fim.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {resultados.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/15 p-3">
              <item.icon className="h-4 w-4" />
              <p className="font-heading mt-1 text-2xl">{item.valor}</p>
              <p className="text-[10px] uppercase tracking-wide text-white/90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionLineTitle>Por que entrar agora</SectionLineTitle>
        <div className="space-y-3">
          {destaques.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="flex items-start gap-2 rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-pink" />
              <p className="text-sm text-brand-muted">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-2xl text-brand-premium">
          Fluxo da matrícula
        </h3>
        <ol className="mt-3 space-y-2 text-sm text-brand-muted">
          <li>1. Escolha sua trilha e modalidade.</li>
          <li>2. Faça o contato com nossa equipe.</li>
          <li>3. Receba orientação para início imediato.</li>
          <li>4. Entre na turma e comece seu plano de evolução.</li>
        </ol>
      </section>

      <section id="matricula-red" className="mb-24">
        <MatriculaWhatsAppCta className="font-manrope inline-flex w-full items-center justify-center rounded-[26px] bg-gradient-primary px-6 py-4 text-center text-[15px] font-semibold text-white shadow-card-lg transition hover:brightness-105 active:scale-[0.98]">
          Quero entrar agora
        </MatriculaWhatsAppCta>
        <Link
          href="/curso-redacao"
          className="font-manrope mt-3 inline-flex w-full items-center justify-center gap-1 text-sm font-semibold text-brand-pink"
        >
          Ver todos os módulos <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md"
        aria-label="Navegação"
      >
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1 text-brand-pink">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <Link href="/curso-redacao" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Curso
          </Link>
          <Link href="/bolsa" className="flex flex-col items-center gap-1">
            <MessageCircle className="h-5 w-5" />
            Bolsa
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
