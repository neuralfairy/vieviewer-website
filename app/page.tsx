import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { ROICalculator } from "@/components/roi-calculator"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Features />
      <ROICalculator />
      <Testimonials />
      <CTA />
    </>
  )
}
