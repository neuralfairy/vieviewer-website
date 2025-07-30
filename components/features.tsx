import { Button } from "@/components/ui/button"
import { BarChart3, Brain, Filter, Globe } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Lead Scoring",
    description: "Advanced machine learning algorithms analyze multiple data points to score leads accurately.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Filter,
    title: "Advanced Lead Filtering",
    description: "Segment leads based on industry, company size, behavior, and custom criteria.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance metrics and ROI with comprehensive reporting dashboards.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Globe,
    title: "CRM Integration",
    description: "Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and other popular CRMs.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Sales Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline your lead management process and boost sales performance.
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <Button variant="outline" asChild>
                  <Link href="/features">Learn More</Link>
                </Button>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
