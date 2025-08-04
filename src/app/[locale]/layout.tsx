import type { Metadata } from "next";

import { Providers } from "../providers";
import "../globals.css";

import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import GTMInitializer from "@/types/GTMInitializer";
import TimezoneRedirect from "@/shared-components/TimezoneRedirect";

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: {
    template: '%s | BonZuttner',
    default: 'BonZuttner',
  },
  description: "BonZuttner",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/bonzuttner_fabicon.png" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Providers>
            <GTMInitializer />
            <TimezoneRedirect />
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
