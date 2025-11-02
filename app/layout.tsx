import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Crescent Learning | Quality Education & Coaching | NMMS Preparation",
  description:
    "Crescent Learning - 38+ years of excellence in education. NMMS coaching, online courses, hybrid tuition, and student development programs. Join our Primary, Secondary, Senior Secondary, and Competitive Coaching divisions.",
  keywords: [
    "education",
    "coaching",
    "NMMS",
    "JEE",
    "NEET",
    "school",
    "tuition",
    "academic excellence",
    "student development",
  ],
  generator: "v0.app",
  authors: [{ name: "Crescent Learning" }],
  creator: "Crescent Learning",
  publisher: "Crescent Learning",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crescentlearning.com",
    siteName: "Crescent Learning",
    title: "Crescent Learning | Quality Education & Coaching",
    description: "38+ years of excellence in education with comprehensive coaching programs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crescent Learning - Quality Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crescent Learning | Quality Education & Coaching",
    description: "38+ years of excellence in education with comprehensive coaching programs",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://crescentlearning.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = darkMode ? '/icons/crescent.png' : '/icons/favicon-dark.svg';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        <Suspense fallback={null}>
          {/* <div className="fixed inset-0 z-0 bg-white dark:bg-black "> */}
          <div className="fixed inset-0 z-0 bg-white ">
            {/* <Plasma color="#172554 dark:#ea580c" speed={0.8} direction="forward" scale={1.5} opacity={0.7} mouseInteractive={true} /> */}
                      <Plasma color="#ea580" speed={0.8} direction="forward" scale={1.5} opacity={0.5} mouseInteractive={true} />
          </div>
          <div className="relative z-10">{children}</div>
        </Suspense>

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
