import type { Metadata } from "next"
import { PricingHero } from "@/components/pricing-hero"
import { PricingTiers } from "@/components/pricing-tiers"
import { PricingFAQ } from "@/components/pricing-faq"

export const metadata: Metadata = {
  title: "iLMS Pricing Plans - Starter, Professional & Enterprise | Vieviewer Solutions",
  description:
    "Choose the perfect iLMS plan for your B2B sales team. Transparent pricing with no hidden fees. Start your free trial today.",
  keywords: "iLMS pricing, lead management pricing, B2B sales software cost, CRM pricing plans",
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
    </>
  )
}
