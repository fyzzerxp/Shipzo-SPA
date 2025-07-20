import React from 'react';
import { Ship, Plane, Truck, FileCheck, Globe, Package, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';
import ParallaxComponent from './components/ParallaxContactSection';


function App() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Navigation */}
      <nav className="fixed top-0 w-full min-h-[40px] bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
           
          
              <img className='w-28' src="/logo.jpg" alt="" />
           
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal transition-colors ">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-teal transition-colors">Contact</a>
            </div>
            <button className="bg-teal text-white px-6 py-2 rounded-lg hover:bg-teal-dark transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

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
                Fast, transparent, and cost-effective logistics solutions backed by 14+ years of international expertise across the Middle East and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-dark transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-teal text-teal px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal hover:text-white transition-colors">
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
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Founded in 2025, Shipzo is a dynamic freight forwarding and logistics company built on over 14 years of international industry expertise.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Logistics Excellence</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                With deep operational experience across Bahrain, Qatar, Saudi Arabia, and the UAE, as well as global trade routes involving the USA, UK, China, and beyond, we understand the complexities of modern logistics.
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
                   
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">14+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
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
                                        14+ years of international logistics expertise
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
      <section id="services" className="py-20 bg-gray-50">
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

     

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Ready to streamline your logistics? Contact our expert team for personalized freight solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-500">+971 544263686</p>
                    <p className="text-sm text-gray-500">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-500">info@shipzo.com</p>
                    <p className="text-sm text-gray-500">Quick response guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Areas</h4>
                    <p className="text-gray-500">UAE, Qatar, Saudi Arabia, Bahrain</p>
                    <p className="text-sm text-gray-500">Global trade routes worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-3">Why Contact Us?</h4>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>✓ Free consultation and quote</li>
                  <li>✓ Expert advice on logistics solutions</li>
                  <li>✓ Customized service packages</li>
                  <li>✓ Competitive pricing</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+971 XXX XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select service type</option>
                    <option>Air Freight</option>
                    <option>Sea Freight (FCL)</option>
                    <option>Sea Freight (LCL)</option>
                    <option>GCC Road Transport</option>
                    <option>Customs Clearance</option>
                    <option>Cross Trade</option>
                    <option>Project Cargo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your shipping requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-teal text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3f5e5a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-2xl font-bold">Shipzo</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your favorite forwarder with 14+ years of international logistics expertise. Fast, transparent, and cost-effective solutions for all your freight needs.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm">
                  <p className="font-semibold mb-1">Phone:</p>
                  <p className="text-gray-300">+971 544263686</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold mb-1">Email:</p>
                  <p className="text-gray-300">info@shipzo.com</p>
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
    </div>
  );
}

export default App;