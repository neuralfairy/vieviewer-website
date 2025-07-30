import { Brain, BarChart3, Zap, Shield, Users, Globe } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Lead Scoring",
    description:
      "Advanced machine learning algorithms analyze behavioral patterns, company data, and engagement metrics to provide accurate lead scores.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Comprehensive dashboards and reports provide insights into lead quality, conversion rates, and sales performance metrics.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description:
      "Set up intelligent automation rules to nurture leads, assign tasks, and trigger actions based on lead behavior and scores.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with SSL encryption, SOC 2 compliance, and regular security audits to protect your sensitive data.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built-in collaboration tools allow your sales team to share insights, assign leads, and work together more effectively.",
  },
  {
    icon: Globe,
    title: "CRM Integration",
    description:
      "Seamlessly integrate with Salesforce, HubSpot, Pipedrive, and 50+ other CRM platforms with one-click setup.",
  },
]

export function FeatureBlocks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Scale Your Sales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive feature set is designed to support sales teams of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
