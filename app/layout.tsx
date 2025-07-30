import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LiveChat } from "@/components/live-chat"
import { ExitIntentPopup } from "@/components/exit-intent-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vieviewer Solutions - iLMS Lead Management System",
  description:
    "Streamline and score sales leads to enhance conversion efficiency for B2B sales teams with our flagship iLMS platform.",
  keywords: "lead management, lead scoring, sales pipeline, iLMS, B2B sales tools, CRM, sales automation",
  authors: [{ name: "Vieviewer Solutions" }],
  openGraph: {
    title: "Vieviewer Solutions - iLMS Lead Management System",
    description: "Streamline and score sales leads to enhance conversion efficiency for B2B sales teams.",
    url: "https://vieviewer.com",
    siteName: "Vieviewer Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieviewer Solutions - iLMS Lead Management System",
    description: "Streamline and score sales leads to enhance conversion efficiency for B2B sales teams.",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vieviewer Solutions",
  url: "https://vieviewer.com",
  logo: "https://vieviewer.com/logo.png",
  description: "Streamline and score sales leads to enhance conversion efficiency for B2B sales teams.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buffalo",
    addressRegion: "NY",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-716-555-0123",
    contactType: "sales",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LiveChat />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
