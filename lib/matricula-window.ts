/** Janelas de inscrição mensais (horário de Brasília). */
export const MATRICULA_TIMEZONE = "America/Sao_Paulo" as const;
export const MATRICULA_DAY_START = 1;
export const MATRICULA_DAY_END = 15;
export const BOLSA_DAY_START = 2;
export const BOLSA_DAY_END = 4;

export const MATRICULA_WHATSAPP_URL =
  "https://wa.me/5562981899570?text=" +
  encodeURIComponent(
    "Olá! Gostaria de fazer minha matrícula na Redação Nota Mil."
  );
export const BOLSA_FORM_URL = "https://forms.gle/Dhz1PFwEcDw9s5fp8";

const MONTHS_NOMINATIVE_LOWERCASE = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
] as const;

function ymdInTimezone(date: Date, timeZone: string) {
  const raw = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  const [y, m, d] = raw.split("-").map((p) => Number.parseInt(p, 10));
  return { year: y, month: m, day: d };
}

export function isMatriculaOpen(date: Date = new Date()): boolean {
  const { day } = ymdInTimezone(date, MATRICULA_TIMEZONE);
  return day >= MATRICULA_DAY_START && day <= MATRICULA_DAY_END;
}

export function isBolsaOpen(date: Date = new Date()): boolean {
  const { day } = ymdInTimezone(date, MATRICULA_TIMEZONE);
  return day >= BOLSA_DAY_START && day <= BOLSA_DAY_END;
}

/** Texto explicando o período fixo (1–15) em qualquer mês. */
export function matriculaPeriodRuleText(): string {
  return `As matrículas ficam disponíveis do dia ${MATRICULA_DAY_START} ao ${MATRICULA_DAY_END} de cada mês (horário de Brasília).`;
}

export function nextMatriculaWindowLabel(date: Date = new Date()): string {
  if (isMatriculaOpen(date)) {
    return `Matrículas abertas até o dia ${MATRICULA_DAY_END} deste mês.`;
  }

  const { year, month, day } = ymdInTimezone(date, MATRICULA_TIMEZONE);
  let nextYear = year;
  let nextMonth = month;

  if (day > MATRICULA_DAY_END) {
    nextMonth += 1;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
  }

  const monthName = MONTHS_NOMINATIVE_LOWERCASE[nextMonth - 1];
  return `Próxima matrícula: de ${MATRICULA_DAY_START} a ${MATRICULA_DAY_END} de ${monthName} de ${nextYear}.`;
}

export function bolsaPeriodRuleText(): string {
  return `A qualificação para bolsa fica disponível do dia ${BOLSA_DAY_START} ao ${BOLSA_DAY_END} de cada mês (horário de Brasília).`;
}

export function nextBolsaWindowLabel(date: Date = new Date()): string {
  if (isBolsaOpen(date)) {
    return `Qualificação para bolsa aberta até o dia ${BOLSA_DAY_END} deste mês.`;
  }

  const { year, month, day } = ymdInTimezone(date, MATRICULA_TIMEZONE);
  let nextYear = year;
  let nextMonth = month;

  if (day > BOLSA_DAY_END) {
    nextMonth += 1;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear += 1;
    }
  }

  const monthName = MONTHS_NOMINATIVE_LOWERCASE[nextMonth - 1];
  return `Próxima bolsa: de ${BOLSA_DAY_START} a ${BOLSA_DAY_END} de ${monthName} de ${nextYear}.`;
}
