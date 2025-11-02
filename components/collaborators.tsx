"use client"

import { useEffect, useRef } from "react"

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

  return (
    <section className="relative py-16 sm:py-24 sm:scroll-mt-24  overflow-hidden">
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

        <div ref={scrollContainerRef} className="carousel-track flex gap-6 w-max">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="carousel-item flex-shrink-0">
              <div className="glass-card-enhanced flex items-center justify-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer w-40 h-40">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-orange-300 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Partner {item}</p>
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
