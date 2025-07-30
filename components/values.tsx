import { Heart, Shield, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers and their success.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of data security and privacy protection.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously push the boundaries of what's possible in sales technology.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come from working together toward common goals.",
  },
]

export function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide everything we do at Vieviewer Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
