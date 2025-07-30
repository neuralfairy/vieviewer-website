import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Office Location</h3>
            <p className="text-gray-600">
              123 Main Street
              <br />
              Buffalo, NY 14202
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">+1 (716) 555-0123</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">hello@vieviewer.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM EST
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Prefer to talk directly?</h3>
        <p className="text-gray-600 mb-4">
          Schedule a 15-minute call with our sales team to discuss your specific needs.
        </p>
        <button className="text-blue-600 font-medium hover:text-blue-700">Schedule a Call →</button>
      </div>
    </div>
  )
}
