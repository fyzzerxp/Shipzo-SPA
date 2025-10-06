

export default function Footer() {
  return (
    <footer className="bg-[#3f5e5a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-2xl font-bold">Shipzo</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your favorite forwarder with a decade of international logistics expertise. Fast, transparent, and cost-effective solutions for all your freight needs.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm">
                  <p className="font-semibold mb-1">Phone:</p>
                  <p className="text-gray-300">+971 581368182</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold mb-1">Email:</p>
                  <p className="text-gray-300">info@shipzo.ae</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Air Freight</li>
                <li>Sea Freight</li>
                <li>GCC Road Transport</li>
                <li>Customs Clearance</li>
                <li>Cross Trade</li>
                <li>Project Cargo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Coverage Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Middle East</li>
                <li>Europe</li>
                <li>Africa</li>
                <li>Global Routes</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Shipzo Freight Services LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
