import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { Mission } from "@/components/mission"
import { Team } from "@/components/team"
import { Values } from "@/components/values"

export const metadata: Metadata = {
  title: "About Vieviewer Solutions - Leading B2B Sales Intelligence Platform",
  description:
    "Learn about Vieviewer Solutions mission to streamline B2B sales processes. Meet our leadership team based in Buffalo, NY.",
  keywords: "about vieviewer, B2B sales company, lead management company, Buffalo NY tech company",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Team />
      <Values />
    </>
  )
}
