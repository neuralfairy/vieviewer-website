import type { Metadata } from "next"
import { FeaturesHero } from "@/components/features-hero"
import { InteractiveDemo } from "@/components/interactive-demo"
import { FeatureBlocks } from "@/components/feature-blocks"
import { Integrations } from "@/components/integrations"

export const metadata: Metadata = {
  title: "iLMS Features - Advanced Lead Management & Scoring | Vieviewer Solutions",
  description:
    "Discover powerful iLMS features including lead scoring, pipeline management, automated workflows, and CRM integrations for B2B sales teams.",
  keywords: "lead scoring features, sales pipeline management, CRM integration, automated workflows, B2B sales tools",
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <InteractiveDemo />
      <FeatureBlocks />
      <Integrations />
    </>
  )
}
