import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: 99,
    description: "Perfect for small sales teams getting started",
    features: [
      "Up to 1,000 leads per month",
      "Basic lead scoring",
      "Email support",
      "Standard integrations",
      "Basic reporting",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 299,
    description: "Ideal for growing B2B sales teams",
    features: [
      "Up to 10,000 leads per month",
      "Advanced AI lead scoring",
      "Priority support",
      "All CRM integrations",
      "Advanced analytics",
      "Custom workflows",
      "Team collaboration tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited leads",
      "Custom AI models",
      "Dedicated success manager",
      "Custom integrations",
      "White-label options",
      "Advanced security",
      "SLA guarantee",
    ],
    popular: false,
  },
]

export function PricingTiers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team size and requirements. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-blue-600 shadow-2xl scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  {typeof plan.price === "number" ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  )}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link href="/contact">{plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
