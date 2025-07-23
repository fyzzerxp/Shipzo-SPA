
import { Ship, Plane, Truck, FileCheck, Globe, Package, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import ParallaxComponent from './components/Parallax-ContactSection';
import GlobalReachSection from './components/GlobalReach-Section';
import ContactSection from './components/Contact-Section';
import Footer from './components/partial/Footer';
import Header from './components/partial/Header';
import WhatsAppFloatingButton from './components/WhatsApp-Floater-Button';


function App() {
  return (
    <div className="min-h-screen bg-white font-montserrat">

    <WhatsAppFloatingButton />

      {/* Navigation */}
     <Header/>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-green-50 to-indigo-100 mt-20">

         {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/11.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Your Favorite
                <span className="text-[#7FD0BD] block">Forwarder</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Fast, transparent, and cost-effective logistics solutions backed by a decade of international expertise across the Middle East and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => window.location.href = "#contact"} className="bg-teal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-dark transition-colors">
                  Get Started
                </button>
                <button onClick={() => window.location.href = "#services"} className="border-2 border-teal text-teal px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-8 w-8 text-teal" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-sm text-gray-500">UAE, Qatar, Saudi Arabia, Bahrain & beyond</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-teal" />
                    </div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-sm text-gray-500">Round-the-clock assistance</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="h-8 w-8 text-teal" />
                    </div>
                    <h3 className="font-semibold text-gray-900">14+ Years</h3>
                    <p className="text-sm text-gray-500">Industry expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-teal" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-sm text-gray-500">Professional logistics specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Shipzo</h2>
            <p className=" text-gray-500 max-w-3xl mx-auto">
            Shipzo is a UAE based modern logistics and freight forwarding company committed to simplifying global shipping. With smart solutions, reliable service, and a customer-first approach, we help businesses move goods quickly and efficiently across borders. Whether it’s air, sea, or land we make shipping seamless.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Logistics Excellence</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                With deep operational experience across Middle East, as well as global trade routes involving the USA, UK, China, and beyond, we understand the complexities of modern logistics.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our mission is to provide fast, transparent, and cost-effective logistics that keep your business moving forward. Backed by strong global networks and a customer-first approach, we are committed to delivering every shipment with care, precision, and reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Air & Sea Freight</h4>
                  <p className="text-sm text-gray-500">Comprehensive FCL & LCL solutions</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Customs Clearance</h4>
                  <p className="text-sm text-gray-500">Expert documentation & compliance</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">GCC Road Transport</h4>
                  <p className="text-sm text-gray-500">Regional connectivity solutions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Cargo</h4>
                  <p className="text-sm text-gray-500">Heavy lift & out-of-gauge handling</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
  <img
    className="w-full h-48  transition-transform duration-700 hover:scale-105"
    src="/10.png"
    alt="About Shipzo"
  />
  <img
    className="w-full h-48  transition-transform duration-700 hover:scale-105"
    src="/2.jpg"
    alt="About Shipzo"
  />
  <img
    className="w-full h-52  transition-transform duration-700 hover:scale-105"
    src="/8.jpg"
    alt="About Shipzo"
  />
  <img
    className="w-full h-52  transition-transform duration-700 hover:scale-105"
    src="/7.jpg"
    alt="About Shipzo"
  />
</div>

          </div>

         

        </div>
      </section>

     {/* Parallax Contact  Section */}
    <ParallaxComponent/>

      {/* {Why Choose Shipzo} */}
        <section id='why-shipzo' className="py-20  bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
            
                <div className="relative order-1 ">
                    <div className="relative  overflow-hidden rounded-3xl shadow-2xl group">
                        <img 
                            src="/02.jpeg" 
                            alt="Shipzo logistics operations" 
                            className="w-full h-76 sm:h-[18rem] lg:h-[30rem] object-cover object-[25%_80%] object- transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                   
                   
                </div>
                
            
                <div className="order-1 lg:order-2">
                    
                       
                       
                        <div className="relative bg-gradient-to-br from-teal to-teal-dark p-8 rounded-2xl text-white   shadow-2xl">
                          
                            <div className="mb-8">
                                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                    Why Choose 
                                    <span className="block text-teal-200">Shipzo?</span>
                                </h3>
                                
                            </div>
                            
                           
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg leading-relaxed group-hover:text-teal-100 transition-colors duration-300">
                                    Free consultation and quote
                                    </span>
                                </li>
                                
                                <li className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg leading-relaxed group-hover:text-teal-100 transition-colors duration-300">
                                        Strong presence across Middle East markets
                                    </span>
                                </li>
                                
                                <li className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg leading-relaxed group-hover:text-teal-100 transition-colors duration-300">
                                        Global trade route connections
                                    </span>
                                </li>
                                
                                <li className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg leading-relaxed group-hover:text-teal-100 transition-colors duration-300">
                                        24/7 customer support and tracking
                                    </span>
                                </li>
                                
                                <li className="flex items-start space-x-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-0.5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <span className="text-lg leading-relaxed group-hover:text-teal-100 transition-colors duration-300">
                                        Transparent pricing and reliable delivery
                                    </span>
                                </li>
                            </ul>
                        
                        </div>
                </div>
                </div>
                
            </div>
       
        </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Comprehensive freight solutions tailored to meet your business needs across air, sea, and land transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Air Freight */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Plane className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Air Freight</h3>
              <p className="text-gray-500 mb-6">
                Working with carefully selected carriers, we operate with schedules on all major routes so you can plan with certainty and become more efficient.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Scheduled flights on major routes</li>
                <li>• Express and standard delivery options</li>
                <li>• Real-time tracking and updates</li>
                <li>• Specialized handling for sensitive cargo</li>
              </ul>
            </div>

            {/* Sea Freight */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Ship className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sea Freight FCL & LCL</h3>
              <p className="text-gray-500 mb-6">
                Sea freight is a pure added value product to our client projects, based on solid professionalism and well talented expertise.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Full Container Load (FCL) services</li>
                <li>• Less than Container Load (LCL) consolidation</li>
                <li>• Port-to-port and door-to-door delivery</li>
                <li>• Competitive rates for regular shipments</li>
              </ul>
            </div>

            {/* GCC Road Transport */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">GCC Road Transport</h3>
              <p className="text-gray-500 mb-6">
                Efficient road transport solutions connecting all GCC countries with reliable inbound and outbound services.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Inbound & outbound to/from Qatar</li>
                <li>• Cross-border documentation</li>
                <li>• Regular scheduled departures</li>
                <li>• Temperature-controlled options</li>
              </ul>
            </div>

            {/* Customs Clearance */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customs Clearance</h3>
              <p className="text-gray-500 mb-6">
                Professional customs clearance services with comprehensive knowledge of import & export procedures across UAE and GCC.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Sea import/export custom clearing</li>
                <li>• Professional documentation handling</li>
                <li>• Regulatory compliance assistance</li>
                <li>• Duty and tax optimization</li>
              </ul>
            </div>

            {/* Cross Trade */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cross Trade Shipping</h3>
              <p className="text-gray-500 mb-6">
                We handle complex trade shipments across land, sea and air with precision and efficiency thanks to our experienced staff and global network.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Multi-modal transportation solutions</li>
                <li>• Third-country trade facilitation</li>
                <li>• Global shipping agent network</li>
                <li>• Complex routing optimization</li>
              </ul>
            </div>

            {/* Project Cargo */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Cargo</h3>
              <p className="text-gray-500 mb-6">
                Specialized handling of heavy lift and out-of-gauge cargo with expert project management and custom solutions.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Heavy lift cargo handling</li>
                <li>• Out-of-gauge shipment solutions</li>
                <li>• Project planning and coordination</li>
                <li>• Specialized equipment and expertise</li>
              </ul>
            </div>
          </div>
        </div>
       
      </section>

     {/* Global Reach */}
        <GlobalReachSection/>

     {/* Contact Section */}
        <ContactSection/>

      {/* Footer */}
     <Footer/>
    </div>
  );
}

export default App;