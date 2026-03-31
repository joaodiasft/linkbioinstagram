"use client";

import Link from "next/link";
import { Car, Clock3, MapPin, Train, User, BusFront } from "lucide-react";
import { CourseHeaderBack, CourseShell } from "@/components/course/shell";

export default function LocalizacaoPage() {
  return (
    <CourseShell>
      <CourseHeaderBack title="Redação Nota Mil" />

      <section className="mb-7">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
          Onde a mágica acontece
        </p>
        <h1 className="font-heading text-[44px] leading-[0.95] text-brand-premium">
          Nossa <span className="text-brand-pink">Sede</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted">
          Estamos em Goiânia, em uma unidade preparada para aulas presenciais com
          conforto, fácil acesso e estrutura de estudo.
        </p>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-4 overflow-hidden rounded-[20px] border border-brand-line">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d584.9725256740177!2d-49.33003271776306!3d-16.617601248148098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef559fa1c3b25%3A0xcf4219c72fa4abcc!2zQ3Vyc28gUmVkYcOnw6NvIE5vdGEgTWlsIEdvacOibmlh!5e0!3m2!1spt-BR!2sbr!4v1774981256076!5m2!1spt-BR!2sbr"
            title="Mapa da Redação Nota Mil"
            className="h-[300px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href="https://maps.app.goo.gl/jsKaQLFwsA4wCScE7"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-white"
        >
          <MapPin className="h-4 w-4" />
          Abrir no Google Maps
        </a>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft text-brand-pink">
          <MapPin className="h-4 w-4" />
        </div>
        <h2 className="font-heading text-2xl text-brand-premium">Endereço</h2>
        <p className="mt-2 text-sm text-brand-muted">
          Rua F, R. L-01, Qd.159
          <br />
          Goiânia - GO, 74475-060
          <br />
          Plus Code: 9MJC+W2 Goiânia, Goiás
        </p>
        <div className="mt-4 border-t border-dashed border-brand-line pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Ponto de referência
          </p>
          <p className="mt-1 text-sm text-brand-muted">
            Referência no Google Maps: Curso Redação Nota Mil Goiânia.
          </p>
        </div>
      </section>

      <section className="mb-6 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h2 className="font-heading text-2xl text-brand-premium">Como Chegar</h2>
        <ul className="mt-4 space-y-3">
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <Train className="h-4 w-4 text-brand-pink" />
              Transporte urbano
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Acesso por terminais e linhas integradas da região.
            </p>
          </li>
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <BusFront className="h-4 w-4 text-brand-pink" />
              Ônibus
            </p>
            <p className="mt-1 text-sm text-brand-muted">Linhas que passam pela região da unidade.</p>
          </li>
          <li className="rounded-2xl bg-brand-surface p-3">
            <p className="font-heading flex items-center gap-2 text-base text-brand-premium">
              <Car className="h-4 w-4 text-brand-pink" />
              Carro
            </p>
            <p className="mt-1 text-sm text-brand-muted">Acesso fácil com estacionamento próximo.</p>
          </li>
        </ul>
      </section>

      <section className="mb-24 rounded-[24px] border border-brand-line bg-white p-4 shadow-card">
        <h2 className="font-heading flex items-center gap-2 text-2xl text-brand-premium">
          <Clock3 className="h-5 w-5 text-brand-pink" />
          Horário de Funcionamento
        </h2>
        <div className="mt-3 space-y-2">
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">Segunda-feira: 08:00 às 21:00</div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">Terça-feira: 08:00 às 21:00</div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">Quarta-feira: 08:00 às 22:00</div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">Quinta-feira: 08:00 às 21:00</div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">
            Sexta-feira (feriado pode variar): 08:00 às 21:00
          </div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">Sábado: 08:00 às 21:00</div>
          <div className="rounded-xl bg-brand-surface p-3 text-sm text-brand-muted">
            Domingo (Páscoa): Fechado
          </div>
        </div>
      </section>

      <nav className="fixed bottom-0 left-0 right-0 z-40 flex justify-center border-t border-brand-line bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-nav backdrop-blur-md">
        <div className="flex w-full max-w-linktree items-center justify-around px-2 py-2 text-[10px] font-manrope font-medium text-brand-icon">
          <Link href="/" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Início
          </Link>
          <span className="flex flex-col items-center gap-1 text-brand-pink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-roseSoft">
              <MapPin className="h-4.5 w-4.5" />
            </span>
            Mapa
          </span>
          <Link href="/contatos" className="flex flex-col items-center gap-1">
            <Clock3 className="h-4.5 w-4.5" />
            Contato
          </Link>
          <Link href="/resultados" className="flex flex-col items-center gap-1">
            <User className="h-4.5 w-4.5" />
            Alunos
          </Link>
        </div>
      </nav>
    </CourseShell>
  );
}
