import { Target, TrendingUp, Users, Zap } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Precision Lead Scoring",
    description:
      "AI-powered algorithms analyze lead behavior and demographics to identify your highest-value prospects.",
  },
  {
    icon: TrendingUp,
    title: "Increased Conversion Rates",
    description: "Focus your sales efforts on qualified leads and see conversion rates improve by up to 40%.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless workflow management keeps your entire sales team aligned and productive.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Reduce manual tasks with intelligent automation that nurtures leads through your pipeline.",
  },
]

export function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose iLMS for Your B2B Sales Team?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent lead management system transforms how you identify, nurture, and convert prospects into
            customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
