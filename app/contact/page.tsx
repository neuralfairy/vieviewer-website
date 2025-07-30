import type { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact Vieviewer Solutions - Get Started with iLMS Today",
  description:
    "Contact our B2B sales experts in Buffalo, NY. Schedule a demo, start your free trial, or get answers to your lead management questions.",
  keywords: "contact vieviewer, iLMS demo, Buffalo NY sales software, B2B sales consultation",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </>
  )
}
