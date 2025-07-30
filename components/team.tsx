const team = [
  {
    name: "Sarah Mitchell",
    title: "CEO & Founder",
    bio: "15+ years in B2B sales and technology. Former VP of Sales at two successful SaaS startups.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Chen",
    title: "CTO",
    bio: "AI and machine learning expert with a PhD from MIT. Previously led engineering teams at Google and Microsoft.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Maria Rodriguez",
    title: "VP of Customer Success",
    bio: "Customer success leader with 12+ years helping B2B companies optimize their sales processes.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team combines deep sales expertise with cutting-edge technology knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.title}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
