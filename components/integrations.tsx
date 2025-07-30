const integrations = [
  { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
  { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Pipedrive", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Microsoft Dynamics", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Zoho CRM", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Mailchimp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Slack", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Zapier", logo: "/placeholder.svg?height=60&width=120" },
]

export function Integrations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Integrates with Your Existing Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect iLMS with your favorite CRM, marketing automation, and productivity tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img
                src={integration.logo || "/placeholder.svg"}
                alt={`${integration.name} logo`}
                className="h-8 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
