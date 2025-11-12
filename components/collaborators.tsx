"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function Collaborators() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Clone items for infinite scroll effect
    const items = container.querySelectorAll(".carousel-item")
    items.forEach((item) => {
      const clone = item.cloneNode(true)
      container.appendChild(clone)
    })
  }, [])

  const collaborators = [
    {
      id: 1,
      name: "MILES",
      image: "/collaborators/miles.jpg", // Add CBSE logo to public/collaborators/
      alt: "MILES Ngo"
    },
    {
      id: 2,
      name: "Malik Deenar Haj Service",
      image: "/collaborators/malikdeenar.png", // Add NMMS logo
      alt: "Travel and Haj Services"
    },
    {
      id: 3,
      name: "Kerala Government",
      image: "/collaborators/nmms.png", // Add Kerala Govt logo
      alt: "Government of Kerala"
    },
    {
      id: 4,
      name: "Microsoft Education",
      image: "/collaborators/nmms.png", // Add Microsoft Education logo
      alt: "Microsoft Education Partner"
    },
    {
      id: 5,
      name: "Google for Education",
      image: "/collaborators/nmms.png", // Add Google for Education logo
      alt: "Google for Education"
    },
    {
      id: 6,
      name: "Educational Trust",
      image: "/collaborators/nmms.png", // Add Educational Trust logo
      alt: "Educational Trust"
    },
    {
      id: 7,
      name: "Tech Innovators",
      image: "/collaborators/nmms.png", // Add Tech Innovators logo
      alt: "Tech Innovators"
    },
    {
      id: 8,
      name: "Learning Foundation",
      image: "/collaborators/nmms.png", // Add Learning Foundation logo
      alt: "Learning Foundation"
    }
  ]

  return (
    <section className="relative py-16 sm:py-24 sm:scroll-mt-24 overflow-hidden" id="collaborators">
      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <div className="text-center">
          <h2 className="text-3xl text-blue-950 sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-orange-600">Collaborators</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted partnerships with leading organizations and institutions
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-track {
            animation: scroll-left 30s linear infinite;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div ref={scrollContainerRef} className="carousel-track flex gap-8 w-max">
          {collaborators.map((company) => (
            <div key={company.id} className="carousel-item flex-shrink-0">
              <div className="glass-card-enhanced flex items-center justify-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer w-48 h-48">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow p-3">
                    <Image
                      src={company.image}
                      alt={company.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                    {company.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </section>
  )
}