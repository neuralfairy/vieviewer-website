import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales",
    company: "TechFlow Solutions",
    content:
      "iLMS transformed our lead qualification process. We've seen a 45% increase in conversion rates since implementation.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Michael Chen",
    title: "Sales Director",
    company: "DataDrive Inc",
    content:
      "The AI-powered lead scoring is incredibly accurate. Our sales team now focuses on the right prospects at the right time.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Business Development",
    company: "CloudScale Systems",
    content:
      "Implementation was seamless and the ROI was evident within the first month. Highly recommend for any B2B sales team.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading B2B Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their success with iLMS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
                <img
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={`${testimonial.company} logo`}
                  className="h-8 opacity-60"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
