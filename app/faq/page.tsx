import type { Metadata } from "next"
import { FAQHero } from "@/components/faq-hero"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - iLMS Implementation & Support",
  description:
    "Get answers to common questions about iLMS implementation, pricing, integrations, and support from Vieviewer Solutions.",
  keywords: "iLMS FAQ, lead management questions, B2B sales software support, CRM implementation",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is iLMS and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iLMS (Lead Management System) is a comprehensive B2B sales platform that streamlines and scores leads to enhance conversion efficiency. It integrates with your existing CRM and provides automated lead scoring, pipeline management, and detailed analytics.",
      },
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most implementations are completed within 2-4 weeks, depending on your existing systems and customization requirements. Our team provides full support throughout the process.",
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FAQHero />
      <FAQSection />
    </>
  )
}
