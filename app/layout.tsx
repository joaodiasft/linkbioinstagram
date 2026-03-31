import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const heading = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Redação Nota Mil",
  description:
    "Conquiste sua vaga com a melhor redação do Brasil! Matrículas e informações dos cursos.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F4F8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${manrope.variable} ${heading.variable}`}
    >
      <body className={`${jakarta.className} antialiased`}>
        {children}
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
