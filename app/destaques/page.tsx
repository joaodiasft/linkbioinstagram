"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, Sparkles, Star, User, Users } from "lucide-react";
import { DESTAQUES_NOTAS_IMAGES } from "@/lib/site-media";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

const depoimentos = [
  {
    nome: "Marta Oliveira",
    curso: "Editado 2 meses atrás",
    texto:
      "Minha filha fez o Curso Redação Nota Mil com a professora Martinha e teve ótimas aprovações nas universidades. Passou na UEG em 8º lugar em Arquitetura e Urbanismo e ficou no cadastro de reserva da UFG em 4º lugar. O espaço do curso é organizado, amplo e arejado. O atendimento é exemplar, e a professora é Nota 1000.",
  },
  {
    nome: "Amandda",
    curso: "Aprovada em Letras - UEG",
    texto:
      "Entrei em 2025 no curso preparatório com muitas dificuldades na escrita e, com nove meses de curso, garanti minha aprovação em Letras na UEG. Também melhorei minhas notas na escola graças à didática da professora Martha e hoje escrevo com muito mais facilidade.",
  },
  {
    nome: "Maria Luiza Mendes",
    curso: "Aluna 900+ | ENEM 2024: 940",
    texto:
      "Antes do curso, eu tinha dificuldade para organizar minhas ideias e manter a estrutura adequada do texto. Tudo mudou quando comecei as aulas. A professora é didática, paciente e explica de forma clara. Os materiais são completos e as correções detalhadas. Hoje escrevo com segurança, domínio e consciência do que é exigido.",
  },
];

export default function DestaquesPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-6">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Destaques
        </p>
        <h1 className="font-heading text-[42px] leading-[0.95] text-brand-premium">
          Relatos que
          <br />
          <span className="text-brand-pink">emocionam.</span>
        </h1>
      </section>

      <section className="mb-7 rounded-[24px] bg-gradient-primary p-5 text-white shadow-card-lg">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
          <Sparkles className="h-4 w-4" />
          Relatos reais
        </p>
        <h2 className="font-heading mt-3 text-2xl">Quem estuda aqui, evolui de verdade</h2>
        <p className="mt-2 text-sm text-white/90">
          Relatos reais de transformação, aprovação e confiança na escrita.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="font-heading mb-3 text-xl text-brand-premium">Registros e notas</h3>
        <p className="mb-3 text-sm text-brand-muted">
          Alguns destaques publicados pelos nossos alunos e pela equipe.
        </p>
        <div className="columns-2 gap-3 space-y-3">
          {DESTAQUES_NOTAS_IMAGES.map((item) => (
            <div
              key={item.src}
              className="break-inside-avoid overflow-hidden rounded-[18px] border border-brand-line bg-white shadow-card"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={480}
                height={480}
                className="w-full object-cover"
                sizes="(max-width: 480px) 50vw, 240px"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-heading text-xl text-brand-premium">Depoimentos</h3>
          <Link href="/contatos" className="text-xs font-semibold text-brand-pink">
            ver todos
          </Link>
        </div>
        <div className="space-y-3">
          {depoimentos.map((d) => (
            <article key={d.nome} className="rounded-[20px] border border-brand-line bg-white p-4 shadow-card">
              <Quote className="h-4 w-4 text-brand-pink" />
              <p className="mt-2 font-heading text-base text-brand-premium">{d.nome}</p>
              <p className="text-xs text-brand-muted">{d.curso}</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">{d.texto}</p>
              <p className="mt-2 text-brand-pink">★★★★★</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mb-24 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h3 className="font-heading text-xl text-brand-premium">Quer ser o próximo destaque?</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Fale com nossa equipe, conheça as turmas e inicie sua evolução agora.
        </p>
        <Link
          href="/contatos"
          className="font-manrope mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white shadow-card-lg"
        >
          Falar com a equipe
        </Link>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/resultados" className="flex flex-col items-center gap-1">
            <Star className="h-4.5 w-4.5" />
            Resultados
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <Users className="h-4.5 w-4.5" />
            </span>
            Destaques
          </span>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Contato
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
