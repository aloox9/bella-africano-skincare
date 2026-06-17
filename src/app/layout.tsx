import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bella Africano | Premium Natural Skincare",
  description: "Glow naturally, shine beautifully. Luxury skincare rooted in African botanicals. Crafted for modern skin with highly intentional formulas.",
  keywords: "skincare, natural skincare, shea butter, african black soap, organic beauty, luxury skincare",
  openGraph: {
    title: "Bella Africano | Premium Natural Skincare",
    description: "Glow naturally, shine beautifully. Luxury skincare rooted in African botanicals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-brand-cream text-brand-charcoal font-sans antialiased">
          <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-P62YX0S090"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P62YX0S090');
    `}
  </Script>
        {children}
      </body>
    </html>
  );
}
