import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const OG_IMAGE = 'https://www.thecaninegym.com/og-image.png'

export const metadata: Metadata = {
  title: 'The Canine Gym | Mobile Dog Fitness Hamilton County, IN',
  description: 'Professional mobile dog fitness sessions delivered to your door. Your dog runs on our slatmill right from our van. Serving Carmel, Fishers, Westfield, Noblesville, Zionsville & Geist.',
  openGraph: {
    siteName: 'The Canine Gym',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The Canine Gym – Mobile Dog Fitness, Hamilton County, Indiana' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
