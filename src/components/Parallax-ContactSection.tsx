"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "./ui/button"


export default function ParallaxComponent() {
  return (
    <section className="relative h-64 md:h-80 flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url('/01.jpeg')`,
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text Content */}
          <div className="text-white text-center md:text-left max-w-2xl">
            <p className="text-sm md:text-base text-gray-300 mb-2">
              Experience hassle-free logistics with Shipzo– Contact us today!
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Contact us today to learn more about our logistics services.
            </h2>
          </div>

          {/* Right Side - WhatsApp Button */}
          <div className="flex-shrink-0">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 text-base font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => window.open("https://wa.me/971544263686?text=Hi")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
