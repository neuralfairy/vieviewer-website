import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is iLMS and how does it work?",
    answer:
      "iLMS (Lead Management System) is a comprehensive B2B sales platform that streamlines and scores leads to enhance conversion efficiency. It integrates with your existing CRM and provides automated lead scoring, pipeline management, and detailed analytics to help your sales team focus on the most promising prospects.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most implementations are completed within 2-4 weeks, depending on your existing systems and customization requirements. Our team provides full support throughout the process, including data migration, team training, and ongoing optimization.",
  },
  {
    question: "Which CRM systems do you integrate with?",
    answer:
      "iLMS integrates with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Zoho CRM, and many others. We also offer custom integration options for proprietary systems.",
  },
  {
    question: "How accurate is the lead scoring?",
    answer:
      "Our AI-powered lead scoring algorithm achieves 85-95% accuracy by analyzing multiple data points including demographic information, behavioral patterns, engagement history, and company characteristics. The system continuously learns and improves over time.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including email support for all plans, priority support for Professional plans, and dedicated success managers for Enterprise customers. We also provide extensive documentation, video tutorials, and regular training webinars.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees. Your data will remain accessible for 30 days after cancellation, and we provide data export options to ensure you never lose your valuable lead information.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security measures including SSL encryption, SOC 2 compliance, regular security audits, and data centers with 99.9% uptime. Your data is backed up daily and stored in multiple secure locations.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and our team will help you get set up and see results quickly.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
