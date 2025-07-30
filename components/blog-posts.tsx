import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "10 Lead Scoring Best Practices That Actually Work",
    excerpt:
      "Learn how to implement effective lead scoring strategies that improve conversion rates and sales efficiency.",
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    category: "Lead Management",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "The Future of B2B Sales: AI and Automation Trends",
    excerpt: "Explore how artificial intelligence is transforming B2B sales processes and what it means for your team.",
    author: "David Chen",
    date: "January 10, 2024",
    category: "Sales Technology",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "How to Align Sales and Marketing for Better Lead Quality",
    excerpt: "Discover strategies to improve collaboration between sales and marketing teams for higher quality leads.",
    author: "Maria Rodriguez",
    date: "January 5, 2024",
    category: "Sales Strategy",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "CRM Integration Guide: Maximizing Your Sales Stack",
    excerpt: "A comprehensive guide to integrating your CRM with other sales tools for maximum efficiency.",
    author: "Sarah Mitchell",
    date: "December 28, 2023",
    category: "CRM",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Measuring Sales Performance: KPIs That Matter",
    excerpt: "Learn which sales metrics actually drive business growth and how to track them effectively.",
    author: "David Chen",
    date: "December 20, 2023",
    category: "Analytics",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Building a High-Converting Sales Pipeline",
    excerpt: "Step-by-step guide to creating and optimizing your sales pipeline for maximum conversion rates.",
    author: "Maria Rodriguez",
    date: "December 15, 2023",
    category: "Sales Process",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function BlogPosts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
