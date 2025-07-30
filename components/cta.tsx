import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your B2B Sales Process?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of sales teams who have already improved their conversion rates with iLMS.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            asChild
          >
            <Link href="/contact">Book a Demo</Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-blue-100">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Setup in under 30 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
