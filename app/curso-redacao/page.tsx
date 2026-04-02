"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Clock3,
  FileText,
  Flame,
  GraduationCap,
  Home,
  Lightbulb,
  PenLine,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CourseHeaderBack,
  CourseShell,
  SectionLineTitle,
} from "@/components/course/shell";
import { TEACHER_REDACAO } from "@/lib/site-media";

const resultados = [
  { valor: "900+", label: "em notas de destaque" },
  { valor: "2 mil", label: "alunos impactados" },
  { valor: "90%", label: "de aprovação" },
  { valor: "Humanizado", label: "suporte e acompanhamento" },
] as const;

export default function CursoRedacaoPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Curso de Redação" />

      <section className="mb-8">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Matrículas Abertas
        </p>
        <h1 className="font-heading text-[40px] leading-[0.95] text-brand-premium">
          O caminho certo para a Nota 1000
          <br />
          na redação do ENEM
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          No Curso de Redação Nota Mil, o aluno aprende de forma clara,
          estratégica e acompanhada tudo o que precisa para dominar estrutura,
          argumentação, repertório sociocultural, proposta de intervenção,
          competências avaliadas, técnicas de escrita e gestão do tempo.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          Nosso objetivo não é apenas ensinar a escrever, mas formar alunos com
          segurança, repertório, estratégia e alto desempenho.
        </p>
      </section>

      <section className="mb-8 rounded-[26px] bg-gradient-primary p-5 text-white shadow-card-lg">
        <p className="font-heading text-2xl">Escrita Premium</p>
        <p className="mt-2 text-sm text-white/90">
          Resultados que comprovam a qualidade do nosso método.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {resultados.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/15 p-3">
              <p className="font-heading text-2xl">{item.valor}</p>
              <p className="text-[10px] uppercase tracking-wide text-white/90">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <SectionLineTitle>A ciência por trás da escrita</SectionLineTitle>
        <p className="text-sm leading-relaxed text-brand-muted">
          Nosso método foi construído com base em anos de experiência, prática
          em sala, correções detalhadas e resultados reais. O aluno compreende
          como a redação funciona e por que cada parte é essencial para construir
          textos mais fortes, repertórios produtivos e conclusões completas.
        </p>
      </section>

      <section className="mb-8">
        <SectionLineTitle>
          Por que escolher o Curso de Redação Nota Mil?
        </SectionLineTitle>
        <div className="space-y-3">
          {[
            {
              icon: PenLine,
              t: "Comece do zero",
              d: "Base clara, organizada e didática para quem está iniciando ou aperfeiçoando a escrita.",
            },
            {
              icon: Lightbulb,
              t: "Repertório coringa",
              d: "Autores, filósofos, filmes, dados e referências com uso estratégico e produtivo.",
            },
            {
              icon: Target,
              t: "Escrita estruturada",
              d: "Introdução, desenvolvimento e conclusão com técnica, organização e profundidade.",
            },
            {
              icon: FileText,
              t: "Correção que ensina",
              d: "Você entende o que ajustar, por que ajustar e como evoluir de forma contínua.",
            },
            {
              icon: BookOpen,
              t: "Conteúdos atualizados e completos",
              d: "Aulas cuidadosamente preparadas com foco no que realmente eleva a nota.",
            },
          ].map((item) => (
            <article
              key={item.t}
              className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg text-brand-premium">{item.t}</h3>
              <p className="mt-1 text-sm text-brand-muted">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8" id="curriculo-completo">
        <SectionLineTitle>Currículo de elite</SectionLineTitle>
        <p className="mb-3 text-sm text-brand-muted">
          Conheça as etapas da nossa preparação.
        </p>
        <Accordion defaultValue={[]} multiple={false} className="mt-3 space-y-2">
          {[
            {
              label: "01. A base da aprovação",
              content:
                "Estrutura dissertativo-argumentativa, introdução estratégica, tese, desenvolvimento, proposta de intervenção e competências avaliadas.",
            },
            {
              label: "02. Hipertrofia de repertório",
              content:
                "Ampliação de bagagem sociocultural, argumentação crítica e uso inteligente de repertórios relevantes.",
            },
            {
              label: "03. Finalização de alto nível",
              content:
                "Refinamento argumentativo, treino intensivo, revisão estratégica e domínio do tempo de prova.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={item.label}
              value={`cur-${idx}`}
              className="rounded-[22px] border border-brand-line bg-white px-4 shadow-card"
            >
              <AccordionTrigger className="font-manrope text-sm font-semibold text-brand-premium hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-brand-muted">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-2xl text-brand-premium">
          Como funciona o curso
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          O curso é organizado por módulos. Cada módulo tem 4 aulas de 1h30.
          Em cada encontro, o aluno recebe teoria clara, conteúdos atualizados,
          orientação prática e acompanhamento próximo da professora.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-brand-muted">
          Em todas as aulas, há produção de redação para correção e evolução
          contínua com prática constante e desenvolvimento progressivo.
        </p>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-2xl text-brand-premium">Turmas disponíveis</h3>
        <div className="mt-3 space-y-2 text-sm text-brand-muted">
          <p className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-brand-pink" /> Terça-feira - período
            noturno
          </p>
          <p className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-brand-pink" /> Sábado - período
            matutino
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-pink">
            Aulas on-line somente a partir de agosto de 2026.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <SectionLineTitle>Vozes do sucesso</SectionLineTitle>
        {[
          {
            q: "A correção individualizada mudou a minha forma de estruturar a redação. Passei a escrever com muito mais segurança.",
            n: "Maria Clara",
            tag: "Medicina",
          },
          {
            q: "Com o método do curso, consegui desenvolver melhor meus argumentos e elevar muito o nível da minha escrita.",
            n: "Lucas",
            tag: "Engenharia",
          },
        ].map((d) => (
          <div
            key={d.n}
            className="mb-3 rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
          >
            <Quote className="mb-2 h-5 w-5 text-brand-roseLight" />
            <p className="text-sm text-brand-muted">“{d.q}”</p>
            <p className="mt-2 text-xs font-semibold text-brand-premium">
              {d.n} - {d.tag}
            </p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <SectionLineTitle>Aceleradores de performance</SectionLineTitle>
        <div className="space-y-3">
          {[
            {
              icon: Sparkles,
              t: "Simulados espelho",
              d: "Treinos no estilo ENEM com tempo cronometrado para resistência, estratégia e segurança.",
            },
            {
              icon: Flame,
              t: "Revisão aquecida",
              d: "Checklist estratégico para evitar erros frequentes e chegar preparado no dia da prova.",
            },
            {
              icon: BookOpen,
              t: "Biblioteca de modelos",
              d: "Modelos comentados de alto nível para referência de estrutura e argumentação.",
            },
            {
              icon: Users,
              t: "Acompanhamento próximo",
              d: "Orientação contínua sobre ajustes e evolução em cada etapa da preparação.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[22px] border border-brand-line bg-white p-4 shadow-card"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="font-heading text-lg text-brand-premium">{item.t}</p>
              <p className="text-sm text-brand-muted">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-8 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <SectionLineTitle className="mb-2">Sobre a professora</SectionLineTitle>
        <div className="mb-4 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-brand-line bg-brand-surface shadow-card">
            <Image
              src={TEACHER_REDACAO}
              alt="Professora Martinha"
              width={280}
              height={280}
              className="h-auto max-h-[220px] w-auto max-w-full object-contain"
            />
          </div>
        </div>
        <h3 className="font-heading text-xl text-brand-premium">
          Professora Martinha
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          Especialista na área educacional, com formação reconhecida pelo MEC,
          atuação como corretora do ENEM e experiência no Colégio Militar.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          Desenvolveu metodologia própria com foco em resultado, clareza,
          prática e evolução real, marcada por acompanhamento próximo e correção
          cuidadosa.
        </p>
      </section>

      <section
        id="matricula-final"
        className="mb-24 rounded-[26px] bg-gradient-primary p-6 text-center text-white shadow-card-lg"
      >
        <h2 className="font-heading text-2xl">Curso de Redação Nota Mil</h2>
        <p className="mt-2 text-sm text-white/90">
          Mais do que ensinar a escrever, nós preparamos você para conquistar
          resultados reais.
        </p>
        <p className="mt-2 text-sm text-white/90">
          Se você deseja aprender redação com método, acompanhamento, prática
          constante e conteúdos completos, este é o lugar certo para a sua
          preparação.
        </p>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1 text-brand-pink">
            <Home className="h-5 w-5" />
            Início
          </Link>
          <Link href="/cursos/redacao" className="flex flex-col items-center gap-1">
            <GraduationCap className="h-5 w-5" />
            Matrícula
          </Link>
          <Link href="/bolsa" className="flex flex-col items-center gap-1">
            <Users className="h-5 w-5" />
            Bolsa
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
