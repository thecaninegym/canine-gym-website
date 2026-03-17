import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Analytics from "@/components/Analytics";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const OG_IMAGE = 'https://www.thecaninegym.com/og-image.png'

export const metadata: Metadata = {
  title: 'The Canine Gym | Mobile Dog Fitness Hamilton County, IN',
  description: 'Professional mobile dog fitness sessions delivered to your door. Your dog runs on our slatmill right from our van. Serving Carmel, Fishers, Westfield, Noblesville, Zionsville & Geist.',
  alternates: {
    canonical: 'https://www.thecaninegym.com',
  },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.thecaninegym.com/#business',
      name: 'The Canine Gym',
      description: 'Professional mobile dog fitness service delivering slatmill workouts to your driveway. Serving Hamilton County, Indiana.',
      url: 'https://www.thecaninegym.com',
      telephone: '+1-317-820-2541',
      email: 'info@thecaninegym.com',
      logo: 'https://www.thecaninegym.com/logo.png',
      image: OG_IMAGE,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hamilton County',
        addressRegion: 'IN',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Carmel', sameAs: 'https://en.wikipedia.org/wiki/Carmel,_Indiana' },
        { '@type': 'City', name: 'Fishers', sameAs: 'https://en.wikipedia.org/wiki/Fishers,_Indiana' },
        { '@type': 'City', name: 'Westfield', sameAs: 'https://en.wikipedia.org/wiki/Westfield,_Indiana' },
        { '@type': 'City', name: 'Noblesville', sameAs: 'https://en.wikipedia.org/wiki/Noblesville,_Indiana' },
        { '@type': 'City', name: 'Zionsville', sameAs: 'https://en.wikipedia.org/wiki/Zionsville,_Indiana' },
        { '@type': 'City', name: 'Geist', sameAs: 'https://en.wikipedia.org/wiki/Geist,_Indiana' },
      ],
      sameAs: [
        'https://www.thecaninegym.com',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.thecaninegym.com/#service',
      name: 'Mobile Dog Fitness Sessions',
      description: 'Professional 30-minute dog slatmill workout sessions delivered to your home. Your dog runs on a purpose-built canine treadmill right from our van, parked in your driveway.',
      provider: { '@id': 'https://www.thecaninegym.com/#business' },
      areaServed: 'Hamilton County, Indiana',
      serviceType: 'Mobile Dog Fitness',
      offers: [
        {
          '@type': 'Offer',
          name: 'A La Carte Session',
          price: '55.00',
          priceCurrency: 'USD',
          description: 'Single dog fitness session, no commitment required.',
        },
        {
          '@type': 'Offer',
          name: 'Standard Membership',
          price: '180.00',
          priceCurrency: 'USD',
          description: '4 dog fitness sessions per month.',
        },
        {
          '@type': 'Offer',
          name: 'Pro Membership',
          price: '340.00',
          priceCurrency: 'USD',
          description: '8 dog fitness sessions per month.',
        },
        {
          '@type': 'Offer',
          name: 'Elite Membership',
          price: '480.00',
          priceCurrency: 'USD',
          description: '12 dog fitness sessions per month.',
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L261S4ZCCV"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L261S4ZCCV');
          `}
        </Script>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
