import type { Metadata } from "next";
import { Noto_Sans_JP } from 'next/font/google'

import { Providers } from "./providers";
import "./globals.css";

import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import GTMInitializer from "@/types/GTMInitializer";

const noto = Noto_Sans_JP({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | BonZuttner',
    default: 'BonZuttner',
  },
  description: "BonZuttner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/bonzuttner_fabicon.png" />
      </head>
      <body className={noto.className}>
        <Providers>
          <GTMInitializer />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
