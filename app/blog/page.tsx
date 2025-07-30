import type { Metadata } from "next"
import { BlogHero } from "@/components/blog-hero"
import { BlogPosts } from "@/components/blog-posts"

export const metadata: Metadata = {
  title: "B2B Sales & CRM Leadership Blog | Vieviewer Solutions",
  description:
    "Expert insights on lead management, sales pipeline optimization, and B2B sales strategies from the Vieviewer Solutions team.",
  keywords: "B2B sales blog, lead management tips, CRM best practices, sales pipeline optimization",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
    </>
  )
}
