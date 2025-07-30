import { Target, Users, Lightbulb } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-16">
            At Vieviewer Solutions, we believe that every B2B sales team deserves access to intelligent tools that help
            them identify, prioritize, and convert their best prospects. Our iLMS platform combines cutting-edge AI with
            intuitive design to make lead management simple, effective, and profitable.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Precision Focus</h3>
              <p className="text-gray-600">Help sales teams focus their efforts on the leads most likely to convert.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Success</h3>
              <p className="text-gray-600">
                Empower entire sales organizations with collaborative tools and shared insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolve our platform with the latest AI and machine learning advances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
