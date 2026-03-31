"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BOLSA_FORM_URL,
  bolsaPeriodRuleText,
  isMatriculaOpen,
  isBolsaOpen,
  matriculaPeriodRuleText,
  MATRICULA_WHATSAPP_URL,
  nextBolsaWindowLabel,
  nextMatriculaWindowLabel,
} from "@/lib/matricula-window";

type MatriculaWhatsAppCtaProps = {
  children: ReactNode;
  /** Classes do botão quando a matrícula está aberta (ex.: igual ao GradientCtaButton). */
  className: string;
  /** Espaçamento no placeholder de carregamento (ex.: mt-5). */
  loadingClassName?: string;
  /** Quando fechado, abre em nova aba para não perder o usuário (opcional). */
  closedHref?: string;
  closedHrefLabel?: string;
  helperClassName?: string;
};

/**
 * CTA que só leva ao WhatsApp de matrícula na janela mensal de matrícula.
 */
export function MatriculaWhatsAppCta({
  children,
  className,
  loadingClassName = "",
  closedHref = "/contatos",
  closedHrefLabel = "Falar com a equipe",
  helperClassName = "text-center text-xs text-brand-muted",
}: MatriculaWhatsAppCtaProps) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isMatriculaOpen());
  }, []);

  if (open === null) {
    return (
      <div
        className={`h-14 w-full animate-pulse rounded-[26px] bg-brand-roseSoft/90 ${loadingClassName}`}
        aria-hidden
      />
    );
  }

  if (open) {
    return (
      <a
        href={MATRICULA_WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled
        className={`${className} cursor-not-allowed opacity-60`}
        aria-disabled="true"
      >
        {children}
      </button>
      <p className={helperClassName}>{nextMatriculaWindowLabel()}</p>
      <p className={`${helperClassName} opacity-90`}>{matriculaPeriodRuleText()}</p>
      <Link
        href={closedHref}
        className="block text-center text-sm font-semibold text-brand-pink underline underline-offset-4"
      >
        {closedHrefLabel}
      </Link>
    </div>
  );
}

type BolsaFormCtaProps = {
  children: ReactNode;
  className: string;
  loadingClassName?: string;
  closedHref?: string;
  closedHrefLabel?: string;
  helperClassName?: string;
};

export function BolsaFormCta({
  children,
  className,
  loadingClassName = "",
  closedHref = "/contatos",
  closedHrefLabel = "Falar com a equipe",
  helperClassName = "text-center text-xs text-brand-muted",
}: BolsaFormCtaProps) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(isBolsaOpen());
  }, []);

  if (open === null) {
    return (
      <div
        className={`h-14 w-full animate-pulse rounded-[26px] bg-brand-roseSoft/90 ${loadingClassName}`}
        aria-hidden
      />
    );
  }

  if (open) {
    return (
      <a href={BOLSA_FORM_URL} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        disabled
        className={`${className} cursor-not-allowed opacity-60`}
        aria-disabled="true"
      >
        {children}
      </button>
      <p className={helperClassName}>{nextBolsaWindowLabel()}</p>
      <p className={`${helperClassName} opacity-90`}>{bolsaPeriodRuleText()}</p>
      <Link
        href={closedHref}
        className="block text-center text-sm font-semibold text-brand-pink underline underline-offset-4"
      >
        {closedHrefLabel}
      </Link>
    </div>
  );
}
