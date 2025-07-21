"use client";
import { Card, CardContent } from "./ui/card";
import { Plane, Ship, Truck } from "lucide-react";
import { Badge } from "./ui/badge";

export default function GlobalReachSection() {
  const hubs = [
    { name: "New York", left: "30%", top: "35%", type: "air" },
    { name: "London", left: "40%", top: "20%", type: "sea" },
    { name: "Singapore", left: "50%", top: "55%", type: "air" },
    { name: "Dubai", left: "60%", top: "40%", type: "sea" },
    { name: "Los Angeles", left: "34%", top: "70%", type: "air" },
    { name: "Shanghai", left: "70%", top: "30%", type: "sea" },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-teal text-white hover:text-teal border-teal-dark text-xs sm:text-sm"
          >
            Global Network
          </Badge>
          <h2 className="text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Connecting the World
            <span className="block text-teal">Through Logistics</span>
          </h2>
          <p className="text-base stext-xl text-gray-500 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our extensive global network ensures your cargo reaches every corner
            of the world with speed, reliability, and precision. From air
            freight to ocean shipping, we've got you covered.
          </p>
        </div>

        {/* World Map Section */}
        <div className="relative mb-12 sm:mb-16 ">
          <Card className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 border backdrop-blur-sm shadow-2xl">
            <CardContent className="lg:p-6">
              <div
                className="relative  h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/map3.png')`,
                  backgroundSize: "70%",
                }}
              >
                {/* Hub Points */}
                {hubs.map((hub, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                    style={{ left: hub.left, top: hub.top }}
                  >
                    <div className="relative">
                      {/* Ping Animation */}
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-teal rounded-full animate-ping absolute" />
                      {/* Main Hub Point */}
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-teal rounded-full relative z-10 border-2 border-white shadow-lg" />
                      {/* Transport Icon */}
                      {hub.type === "air" ? (
                        <Plane className="w-2 h-2 sm:w-3 sm:h-3 text-white absolute -top-0.5 sm:-top-1 -left-1 sm:-left-2 z-20" />
                      ) : (
                        <Ship className="w-2 h-2 sm:w-3 sm:h-3 text-white absolute -top-0.5 sm:-top-1 -left-1 sm:-left-2 z-20" />
                      )}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-slate-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap border border-slate-600 shadow-lg">
                        {hub.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-l border-t border-slate-600"></div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Floating Transport Icons */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex flex-col sm:flex-row gap-1 sm:gap-2 z-10">
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    <Plane className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    <Ship className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                    <Truck className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>

                {/* Network Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-100">
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="100%" stop-color="#1e3a8a" />
                    </linearGradient>
                  </defs>

                  <line
                    x1="30%"
                    y1="35%"
                    x2="40%"
                    y2="20%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                  <line
                    x1="40%"
                    y1="20%"
                    x2="60%"
                    y2="40%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <line
                    x1="50%"
                    y1="55%"
                    x2="70%"
                    y2="30%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <line
                    x1="34%"
                    y1="70%"
                    x2="30%"
                    y2="35%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <line
                    x1="50%"
                    y1="55%"
                    x2="34%"
                    y2="70%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <line
                    x1="50%"
                    y1="55%"
                    x2="40%"
                    y2="20%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
